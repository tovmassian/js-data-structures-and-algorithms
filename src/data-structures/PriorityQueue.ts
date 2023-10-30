import Queue from './Queue';

export interface IPriorityQueueElement {
	value: any;
	priority: number;
}

export default class PriorityQueue extends Queue {

	private static isValidElement(element: IPriorityQueueElement): boolean {
		return !!(typeof element === 'object' && element !== null && element.hasOwnProperty('value') && element.hasOwnProperty('priority'));
	}

	constructor(initialQueue?: any) {
		super(initialQueue);

		const initialQueueElements: any = this.getQueueElements();
		const priorityCollection: IPriorityQueueElement[] = initialQueueElements.map((element: any) => {
			return { value: element, priority: 0 };
		});

		this.setQueueElements(priorityCollection);
	}

	public enqueue(element: IPriorityQueueElement | any): void {
		const priorityCollection: IPriorityQueueElement[] = this.getQueueElements();

		if (PriorityQueue.isValidElement(element)) {
			if (priorityCollection.length > 0) {
				let added = false;
				for (let i = 0; i < priorityCollection.length; i++) {
					if (element.priority > priorityCollection[i].priority) {
						priorityCollection.splice(i, 0, element);
						added = true;
						break;
					}
				}
				if (!added) {
					priorityCollection.push(element);
				}
				this.setQueueElements(priorityCollection);

				return;
			} else {
				super.enqueue(element);
			}
		} else {
			super.enqueue({ value: element, priority: 0 });
		}
	}
}
