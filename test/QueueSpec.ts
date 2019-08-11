import { expect } from 'chai';
import Queue from '../src/Queue';

describe('Queue', () => {
	let newQueue: Queue;
	let queueSize: number;

	describe('constructor', () => {
		it('should create an empty queue when no any argument is passed', () => {
			newQueue = new Queue();
			queueSize = newQueue.size();
			expect(queueSize).to.eq(0);
		});
		it('should create a queue with the length of 1', () => {
			newQueue = new Queue(15);
			queueSize = newQueue.size();
			expect(queueSize).to.eq(1);
		});
		it('should create a queue with the length of 3', () => {
			newQueue = new Queue(['something', null, 5]);
			queueSize = newQueue.size();
			expect(queueSize).to.eq(3);
		});
	});

	describe('enqueue', () => {
		beforeEach( () => {
			newQueue = new Queue(['something', null, 5]);
		});

		it('should have size equal to 4 the newQueue is enqueued', () => {
			newQueue.enqueue(15);
			queueSize = newQueue.size();
			expect(queueSize).to.eq(4);
		});

		it('should have size equal to 5 the newQueue is enqueued two times', () => {
			newQueue.enqueue('something');
			newQueue.enqueue(null);
			queueSize = newQueue.size();
			expect(queueSize).to.eq(5);
		});
	});

	describe('dequeue', () => {
		beforeEach( () => {
			newQueue = new Queue(['something', null, 5]);
		});

		it('should dequeue the first element of the newQueue', () => {
			const deQueuedElement = newQueue.dequeue();
			queueSize = newQueue.size();
			expect(queueSize).to.eq(2);
			expect(deQueuedElement).to.eq('something');
		});

		it('should dequeue first 2 elements in the newQueue', () => {
			newQueue.dequeue();
			newQueue.dequeue();
			queueSize = newQueue.size();
			expect(queueSize).to.eq(1);
		});

		it('should dequeue all 3 elements in the newQueue', () => {
			newQueue.dequeue();
			newQueue.dequeue();
			newQueue.dequeue();
			const result = newQueue.dequeue();
			expect(result).to.eq(undefined);
		});
	});

	describe('front', () => {
		beforeEach( () => {
			newQueue = new Queue(['something', null, 5]);
		});

		it('should return \'something\' as the front element of the newQueue', () => {
			const frontElement = newQueue.front();
			expect(frontElement).to.eq('something');
		});

		it('should return \'null\' if the newQueue is de-queued', () => {
			newQueue.dequeue();
			const frontElement = newQueue.front();
			expect(frontElement).to.eq(null);
		});

		it('should return 5 if the newQueue is de-queued two times', () => {
			newQueue.dequeue();
			newQueue.dequeue();
			const frontElement = newQueue.front();
			expect(frontElement).to.eq(5);
		});
	});

	describe('size', () => {
		beforeEach( () => {
			newQueue = new Queue(['something', null, 5]);
		});

		it('should return 3 by default', () => {
			queueSize = newQueue.size();
			expect(queueSize).to.eq(3);
		});

		it('should return 1 after de-queuing two items', () => {
			newQueue.dequeue();
			newQueue.dequeue();
			queueSize = newQueue.size();
			expect(queueSize).to.eq(1);
		});
	});

	describe('getQueueElements', () => {
		it('should return queue elements as an array', () => {
			newQueue = new Queue(['something', null, 5]);
			const queueElements = newQueue.getQueueElements();
			expect(queueElements).to.eql(['something', null, 5]);
		});
	});

	describe('setQueueElement', () => {
		it('should set passed elements to the queue', () => {
			newQueue = new Queue();
			newQueue.setQueueElements([null, 5, 'something']);
			const queueElements = newQueue.getQueueElements();
			expect(queueElements).to.eql([null, 5, 'something']);
		});
	});
});
