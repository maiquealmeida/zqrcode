import JSONCrush from '../packages/JSONCrush';

export function decompress<T = unknown>(compressedData: string) {
  const decompressedData = JSONCrush.uncrush(compressedData)

  return JSON.parse(decompressedData) as T;
}