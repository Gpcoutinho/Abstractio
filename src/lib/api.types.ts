// Tipos escritos à mão a partir do contrato do backend tentacle (sem OpenAPI/Swagger).

import type { Duvida, Reference } from '../data/curriculum/types';

export type Gender = 'male' | 'female' | 'other';

export type RankPatent = 'Polvinho' | 'Explorador' | 'Mestre dos Mares' | 'Kraken';

export interface UserProfile {
  name: string;
  gender: Gender | null;
  missionsCompleted: number;
  totalMissions: number;
  rank: {
    level: number;
    patent: RankPatent;
  };
  avatarIdx: number;
  avatarsUnlocked: number;
  activeFrame: number | null;
  activeAccessory: number | null;
  activeColor: number | null;
}

// Body é .strict() no backend: enviar exatamente estas chaves, nada a mais.
export interface CreateUserPayload {
  name: string;
  gender?: Gender | null;
  email: string;
  birthDate?: string | null; // YYYY-MM-DD
}

export interface CreatedUser {
  id: string;
  name: string;
  gender: Gender | null;
  email: string;
  birthDate: string | null;
}

export interface UserBalance {
  raw: string; // vem como string do backend — converter se precisar comparar
  formatted: string;
  currency: string;
}

export type ShopItemType = 'frame' | 'accessory' | 'color';

export type AvatarSlot = ShopItemType;

export interface ShopItem {
  id: number;
  itemType: ShopItemType;
  code: string;
  name: string;
  priceShells: number;
}

// Body é .strict() no backend: todos os campos são opcionais, mas pelo menos um é obrigatório
// (objeto vazio dá 400). Diferente de CreateUserPayload, gender aqui NÃO aceita null.
export interface UpdateUserPayload {
  name?: string;
  gender?: Gender;
  avatarIdx?: number;
  birthDate?: string; // YYYY-MM-DD
}

export interface UpdatedUser {
  name: string;
  gender: Gender | null;
  avatarIdx: number;
  birthDate: string | null;
}

export interface InventoryItem {
  id: number;
  itemType: ShopItemType;
  code: string;
  name: string;
  active: boolean;
}

export interface Inventory {
  items: InventoryItem[];
}

export interface PurchaseResult {
  inventoryId: number;
  item: ShopItem;
  shellBalance: number;
  acquiredAt: string;
}

export interface ActiveAvatarState {
  avatarIdx: number;
  activeFrame: number | null;
  activeAccessory: number | null;
  activeColor: number | null;
}

export interface Pagination {
  limit: number;
  offset: number;
  total: number;
}

export interface Paginated<T> {
  items: T[];
  pagination: Pagination;
}

export type ApiErrorCode =
  | 'validation_error'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'conflict'
  | 'internal_error';

export interface ApiErrorBody {
  error: {
    code: ApiErrorCode;
    message: string;
    details: unknown[];
  };
}

// ---- Trilhas / estrutura (GET /trails, GET /trails/detail/:trailId) ----

export interface TrailSummary {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  orderIndex: number;
}

export interface TrailMissionSummary {
  id: number;
  slug: string;
  title: string;
  emblem: string | null;
  hasMinigame: boolean;
  orderIndex: number;
  rewardShells: number;
}

export interface TrailLevelSummary {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  orderIndex: number;
  missions: TrailMissionSummary[];
}

export interface TrailDetail {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  orderIndex: number;
  totalMissions: number;
  levels: TrailLevelSummary[];
}

// ---- Progresso (GET /user/trails/:trailId/progress, GET /user/missions/:slug/progress) ----

export interface TrailProgressMission {
  missionId: number;
  missionSlug: string;
  missionTitle: string;
  completed: boolean;
  shellsEarned: number;
  extrasCompleted: number;
  totalExtras: number;
}

export interface TrailProgressLevel {
  levelId: number;
  shortTitle: string;
  orderIndex: number;
  missionsCompleted: number;
  totalMissions: number;
  percent: number;
  missions: TrailProgressMission[];
}

export interface TrailProgress {
  trailId: number;
  trailTitle: string;
  missionsCompleted: number;
  completedMissionIds: number[];
  totalMissions: number;
  percent: number;
  levels: TrailProgressLevel[];
}

export type QuestionKind = 'main' | 'extra';

export interface MissionProgressQuestion {
  questionId: number;
  questionSlug: string;
  kind: QuestionKind;
  attemptCount: number;
  answeredCorrectly: boolean;
  earnedShells: number;
}

export interface MissionProgress {
  missionId: number;
  missionSlug: string;
  completed: boolean;
  shellsEarned: number;
  questions: MissionProgressQuestion[];
}

// ---- Conteúdo da missão (GET /missions/:slug) — nunca traz gabarito ----

export interface MissionOption {
  id: number;
  label: string;
  orderIndex: number;
}

export interface MissionQuestion {
  id: number;
  slug: string;
  kind: QuestionKind;
  prompt: string;
  maxRewardShells: number;
  orderIndex: number;
  options: MissionOption[];
}

export interface MissionDetail {
  id: number;
  slug: string;
  title: string;
  emblem: string | null;
  theory: string;
  hasMinigame: boolean;
  summary?: string[];
  bibliography?: Reference[];
  faqs?: Record<string, Duvida>;
  orderIndex: number;
  questions: MissionQuestion[];
}

// ---- Submissão (POST /missions/:slug/questions/:questionSlug/submissions) ----

export interface SubmissionResult {
  isCorrect: boolean;
  attemptNumber: number;
  earnedShells: number;
  correctOptionId: number;
  explanation: string;
  wrongExplanation: string | null;
  shellBalance: number;
}

// ---- Bookmark (GET/PUT/DELETE /missions/:slug/bookmark) ----

export interface BookmarkData {
  scrollY: number;
  sectionTitle: string;
}
