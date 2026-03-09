import { useQuery } from "@tanstack/react-query";
import { nytApi } from "@/api/api";
import { nytKeys } from "@/api/keys";

export function useNewsDetailQuery(url: string) {
  return useQuery({
    queryKey: nytKeys.detail(url),
    queryFn: () => nytApi.getNewsDetailByUrl(url),
    enabled: Boolean(url),
    select: (data) => data.results?.[0] ?? null,
  });
}
