import {
    mapForCollection,
    operation
} from '../challengeTypedOperations';

/*
 * Functional Programming Challenge
 * Create a library function that on a collection of objects
 * For these objects a specific operation shall be executed
 */

const mapFn = (value : number, value2: number) => { return value + value2};
describe('test mapForCollection', () => {
    it('that it sums correctly',  () => {
        const values = [1,2,3,4];
        const expectedResult = 10;

        const op : operation = {
            fn : (values) => values.reduce(mapFn),
            flatten : true,
            flatLevel : 3
        }
        const result = mapForCollection(values, op);

        expect(result).toBe(expectedResult);
    });

    it('that it sums an array of numbers and number arrays correctly', () => {
        const values = [1,2,3,[1,2,3]];
        const expectedResult = 12;

        const op : operation = {
            fn : (values) => values.reduce(mapFn),
            flatten : true,
            flatLevel : 3
        }
        const result = mapForCollection(values, op);

        expect(result).toBe(expectedResult);
    });

    it('that it sums a flat array of numbers correctly', () => {
        const values = [1,2,3];
        const expectedResult = 6;

        const op : operation = {
            fn : (values) => values.reduce(mapFn),
            flatten : false,
            flatLevel : 0
        }

        const result = mapForCollection(values, op);
        expect(result).toBe(expectedResult);
    });

    it('that it filters an array of numbers and number arrays correctly', () => {
        const values = [1,2,3, [4,5,6]];
        const expectedResult = [2,4,6];

        const op : operation = {
            fn : (values) => values.filter( (val : number) => val % 2 == 0),
            flatten : true,
            flatLevel : 2
        }
        const result : number[] = mapForCollection(values, op);

        expect(result).not.toBeNull();
        expect(result).toStrictEqual(expectedResult);
    });

    it('that it filters a flat array of numbers correctly', () => {
        const values = [1,2,3];
        const expectedResult = [2];

        const op : operation = {
            fn : (values) => values.filter( (val : number) => val % 2 == 0),
            flatten : false,
            flatLevel : 0
        }
        const result : number[] = mapForCollection(values, op);

        expect(result).not.toBeNull();
        expect(result).toStrictEqual(expectedResult);
    });

    it('that it correctly shifts a flat array of numbers', () => {
        const values = [1,2,3];
        const expectedResult = 1;

        const op : operation = {
            fn : (values) => values.shift(),
            flatten : false,
            flatLevel : 0
        }
        const result = mapForCollection(values, op);

        expect(result).not.toBeNull();
        expect(result).toStrictEqual(expectedResult);
    });
})
