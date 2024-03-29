export const bubbleSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] <= arr[j + 1]) {
        continue;
      }

      let temp;
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

  return arr;
};
