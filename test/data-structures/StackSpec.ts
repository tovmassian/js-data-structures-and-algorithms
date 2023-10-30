import { expect } from 'chai';
import Stack from '../../src/data-structures/Stack';

describe('Stack', () => {
  let newStack: Stack;
  let stackSize: number;

  describe('constructor', () => {
    it('should create empty stack when no any argument is passed', () => {
      newStack = new Stack();
      stackSize = newStack.size();
      expect(stackSize).to.eq(0);
    });
    it('should create stack with the length of 1', () => {
      newStack = new Stack(15);
      stackSize = newStack.size();
      expect(stackSize).to.eq(1);
    });
    it('should create stack with the length of 3', () => {
      newStack = new Stack(['something', null, 5]);
      stackSize = newStack.size();
      expect(stackSize).to.eq(3);
    });
  });

  describe('push', () => {
    let peakElement;
    beforeEach(() => {
      newStack = new Stack(['something', null, 5]);
    });

    it('should add value "15" in newStack storage if push it has an argument "15"', () => {
      newStack.push(15);
      peakElement = newStack.peak();
      expect(peakElement).to.eq(15);
    });

    it('should add values "something" and null in newStack storage', () => {
      newStack.push('something');
      newStack.push(null);
      peakElement = newStack.peak();
      expect(peakElement).to.eq(null);
    });
  });

  describe('pop', () => {
    let peakElement;
    beforeEach(() => {
      newStack = new Stack(['something', null, 5]);
    });

    it('should remove top element of newStack storage', () => {
      const removedElement = newStack.pop();
      peakElement = newStack.peak();
      expect(peakElement).to.eq(null);
      expect(removedElement).to.eq(5);
    });

    it('should remove top 2 values in newStack storage', () => {
      newStack.pop();
      newStack.pop();
      peakElement = newStack.peak();
      expect(peakElement).to.eq('something');
    });

    it('should remove top 3 values in newStack storage', () => {
      newStack.pop();
      newStack.pop();
      newStack.pop();
      const result = newStack.pop();
      expect(result).to.eq(undefined);
    });
  });

  describe('peak', () => {
    beforeEach(() => {
      newStack = new Stack(['something', null, 5]);
    });

    it('should have 5 as the peak element of newStack storage', () => {
      const peakElement = newStack.peak();
      expect(peakElement).to.eq(5);
    });

    it('should have "something" as the peak element of newStack storage', () => {
      newStack.pop();
      newStack.pop();
      const peakElement = newStack.peak();
      expect(peakElement).to.eq('something');
    });
  });

  describe('size', () => {
    beforeEach(() => {
      newStack = new Stack(['something', null, 5]);
    });

    it('should be 3 by default', () => {
      const storageSize = newStack.size();
      expect(storageSize).to.eq(3);
    });

    it('should become 1 after removing 2 items', () => {
      newStack.pop();
      newStack.pop();
      const storageSize = newStack.size();
      expect(storageSize).to.eq(1);
    });
  });
});
