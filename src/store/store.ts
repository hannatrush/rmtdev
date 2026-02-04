import { create } from 'zustand';

type Store = {
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

export const useStore = create<Store>((set, get) => ({
  bookmarkedIds: JSON.parse(localStorage.getItem('bookmarkedIds') || JSON.stringify([])),
  activeId: null,
  toggleBookmark: (id) => {
    const bookmarkedIds = get().bookmarkedIds;
    const newBookmarkedIds = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((item) => item !== id)
      : [...bookmarkedIds, id];

    set(() => ({
      bookmarkedIds: newBookmarkedIds,
    }));
    localStorage.setItem('bookmarkedIds', JSON.stringify(newBookmarkedIds));
  },
  setActiveId: (id) => {
    set({ activeId: id });
  },
}));
