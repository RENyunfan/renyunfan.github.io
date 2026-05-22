export function optimizedPublicImage(src: string | undefined, width = 900) {
  if (!src) return src;
  if (!src.startsWith("/")) return src;
  if (src.startsWith("/_optimized/")) return src;
  if (/\.(svg|gif|mp4|webm)$/i.test(src)) return src;

  const withoutSlash = src.slice(1);
  const withoutExtension = withoutSlash.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  return `/_optimized/w${width}/${withoutExtension}.webp`;
}
