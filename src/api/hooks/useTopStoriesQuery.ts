import { useQuery } from "@tanstack/react-query";
import { nytApi } from "../api";
import { nytKeys } from "../keys";

export function useTopStoriesQuery(section: string) {
  return useQuery({
    queryKey: nytKeys.topStories(section),
    queryFn: () => nytApi.getTopStories(section),
    enabled: Boolean(section),
  });
}
