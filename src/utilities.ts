export function api<T>(
  url: string,
  init?: RequestInit | undefined
): Promise<T> {
  return fetch(url, init).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
