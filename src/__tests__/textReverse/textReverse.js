import { textReverse } from "../../textReverse/textReverse.js";

describe('C7 module "textReverse"', () => {
    it('Should reverse the string "Hallow world"', () => {
      expect(textReverse('Hallow world')).toBe('dlrow wollaH');
    });
    it('Entered number should return error', () => {
        expect(textReverse(769)).toBe('Entered not a string');
    });
    it('Entered boolean should return error', () => {
        expect(textReverse(769)).toBe('Entered not a string');
    });
});