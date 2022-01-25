export const objMap = (obj: Object, func: Function) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
