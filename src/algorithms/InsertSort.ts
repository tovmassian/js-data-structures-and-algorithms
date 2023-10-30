export const insertSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1]) {
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
};
