export type RequestParams = {
  path: string;
  searchParams?: Record<string, string | number | undefined>;
  signal?: AbortSignal;
};
