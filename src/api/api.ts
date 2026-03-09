import { apiClient } from "./client";
import type { NewswireResponse, TopStoriesResponse } from "@/api/types";

export const nytApi = {
  getTopStories(section: string) {
    return apiClient<TopStoriesResponse>({
      path: `/topstories/v2/${section}.json`,
    });
  },

  getNewsDetailByUrl(url: string) {
    return apiClient<NewswireResponse>({
      path: `/news/v3/content.json`,
      searchParams: {
        url,
      },
    });
  },
};
