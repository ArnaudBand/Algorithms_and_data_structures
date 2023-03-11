function charCount(str) {
  // implementation code here
}

describe('charCount', function() {
  it('should return an object', function() {
    expect(typeof charCount('hello')).toBe('object');
  });

  it('should count the number of characters in a string', function() {
    expect(charCount('hello').h).toBe(1);
    expect(charCount('hello').l).toBe(2);
    expect(charCount('hello').o).toBe(1);
  });

  it('should ignore whitespace', function() {
    expect(charCount('hello world').h).toBe(1);
    expect(charCount('hello world').l).toBe(3);
    expect(charCount('hello world').o).toBe(2);
    expect(charCount('hello world').w).toBe(1);
    expect(charCount('hello world').r).toBe(1);
    expect(charCount('hello world').d).toBe(1);
  });

  it('should handle empty strings', function() {
    expect(charCount('')).toEqual({});
  });
});
