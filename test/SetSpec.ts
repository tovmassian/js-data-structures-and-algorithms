import { expect } from 'chai';
import Set from '../src/Set';

describe('Set', () => {
	let newSet: Set;
	let elements: any[];
	let setSize: number;

	describe('constructor', () => {
		it('should create an empty set when no any argument is passed', () => {
			newSet = new Set();
			expect(newSet.size()).to.eq(0);
		});
		describe('when single and non-array argument passed', () => {
			beforeEach(() => {
				newSet = new Set(15);
				elements = newSet.getSetelements();
				setSize = newSet.size();
			});

			it('should create a set which first element is equal to 15', () => {
				expect(elements[0]).to.eq(15);
			});
			it('should create a set with the length of 1', () => {
				expect(setSize).to.eq(1);
			});
		});
		describe('when an array is passed as an argument', () => {
			describe('and when all the elements in the array are unique', () => {
				beforeEach(() => {
					newSet = new Set(['something', 5, 6]);
					elements = newSet.getSetelements();
					setSize = newSet.size();
				});

				it('should create a set with the length of 3', () => {
					expect(setSize).to.eq(3);
				});
				it('should create a set which 1st element is equal to "something"', () => {
					expect(elements[0]).to.eq('something');
				});
				it('should create a set which 2nd element is equal to 5', () => {
					expect(elements[1]).to.eq(5);
				});
				it('should create a set which 3rd element is equal to 6', () => {
					expect(elements[2]).to.eq(6);
				});
			});
			describe('and when there are repetitions in the array elements', () => {
				beforeEach(() => {
					newSet = new Set(['something', 5, 5]);
					elements = newSet.getSetelements();
					setSize = newSet.size();
				});

				it('should create a set with the length of 2', () => {
					expect(setSize).to.eq(2);
				});
				it('should create a set which 1st element is equal to "something"', () => {
					expect(elements[0]).to.eq('something');
				});
				it('should create a set which 2nd element is equal to 5', () => {
					expect(elements[1]).to.eq(5);
				});
				it('should create a set which doesn\'t have 3rd element even though it was passed', () => {
					expect(elements[2]).to.eq(undefined);
				});
			});
		});
	});

	describe('elements', () => {
		beforeEach(() => {
			newSet = new Set(['14', undefined, 456, 5]);
			elements = newSet.getSetelements();
		});

		it('should return the collection of set with the length of 4', () => {
			expect(elements.length).to.eq(4);
		});
		it('should return the collection of set which 3rd element is equal to 456', () => {
			expect(elements[2]).to.eq(456);
		});
		it('should return the collection of set which 4th element is equal to 5', () => {
			expect(elements[3]).to.eq(5);
		});
	});

	describe('add', () => {
		let result: boolean;

		beforeEach(() => {
			newSet = new Set(['14', true, 456, 5]);
			elements = newSet.getSetelements();
		});

		describe('when the element doesn\'t already exist in the set', () => {
			beforeEach(() => {
				result = newSet.add(45);
			});
			it('should return true', () => {
				expect(result).to.eq(true);
			});
			it('should make the length of the Set equal to 5', () => {
				expect(elements.length).to.eq(5);
			});
			it('should add 45 as 5th element of the Set', () => {
				expect(elements[4]).to.eq(45);
			});
		});
		describe('when the element is already exist in the set', () => {
			beforeEach(() => {
				result = newSet.add(5);
			});

			it('should return false', () => {
				expect(result).to.eq(false);
			});
			it('should doesn\'t change the initial length of the Set', () => {
				expect(elements.length).to.eq(4);
			});
			it('should not have 5th element in the Set', () => {
				expect(elements[4]).to.eq(undefined);
			});
		});
	});

	describe('remove', () => {
		let result: boolean;

		beforeEach(() => {
			newSet = new Set(['14', true, 456, 5]);
			elements = newSet.getSetelements();
		});

		describe('when the element exists in the set', () => {
			beforeEach(() => {
				result = newSet.remove(456);
			});
			it('should return true', () => {
				expect(result).to.eq(true);
			});
			it('should reduce the length of the Set from 4 to 3', () => {
				expect(elements.length).to.eq(3);
			});
			it('should not have 456 anymore as 3rd element of the Set', () => {
				expect(elements[3]).not.to.eq(456);
			});
		});
		describe('when the element doesn\'t exist in the set', () => {
			beforeEach(() => {
				result = newSet.remove(55);
			});

			it('should return false', () => {
				expect(result).to.eq(false);
			});
			it('should doesn\'t change the initial length of the Set', () => {
				expect(elements.length).to.eq(4);
			});
		});
	});

	describe('size', () => {
		it('should return 0 as the length of the Set', () => {
			newSet = new Set();
			setSize = newSet.size();
			expect(setSize).to.eq(0);
		});
		it('should return 1 as the length of the Set', () => {
			newSet = new Set('someValue');
			setSize = newSet.size();
			expect(setSize).to.eq(1);
		});
		it('should return 4 as the length of the Set', () => {
			newSet = new Set(['14', true, 456, 5]);
			setSize = newSet.size();
			expect(setSize).to.eq(4);
		});
		it('should return 3 as the length of the Set', () => {
			newSet = new Set(['14', true, 456]);
			setSize = newSet.size();
			expect(setSize).to.eq(3);
		});
	});

	describe('union', () => {
		let initialSet: Set;

		beforeEach(() => {
			initialSet = new Set(['43', 5, true, null]);
		});

		it('should return new set where 54 will be added to the initialSet', () => {
			newSet = new Set(54);
			const unionSet = initialSet.union(newSet);
			elements = unionSet.getSetelements();
			expect(elements).to.eql(['43', 5, true, null, 54]);
		});
		it('should return new set where 54 and 456 will be added to the initialSet taking but not true and 5 as they already existed in initial Set', () => {
			newSet = new Set([54, true, 456, 5]);
			const unionSet = initialSet.union(newSet);
			elements = unionSet.getSetelements();
			expect(elements).to.eql(['43', 5, true, null, 54, 456]);
		});
	});

	describe('intersection', () => {
		let initialSet: Set;

		beforeEach(() => {
			initialSet = new Set(['43', 5, true, null]);
		});

		it('should return a new empty set as 54 doesn\'t exist in the initialSet', () => {
			newSet = new Set(54);
			const intersectionSet = initialSet.intersection(newSet);
			elements = intersectionSet.getSetelements();
			expect(elements).to.eql([]);
		});
		it('should return new set with the elements 5 and true', () => {
			newSet = new Set([54, true, 456, 5]);
			const unionSet = initialSet.intersection(newSet);
			elements = unionSet.getSetelements();
			expect(elements).to.eql([true, 5]);
		});
	});

	describe('difference', () => {
		let initialSet: Set;

		beforeEach(() => {
			initialSet = new Set(['43', 5, true, null]);
		});

		it('should return a new set with all elements of initialSet and 54 combine in a new Set', () => {
			newSet = new Set(54);
			const differenceSet = initialSet.difference(newSet);
			elements = differenceSet.getSetelements();
			expect(elements).to.eql([54]);
		});
		it('should return new combined set without elements 5 and true', () => {
			newSet = new Set([54, true, 456, 5]);
			const differenceSet = initialSet.difference(newSet);
			elements = differenceSet.getSetelements();
			expect(elements).to.eql([54, 456]);
		});
	});

	describe('isSubset', () => {
		let initialSet: Set;

		beforeEach(() => {
			initialSet = new Set(['43', 5, true, null]);
		});

		it('should return true if all the elements of newSet exist in initialSet', () => {
			newSet = new Set([5, null]);
			const result = initialSet.isSubset(newSet);
			expect(result).to.eq(true);
		});
		it('should return false if not all the elements of newSet exist in initialSet', () => {
			newSet = new Set([5, null, 434]);
			const result = initialSet.isSubset(newSet);
			expect(result).to.eq(false);
		});
	});
});
