import type { RequestParams } from "@/api/types";

const BASE_URL = import.meta.env.VITE_NYT_BASE_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export async function apiClient<T>({
  path,
  searchParams,
  signal,
}: RequestParams): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  url.searchParams.set("api-key", API_KEY);

  const response = await fetch(url.toString(), { signal });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
