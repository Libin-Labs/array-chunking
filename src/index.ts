export function chunkArray<T>(items: readonly T[], size: number): T[][] {
  if (!Array.isArray(items)) throw new TypeError('Expected an array');
  if (!Number.isSafeInteger(size) || size < 1 || size > 1000000)
    throw new RangeError('Invalid chunk size');
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}
