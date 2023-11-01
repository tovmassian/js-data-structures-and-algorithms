export const mergeSorted = (
  left: Array<number>,
  right: Array<number>
): Array<number> => {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }

  return [...sorted, ...left, ...right];
};

export const mergeSort = (arr: Array<number>): Array<number> => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, pivot));
  const right = mergeSort(arr.slice(pivot));

  return mergeSorted(left, right);
};
