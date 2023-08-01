export function toBaseUrl(src: string) {
  return new URL(src, import.meta.url).href
}