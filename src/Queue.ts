export default class Queue {
	private collection: any[] = [];

	constructor(initialQueue?: any) {

		if (typeof initialQueue === 'undefined') {
			return;
		}

		if (Array.isArray(initialQueue)) {
			for (let i = 0; i < initialQueue.length; i++) {
				this.collection[i] = initialQueue[i];
			}
		} else {
			this.collection[0] = initialQueue;
		}
	}

	public enqueue(element: any): void {
		this.collection.push(element);
	}

    public dequeue(): any {
		return this.collection.shift();
    }

    public front(): any {
    	return this.collection[0];
	}

	public size(): number {
    	return this.collection.length;
	}
}
