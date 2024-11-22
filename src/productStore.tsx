// store/productStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage, } from 'zustand/middleware';
type SortType = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface ProductStoreState {
  searchQuery: string;
  sortType: SortType;
  categoryFilter: string[];
  setSearchQuery: (query: string) => void;
  setSortType: (sort: SortType) => void;
  setCategoryFilter: (categories: string[]) => void;
}

export const useProductStore = create<ProductStoreState>() (persist((set,get) => ({
  searchQuery: '',
  sortType: 'price-asc',
  categoryFilter: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortType: (sort) => set({ sortType: sort }),
  setCategoryFilter: (categories) => set({ categoryFilter: categories }),

  
}),   {
    name: 'product-storage',
    storage: createJSONStorage(() => localStorage), // uses localStorage for persistence
  }
));
