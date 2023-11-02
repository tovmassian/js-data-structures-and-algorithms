import { expect } from 'chai';
import { quickSort } from '../../src/algorithms/QuickSort';

describe('QuickSort', () => {
  const testQuickSort = ({
    originalArray,
    sortedArray,
  }: {
    originalArray: Array<number>;
    sortedArray: Array<number>;
  }) => {
    const sorted = quickSort(originalArray);

    expect(sorted).to.eql(sortedArray);
  };

  it('should return "[11, 12, 22, 25, 34, 64, 90]" if original array is "[64, 34, 25, 12, 22, 11, 90]"', () => {
    testQuickSort({
      originalArray: [64, 34, 25, 12, 22, 11, 90],
      sortedArray: [11, 12, 22, 25, 34, 64, 90],
    });
  });

  it('should return "[11, 12, 22, 25, 34, 64, 90]" if original array is "[64, 34, 25, 12, 22, 11, 90]"', () => {
    testQuickSort({
      originalArray: [1, 1, 0],
      sortedArray: [0, 1, 1],
    });
  });

  it('should return same as original array if it is empty', () => {
    testQuickSort({
      originalArray: [],
      sortedArray: [],
    });
  });

  it('should return same as original array if it has only one element', () => {
    testQuickSort({
      originalArray: [0],
      sortedArray: [0],
    });
  });

  it('should return "[-1, 0, 0]" if original array is "[0, -1, 0]"', () => {
    testQuickSort({
      originalArray: [0, -1, 0],
      sortedArray: [-1, 0, 0],
    });
  });
});
