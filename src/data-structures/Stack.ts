export default class Stack {
	private count: number = 0;
	private storage: any = {};

	constructor(initialStack?: any) {

		if (typeof initialStack === 'undefined') {
			return;
		}

		if (Array.isArray(initialStack)) {
			for (let i = 0; i < initialStack.length; i++) {
				this.storage[i] = initialStack[i];
				this.count++;
			}
		} else {
			this.storage[0] = initialStack;
			this.count++;
		}
	}

	public push(element: any): void {
		this.storage[this.count] = element;
		this.count++;
	}

    public pop(): any {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		const deletedElement = this.storage[this.count];
		delete this.storage[this.count];

		return deletedElement;
    }

    public peak(): any {
    	return this.storage[this.count - 1];
	}

	public size(): number {
    	return this.count;
	}
}
