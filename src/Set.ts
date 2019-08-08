export default class Set {
	private collection: any[] = [];

	constructor(initialSet?: any) {
		if (typeof initialSet === 'undefined') {
			return;
		}
		if (Array.isArray(initialSet)) {
			for (const element of initialSet) {
				if (!this.hasElement(element)) {
					this.collection.push(element);
				}
			}
		} else {
			this.collection.push(initialSet);
		}
	}

	public getSetelements(): any[] {
		return this.collection;
	}

	public add(element: any): boolean {
		if (this.hasElement(element)) {
			return false;
		} else {
			this.collection.push(element);
			return true;
		}
	}

	public remove(element: any): boolean {
		if (this.hasElement(element)) {
			const indexOfElement = this.collection.indexOf(element);
			this.collection.splice(indexOfElement, 1);
			return true;
		}

		return false;
	}

	public size(): number {
		return this.collection.length;
	}

	public union(newSet: Set): Set {
		const unionSet = new Set();
		const newSetElements = newSet.getSetelements();
		const initialSetElements = this.getSetelements();

		initialSetElements.forEach((element) => {
			unionSet.add(element);
		});
		newSetElements.forEach((element) => {
			unionSet.add(element);
		});

		return unionSet;
	}

	public intersection(newSet: Set): Set {
		const intersectionSet = new Set();
		const newSetElements = newSet.getSetelements();

		newSetElements.forEach((element) => {
			if (this.hasElement(element)) {
				intersectionSet.add(element);
			}
		});

		return intersectionSet;
	}

	public difference(newSet: Set): Set {
		const differenceSet = new Set();
		const newSetElements = newSet.getSetelements();

		newSetElements.forEach((element) => {
			if (!this.hasElement(element)) {
				differenceSet.add(element);
			}
		});

		return differenceSet;
	}

	public isSubset(newSet: Set): boolean {
		const newSetElements = newSet.getSetelements();
		let isSubset = true;

		newSetElements.forEach((element) => {
			if (!this.hasElement(element)) {
				isSubset = false;
			}
		});

		return isSubset;
	}

	private hasElement(element: number): boolean {
		return this.collection.indexOf(element) !== -1;
	}
}
