export default class Stack {
	public count: number = 0;
	public storage: any = {};

	constructor(initialStorage?: any) {

		if (typeof initialStorage === 'undefined') {
			return;
		}

		if (Array.isArray(initialStorage)) {
			for (let i = 0; i < initialStorage.length; i++) {
				this.storage[i] = initialStorage[i];
				this.count++;
			}
		} else {
			this.storage[0] = initialStorage;
			this.count++;
		}
	}

	public push(value: any): void {
		this.storage[this.count] = value;
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

    public peek(): any {
    	return this.storage[this.count - 1];
	}

	public length(): number {
    	return this.count;
	}
}
