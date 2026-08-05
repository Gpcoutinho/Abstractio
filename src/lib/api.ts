import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import type {
  ActiveAvatarState,
  ApiErrorBody,
  ApiErrorCode,
  AvatarSlot,
  BookmarkData,
  CreatedUser,
  CreateUserPayload,
  Inventory,
  MissionDetail,
  MissionProgress,
  Paginated,
  PurchaseResult,
  ShopItem,
  ShopItemType,
  SubmissionResult,
  TrailDetail,
  TrailProgress,
  TrailSummary,
  UpdatedUser,
  UpdateUserPayload,
  UserBalance,
  UserProfile,
} from './api.types';

const API_V1_BASE = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export class ApiError extends Error {
  status: number;
  code: ApiErrorCode;
  details: unknown[];

  constructor(status: number, code: ApiErrorCode, message: string, details: unknown[] = []) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

// Mensagem pronta pra exibir na UI. validation_error é bug de front (payload fora do
// schema .strict()) — nunca deveria acontecer, então loga os details e mostra algo genérico.
export function getApiErrorMessage(err: unknown, context: string): string {
  if (err instanceof ApiError) {
    if (err.code === 'validation_error') {
      console.error(`[${context}] validation_error`, err.details);
      return 'Não foi possível salvar. Tente novamente.';
    }
    return err.message;
  }
  return 'Falha de conexão. Tente novamente.';
}

interface ApiFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  query?: Record<string, string | number | undefined>;
  idempotencyKey?: string;
}

function buildUrl(path: string, query?: ApiFetchOptions['query']): string {
  const url = new URL(`${API_V1_BASE}${path}`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const { method = 'GET', body, query, idempotencyKey } = options;

  const headers: Record<string, string> = {};
  const idToken = await auth.currentUser?.getIdToken();
  if (idToken) headers['Authorization'] = `Bearer ${idToken}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

  const response = await fetch(buildUrl(path, query), {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Token inválido/expirado: derruba a sessão. O AuthContext (onAuthStateChanged)
      // detecta firebaseUser === null e o guard de rotas redireciona para o login.
      await signOut(auth);
    }

    let errorBody: ApiErrorBody | null = null;
    try {
      errorBody = await response.json();
    } catch {
      // corpo não-JSON (ex: erro de proxy/gateway) — cai no fallback abaixo
    }

    if (errorBody?.error) {
      throw new ApiError(response.status, errorBody.error.code, errorBody.error.message, errorBody.error.details);
    }
    throw new ApiError(response.status, 'internal_error', `Erro ${response.status} ao chamar ${path}`);
  }

  if (response.status === 204) return undefined as T;

  const text = await response.text();
  if (!text) return undefined as T;
  return JSON.parse(text) as T;
}

export function getUserProfile(): Promise<UserProfile> {
  return apiFetch<UserProfile>('/user');
}

export function createUser(payload: CreateUserPayload): Promise<CreatedUser> {
  return apiFetch<CreatedUser>('/user', { method: 'POST', body: payload });
}

export function getUserBalance(): Promise<UserBalance> {
  return apiFetch<UserBalance>('/user/balance');
}

// Body é .strict() e exige pelo menos um campo — objeto vazio dá 400 no backend.
export function updateUserProfile(payload: UpdateUserPayload): Promise<UpdatedUser> {
  if (Object.keys(payload).length === 0) {
    throw new ApiError(0, 'validation_error', 'updateUserProfile chamado com payload vazio.');
  }
  return apiFetch<UpdatedUser>('/user', { method: 'PATCH', body: payload });
}

// limit tem default baixo (5) no backend — sempre passar explícito.
export function getShopItems(category: ShopItemType, limit = 5, offset = 0): Promise<Paginated<ShopItem>> {
  return apiFetch<Paginated<ShopItem>>('/shop/items', { query: { category, limit, offset } });
}

export function getUserInventory(): Promise<Inventory> {
  return apiFetch<Inventory>('/user/inventory');
}

export function purchaseShopItem(itemId: number): Promise<PurchaseResult> {
  return apiFetch<PurchaseResult>('/user/inventory', { method: 'POST', body: { itemId } });
}

// itemId: null desequipa o item ativo daquele slot.
export function updateActiveAvatarItem(slot: AvatarSlot, itemId: number | null): Promise<ActiveAvatarState> {
  return apiFetch<ActiveAvatarState>('/user/avatar/active', { method: 'PATCH', body: { slot, itemId } });
}

// ---- Trilhas / estrutura ----

export async function getTrails(): Promise<TrailSummary[]> {
  const { trails } = await apiFetch<{ trails: TrailSummary[] }>('/trails');
  return trails;
}

export async function getTrailDetail(trailId: number): Promise<TrailDetail> {
  const { trail } = await apiFetch<{ trail: TrailDetail }>(`/trails/detail/${trailId}`);
  return trail;
}

// ---- Progresso ----

export async function getTrailProgress(trailId: number): Promise<TrailProgress> {
  const { progress } = await apiFetch<{ progress: TrailProgress }>(`/user/trails/${trailId}/progress`);
  return progress;
}

export async function getMissionProgress(missaoId: string): Promise<MissionProgress> {
  const { progress } = await apiFetch<{ progress: MissionProgress }>(`/user/missions/${missaoId}/progress`);
  return progress;
}

// ---- Conteúdo e submissão de missões ----

export async function getMissionDetail(missaoId: string): Promise<MissionDetail> {
  const { mission } = await apiFetch<{ mission: MissionDetail }>(`/missions/${missaoId}`);
  return mission;
}

// idempotencyKey: recomendado para evitar duplo-clique premiando 2x — repetir a mesma
// chave numa nova tentativa devolve a submissão já gravada, sem creditar de novo.
export function submitAnswer(
  missaoId: string,
  questionSlug: string,
  answerOptionId: number,
  idempotencyKey?: string,
): Promise<SubmissionResult> {
  return apiFetch<SubmissionResult>(`/missions/${missaoId}/questions/${questionSlug}/submissions`, {
    method: 'POST',
    body: { answerOptionId },
    idempotencyKey,
  });
}

// Idempotente — não exige ter acertado a pergunta principal (ex: missão "1-0" não tem uma).
export function completeMission(missaoId: string): Promise<void> {
  return apiFetch<void>(`/missions/${missaoId}/completions`, { method: 'POST' });
}

// Não estorna conchas já ganhas na missão, só remove a marca de concluída.
export function deleteMissionCompletion(missaoId: string): Promise<void> {
  return apiFetch<void>(`/missions/${missaoId}/completions`, { method: 'DELETE' });
}

// ---- Bookmark (posição de leitura) ----

// Devolve { bookmark: null } com 200 quando não há bookmark salvo — nunca 404.
// O bookmark vem envelopado com missionId/createdAt; só `data` interessa ao front.
interface BookmarkRecord {
  missionId: number;
  data: BookmarkData;
  createdAt: string;
}

export async function getBookmark(missaoId: string): Promise<BookmarkData | null> {
  const { bookmark } = await apiFetch<{ bookmark: BookmarkRecord | null }>(`/missions/${missaoId}/bookmark`);
  return bookmark?.data ?? null;
}

export function putBookmark(missaoId: string, data: BookmarkData): Promise<void> {
  return apiFetch<void>(`/missions/${missaoId}/bookmark`, { method: 'PUT', body: { data } });
}

export function deleteBookmark(missaoId: string): Promise<void> {
  return apiFetch<void>(`/missions/${missaoId}/bookmark`, { method: 'DELETE' });
}
