import { expect } from 'chai';
import Stack from '../src/Stack';

describe('Stack', () => {
	let newStack: any;

	describe('constructor method', () => {
		it('should create empty stack when no any argument is passed', () => {
			newStack = new Stack();
			expect(newStack.count).to.eq(0);
		});
		it('should create stack with single an element equal to "15" if "15" is passed as an argument', () => {
			newStack = new Stack(15);
			expect(newStack.count).to.eq(1);
			expect(newStack.storage[0]).to.eq(15);
		});
		it('should create a stack with the list of elements if they are passed as an array', () => {
			newStack = new Stack(['something', null, 5]);
			expect(newStack.count).to.eq(3);
			expect(newStack.storage[0]).to.eq('something');
			expect(newStack.storage[2]).to.eq(5);
		});
	});

	describe('push method', () => {
		beforeEach( () => {
			newStack = new Stack(['something', null, 5]);
		});

		it('should add value "15" in newStack storage if push it has an argument "15"', () => {
			newStack.push(15);
			expect(newStack.storage[3]).to.eq(15);
		});

		it('should add values "something" and null in newStack storage', () => {
			newStack.push('something');
			newStack.push(null);
			expect(newStack.storage[3]).to.eq('something');
			expect(newStack.storage[4]).to.eq(null);
		});
	});

	describe('pop', () => {
		beforeEach( () => {
			newStack = new Stack(['something', null, 5]);
		});

		it('should remove top element of newStack storage', () => {
			const removedElement = newStack.pop();
			expect(newStack.storage[2]).to.eq(undefined);
			expect(removedElement).to.eq(5);
		});

		it('should remove top 2 values in newStack storage', () => {
			newStack.pop();
			newStack.pop();
			expect(newStack.storage[1]).to.eq(undefined);
		});

		it('should remove top 3 values in newStack storage', () => {
			newStack.pop();
			newStack.pop();
			newStack.pop();
			const result = newStack.pop();
			expect(result).to.eq(undefined);
		});
	});

	describe('peek', () => {
		beforeEach( () => {
			newStack = new Stack(['something', null, 5]);
		});

		it('should have 5 as the peek element of newStack storage', () => {
			const peekElement = newStack.peek();
			expect(peekElement).to.eq(5);
		});

		it('should have "something" as the peek element of newStack storage', () => {
			newStack.pop();
			newStack.pop();
			const peekElement = newStack.peek();
			expect(peekElement).to.eq('something');
		});
	});

	describe('peek', () => {
		beforeEach( () => {
			newStack = new Stack(['something', null, 5]);
		});

		it('should have 5 as the peek element of newStack storage', () => {
			const peekElement = newStack.peek();
			expect(peekElement).to.eq(5);
		});

		it('should have "something" as the peek element of newStack storage', () => {
			newStack.pop();
			newStack.pop();
			const peekElement = newStack.peek();
			expect(peekElement).to.eq('something');
		});
	});

	describe('length', () => {
		beforeEach( () => {
			newStack = new Stack(['something', null, 5]);
		});

		it('should be 3 by default', () => {
			const storageSize = newStack.length();
			expect(storageSize).to.eq(3);
		});

		it('should become 1 after removing 2 items', () => {
			newStack.pop();
			newStack.pop();
			const storageSize = newStack.length();
			expect(storageSize).to.eq(1);
		});
	});
});
