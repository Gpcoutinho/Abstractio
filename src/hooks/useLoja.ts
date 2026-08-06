import { useCallback, useEffect, useRef, useState } from 'react';
import { getApiErrorMessage, getUserInventory, getShopItems, purchaseShopItem, updateActiveAvatarItem } from '../lib/api';
import type { ActiveAvatarState, InventoryItem, ShopItem, ShopItemType } from '../lib/api.types';

export type LojaTab = 'molduras' | 'acessorios' | 'cores';

export const TAB_TO_CATEGORY: Record<LojaTab, ShopItemType> = {
  molduras: 'frame',
  acessorios: 'accessory',
  cores: 'color',
};

// Loja de Conchas: um GET /shop/items por aba (sempre com category), inventário
// buscado uma vez só e reaproveitado entre as três abas. Ver CLAUDE.md prompt 2, bloco 4.
export function useLoja(applyBalance: (raw: number) => void, applyActiveAvatar: (state: ActiveAvatarState) => void) {
  const [tab, setTab] = useState<LojaTab>('molduras');
  const [catalogByTab, setCatalogByTab] = useState<Partial<Record<LojaTab, ShopItem[]>>>({});
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loadingTab, setLoadingTab] = useState<LojaTab | null>(null);
  const [erro, setErro] = useState('');
  const [acaoEmAndamento, setAcaoEmAndamento] = useState<number | 'nenhuma' | null>(null);
  const inventarioCarregadoRef = useRef(false);

  useEffect(() => {
    if (catalogByTab[tab]) return; // já em cache, não refaz o request

    let cancelado = false;
    setLoadingTab(tab);
    setErro('');

    const category = TAB_TO_CATEGORY[tab];
    const precisaInventario = !inventarioCarregadoRef.current;

    Promise.all([
      getShopItems(category, 5),
      precisaInventario ? getUserInventory() : Promise.resolve(null),
    ])
      .then(([catalogRes, inventoryRes]) => {
        if (cancelado) return;
        setCatalogByTab(prev => ({ ...prev, [tab]: catalogRes.items }));
        if (inventoryRes) {
          inventarioCarregadoRef.current = true;
          setInventory(inventoryRes.items);
        }
      })
      .catch(err => {
        if (cancelado) return;
        setErro(getApiErrorMessage(err, 'loja'));
      })
      .finally(() => {
        if (!cancelado) setLoadingTab(null);
      });

    return () => {
      cancelado = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const comprar = useCallback(
    async (item: ShopItem) => {
      setErro('');
      setAcaoEmAndamento(item.id);
      try {
        const res = await purchaseShopItem(item.id);
        applyBalance(res.shellBalance);
        setInventory(prev => [...prev, { id: item.id, itemType: item.itemType, code: item.code, name: item.name, active: false }]);
      } catch (err) {
        setErro(getApiErrorMessage(err, 'loja'));
      } finally {
        setAcaoEmAndamento(null);
      }
    },
    [applyBalance],
  );

  const equipar = useCallback(
    async (slot: ShopItemType, itemId: number | null) => {
      setErro('');
      setAcaoEmAndamento(itemId ?? 'nenhuma');
      try {
        const res = await updateActiveAvatarItem(slot, itemId);
        applyActiveAvatar(res);
        setInventory(prev => prev.map(it => (it.itemType === slot ? { ...it, active: it.id === itemId } : it)));
      } catch (err) {
        setErro(getApiErrorMessage(err, 'loja'));
      } finally {
        setAcaoEmAndamento(null);
      }
    },
    [applyActiveAvatar],
  );

  return {
    tab,
    setTab,
    items: catalogByTab[tab] ?? [],
    inventory,
    loading: loadingTab === tab,
    erro,
    acaoEmAndamento,
    comprar,
    equipar,
  };
}
