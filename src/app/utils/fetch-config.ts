export function fetchConfig<T>(configPath: string): Promise<T> {
  return fetch(configPath).then((config) => config.json())
}
