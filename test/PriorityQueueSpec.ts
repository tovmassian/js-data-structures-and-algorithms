import { expect } from 'chai';
import PriorityQueue from '../src/PriorityQueue';
import { IPriorityQueueElement } from '../src/PriorityQueue';

describe('PriorityQueue', () => {
	let newPriorityQueue: PriorityQueue;

	describe('constructor', () => {
		it('should create a priority queue with an element of 0 priority', () => {
			newPriorityQueue = new PriorityQueue(15);
			const queueElements: IPriorityQueueElement[] = newPriorityQueue.getQueueElements();
			expect(queueElements).to.eql([ { value: 15, priority: 0 } ]);
		});
		it('should create a priority queue with 3 elements of 0 priority', () => {
			newPriorityQueue = new PriorityQueue(['something', null, 5]);
			const queueElements: IPriorityQueueElement[] = newPriorityQueue.getQueueElements();
			expect(queueElements).to.eql([
					{ value: 'something', priority: 0 },
					{ value: null, priority: 0 },
					{ value: 5, priority: 0 },
				]);
		});
		it('should create a priority queue with 3 elements of 0 priority', () => {
			newPriorityQueue = new PriorityQueue(['something', null, 5]);
			const queueElements: IPriorityQueueElement[] = newPriorityQueue.getQueueElements();
			expect(queueElements).to.eql([
				{ value: 'something', priority: 0 },
				{ value: null, priority: 0 },
				{ value: 5, priority: 0 },
			]);
		});
	});

	describe('enqueue', () => {
		let priorityQueueElements: IPriorityQueueElement[];
		beforeEach( () => {
			newPriorityQueue = new PriorityQueue();
		});

		describe('when non-prioritized element is passed', () => {
			it('should add an element which is an object with value \'15\' and priority \'0\'', () => {
				newPriorityQueue.enqueue(15);
				priorityQueueElements = newPriorityQueue.getQueueElements();
				expect(priorityQueueElements).to.eql([ { value: 15, priority: 0 } ]);
			});

			it('should add two elements which are objects with values \'something\' and \'null\' and priorities \'0\'', () => {
				newPriorityQueue.enqueue('something');
				newPriorityQueue.enqueue(null);
				priorityQueueElements = newPriorityQueue.getQueueElements();
				expect(priorityQueueElements).to.eql([ { value: 'something', priority: 0 }, { value: null, priority: 0 } ]);
			});
		});

		describe('when prioritized element is passed', () => {
			it('should add elements in prioritized order', () => {
				newPriorityQueue.enqueue({ value: 'highestPriorityElement', priority: 3 });
				newPriorityQueue.enqueue({ value: 'lowestPriorityElement', priority: 1 });
				newPriorityQueue.enqueue({ value: 'mediumPriorityElement', priority: 2 });
				newPriorityQueue.enqueue({ value: 'anotherMediumPriorityElement', priority: 2 });

				priorityQueueElements = newPriorityQueue.getQueueElements();
				expect(priorityQueueElements).to.eql([
					{ value: 'highestPriorityElement', priority: 3 },
					{ value: 'mediumPriorityElement', priority: 2 },
					{ value: 'anotherMediumPriorityElement', priority: 2 },
					{ value: 'lowestPriorityElement', priority: 1 },
				]);
			});

			it('should add elements in prioritized order', () => {
				newPriorityQueue.setQueueElements([
					{ value: 'realHighestPriorityElement', priority: 5 },
					{ value: 'someHighPriorityElement', priority: 3 },
					{ value: 'realLowestPriorityElement', priority: 0 },
				]);
				newPriorityQueue.enqueue({ value: 'mediumPriorityElement', priority: 2 });
				newPriorityQueue.enqueue({ value: 'highestPriorityElement', priority: 3 });
				newPriorityQueue.enqueue({ value: 'lowestPriorityElement', priority: 1 });
				newPriorityQueue.enqueue({ value: 'anotherMediumPriorityElement', priority: 2 });

				priorityQueueElements = newPriorityQueue.getQueueElements();
				expect(priorityQueueElements).to.eql([
					{ value: 'realHighestPriorityElement', priority: 5 },
					{ value: 'someHighPriorityElement', priority: 3 },
					{ value: 'highestPriorityElement', priority: 3 },
					{ value: 'mediumPriorityElement', priority: 2 },
					{ value: 'anotherMediumPriorityElement', priority: 2 },
					{ value: 'lowestPriorityElement', priority: 1 },
					{ value: 'realLowestPriorityElement', priority: 0 },
				]);
			});
		});
	});
});
