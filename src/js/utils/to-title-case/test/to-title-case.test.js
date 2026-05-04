const {toTitleCase} = require('../to-title-case.js');


describe('toTitleCase function', () => {
    it('should handle empty strings', () => {
        expect(toTitleCase('')).toBe('');
        expect(toTitleCase(null)).toBe(null);
        expect(toTitleCase(undefined)).toBe(undefined);
    });

    it('should handle non-string inputs', () => {
        expect(toTitleCase(123)).toBe(123);
        expect(toTitleCase({})).toEqual({});
    });

    it('should handle strings with leading/trailing whitespace', () => {
        expect(toTitleCase('  hello world  ')).toBe('Hello World');
    });

    it('should handle single word strings (allWords=true)', () => {
        expect(toTitleCase('hello')).toBe('Hello');
    });

    it('should handle single word strings (allWords=false)', () => {
        expect(toTitleCase('hello', false)).toBe('Hello');
    });

    it('should title case all words (default behavior)', () => {
        expect(toTitleCase('this is a sentence')).toBe('This Is A Sentence');
    });

    it('should title case the first word only (allWords=false)', () => {
        expect(toTitleCase('this is a sentence', false)).toBe('This is a sentence');
    });

    it('should handle mixed-case words', () => {
        expect(toTitleCase('WeB dEvELopMENt')).toBe('Web Development');
    });

    it('should handle non-alphanumeric characters', () => {
        expect(toTitleCase('hello, world!')).toBe('Hello, World!');
    });
});