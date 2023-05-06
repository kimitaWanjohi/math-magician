import calculate from "../logic/calculate";

describe('calculate', () => {
  test('adds two numbers', () => {
    const result = calculate({ total: '2', next: '3', operation: '+' }, '=');
    expect(result.total).toBe('5');
  });

  test('subtracts two numbers', () => {
    const result = calculate({ total: '5', next: '2', operation: '-' }, '=');
    expect(result.total).toBe('3');
  });

  test('multiplies two numbers', () => {
    const result = calculate({ total: '3', next: '4', operation: 'x' }, '=');
    expect(result.total).toBe('12');
  });

  test('divides two numbers', () => {
    const result = calculate({ total: '10', next: '5', operation: '÷' }, '=');
    expect(result.total).toBe('2');
  });

  test('handles negative numbers', () => {
    const result = calculate({ total: '-2', next: '5', operation: 'x' }, '=');
    expect(result.total).toBe('-10');
  });

  test('handles AC button', () => {
    const result = calculate({ total: '5', next: '2', operation: '-' }, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
});
