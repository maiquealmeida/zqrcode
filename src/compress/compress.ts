import JSONCrush from 'jsoncrush';


export function compress<T = unknown>(data: T) {
  const textWithoutSpaces = JSON.stringify(data, undefined, 0);

  return JSONCrush.crush(textWithoutSpaces);
}