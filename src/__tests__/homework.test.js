import { findDegreeOfNumber } from '../homework.js';

describe('C7 module "functions"', () => {
    it('3 degree of 2 equal 8', () => {
        expect(findDegreeOfNumber(2, 3)).toBe(8);
    });
    it('0 degree of 0 equal error', () => {
        expect(findDegreeOfNumber(2, 0)).toBe('Degree is incorrect');
    });
    it('6 degree of 0 equal error', () => {
        expect(findDegreeOfNumber(0, 6)).toBe(0);
    });
});