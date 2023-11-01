import { expect } from 'chai';
import { mergeSort, mergeSorted } from '../../src/algorithms/MergeSort';

describe('MergeSort', () => {
  const testMergeSort = ({
    originalArray,
    sortedArray,
  }: {
    originalArray: Array<number>;
    sortedArray: Array<number>;
  }) => {
    const sorted = mergeSort(originalArray);

    expect(sorted).to.eql(sortedArray);
  };

  it('should return "[11, 12, 22, 25, 34, 64, 90]" if original array is "[64, 34, 25, 12, 22, 11, 90]"', () => {
    testMergeSort({
      originalArray: [64, 34, 25, 12, 22, 11, 90],
      sortedArray: [11, 12, 22, 25, 34, 64, 90],
    });
  });

  it('should return "[11, 12, 22, 25, 34, 64, 90]" if original array is "[64, 34, 25, 12, 22, 11, 90]"', () => {
    testMergeSort({
      originalArray: [1, 1, 0],
      sortedArray: [0, 1, 1],
    });
  });

  it('should return same as original array if it is empty', () => {
    testMergeSort({
      originalArray: [],
      sortedArray: [],
    });
  });

  it('should return same as original array if it has only one element', () => {
    testMergeSort({
      originalArray: [0],
      sortedArray: [0],
    });
  });

  it('should return "[-1, 0, 0]" if original array is "[0, -1, 0]"', () => {
    testMergeSort({
      originalArray: [0, -1, 0],
      sortedArray: [-1, 0, 0],
    });
  });
});

describe('MergeSorted', () => {
  const testMergeSorted = ({
    array1,
    array2,
    sortedArray,
  }: {
    array1: Array<number>;
    array2: Array<number>;
    sortedArray: Array<number>;
  }) => {
    const sorted = mergeSorted(array1, array2);

    expect(sorted).to.eql(sortedArray);
  };

  it('should return "[0, 1, 2, 7, 8, 9, 15, 22, 37, 46, 78, 90, 99, 102]" if original array1 is "[0, 2, 9, 15, 22, 46, 90]" and array2 is "[1, 7, 8, 37, 78, 99, 102]"', () => {
    testMergeSorted({
      array1: [0, 2, 9, 15, 22, 46, 90],
      array2: [1, 7, 8, 37, 78, 89, 99, 102, 108],
      sortedArray: [0, 1, 2, 7, 8, 9, 15, 22, 37, 46, 78, 89, 90, 99, 102, 108],
    });
  });

  it('should return "[0, 0, 1, 5, 6, 8]" if original array1 is "[0, 1, 5]" and array2 is "[0, 6, 8]"', () => {
    testMergeSorted({
      array1: [0, 1, 5],
      array2: [0, 6, 7, 8, 9],
      sortedArray: [0, 0, 1, 5, 6, 7, 8, 9],
    });
  });

  it('should return same as original array if it is empty', () => {
    testMergeSorted({
      array1: [],
      array2: [],
      sortedArray: [],
    });
  });

  it('should return "[0, 2]" if original array1 is "[0]" and array2 is "[2]"', () => {
    testMergeSorted({
      array1: [0],
      array2: [2],
      sortedArray: [0, 2],
    });
  });

  it('should return "[-1, 0, 1, 2, 4, 8]" if original array1 is "[-1, 0, 1]" and array2 is "[2, 4, 8]"', () => {
    testMergeSorted({
      array1: [-1, 0, 1],
      array2: [2, 4, 8],
      sortedArray: [-1, 0, 1, 2, 4, 8],
    });
  });
});
