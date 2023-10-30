import { expect } from 'chai';
import { bubbleSort } from '../../src/algorithms/BubbleSort';

describe('BubbleSort', () => {
  const testBubbleSort = ({
    originalArray,
    sortedArray,
  }: {
    originalArray: Array<number>;
    sortedArray: Array<number>;
  }) => {
    const sorted = bubbleSort(originalArray);

    expect(sorted).to.eql(sortedArray);
  };

  it('should return sorted array', () => {
    testBubbleSort({
      originalArray: [64, 34, 25, 12, 22, 11, 90],
      sortedArray: [11, 12, 22, 25, 34, 64, 90],
    });
  });

  it('should return sorted array', () => {
    testBubbleSort({
      originalArray: [1, 1, 0],
      sortedArray: [0, 1, 1],
    });
  });

  it('should return sorted array', () => {
    testBubbleSort({
      originalArray: [],
      sortedArray: [],
    });
  });

  it('should return sorted array', () => {
    testBubbleSort({
      originalArray: [0],
      sortedArray: [0],
    });
  });

  it('should return sorted array', () => {
    testBubbleSort({
      originalArray: [0, -1, 0],
      sortedArray: [-1, 0, 0],
    });
  });
});
