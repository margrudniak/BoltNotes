export const containsObject = (obj: Object, list: Array<unknown>) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
};
