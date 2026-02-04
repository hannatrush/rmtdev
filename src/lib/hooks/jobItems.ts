import { JobItem } from '../types';
import { BASE_API_URL } from '../const';
import { useQueries, useQuery } from '@tanstack/react-query';
import { handleError } from '../utils';
import { useStore } from '../../store/store';

const fetchJobItems = async (searchText: string): Promise<JobItem[]> => {
  const res = await fetch(`${BASE_API_URL}?qualifications=${searchText}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();
  return data;
};

export function useJobItemsQuery(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ['job-items', searchText],
    () => fetchJobItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      onError: handleError,
    },
  );

  return { jobItems: data, isLoading: isInitialLoading };
}

const fetchJobItem = async (id: string): Promise<JobItem> => {
  const res = await fetch(`${BASE_API_URL}/${id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.description);
  }

  const data = await res.json();
  return data;
};

export function useJobItem(id: string | null) {
  const { data, isInitialLoading } = useQuery(
    ['job-item', id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!id,
      onError: handleError,
    },
  );

  return { jobItem: data, isLoading: isInitialLoading };
}

export function useSelectedJobItems() {
  const ids = useStore().bookmarkedIds;

  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['job-item', id],
      queryFn: () => (id ? fetchJobItem(id) : null),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!id,
      onError: handleError,
    })),
  });

  const bookmarkedJobItems = results.map((result) => result.data).filter((jobItem) => !!jobItem);
  const isLoading = results.some((result) => result.isLoading);

  return {
    bookmarkedJobItems,
    isLoading,
  };
}
