import sum from '../../src/components/math';

describe('math', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
  });
});
