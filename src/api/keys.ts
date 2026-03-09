export const nytKeys = {
  all: ["nyt"] as const,
  topStories: (section: string) =>
    [...nytKeys.all, "top-stories", section] as const,
  detail: (url: string) => [...nytKeys.all, "detail", url] as const,
};
