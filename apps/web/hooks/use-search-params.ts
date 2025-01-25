import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SortOption, Framework, ContentType } from "@/lib/services/search-service";

export function useSearchStateParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const current = new URLSearchParams(searchParams.toString());
      
      Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
          current.delete(key);
        } else if (Array.isArray(value)) {
          current.delete(key);
          value.forEach((v) => current.append(key, v));
        } else {
          current.set(key, value);
        }
      });

      return current.toString();
    },
    [searchParams]
  );

  const updateParams = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const queryString = createQueryString(params);
      router.push(`?${queryString}`, { scroll: false });
    },
    [router, createQueryString]
  );

  const getParam = (key: string): string | null => searchParams.get(key);
  const getArrayParam = (key: string): string[] => searchParams.getAll(key);

  return {
    getParam,
    getArrayParam,
    updateParams,
  };
} 