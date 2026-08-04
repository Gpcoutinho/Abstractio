import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import type {
  ApiErrorBody,
  ApiErrorCode,
  AvatarSlot,
  CreatedUser,
  CreateUserPayload,
  Paginated,
  ShopItem,
  ShopItemType,
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

interface ApiFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  query?: Record<string, string | number | undefined>;
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
  const { method = 'GET', body, query } = options;

  const headers: Record<string, string> = {};
  const idToken = await auth.currentUser?.getIdToken();
  if (idToken) headers['Authorization'] = `Bearer ${idToken}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

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

export function getShopItems(category?: ShopItemType): Promise<Paginated<ShopItem>> {
  return apiFetch<Paginated<ShopItem>>('/shop/items', { query: { category } });
}

// id: null desequipa o item ativo daquele slot.
export function updateActiveAvatarItem(slot: AvatarSlot, id: number | null): Promise<void> {
  return apiFetch<void>('/user/avatar/active', { method: 'PATCH', body: { slot, id } });
}
