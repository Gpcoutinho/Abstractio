// Tipos escritos à mão a partir do contrato do backend tentacle (sem OpenAPI/Swagger).

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
