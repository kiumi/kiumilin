export function metaImport(url: string, src: string) {
  return new URL(src, url).href
}