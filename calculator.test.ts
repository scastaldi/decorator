import { Calculator } from './calculator';

test('Create SampleLog()', () => {
    expect(new Calculator()).toBeTruthy();
});

test('add 2 + 2', () => {
    const calc = new Calculator();
    const result = calc.add(2, 2);
    expect(result).toEqual(4);
});

test('subtract 2 - 1', () => {
    const calc = new Calculator();
    const result = calc.subtract(2, 1);
    expect(result).toEqual(1);
});

test('multiply 4 * 2', () => {
    const calc = new Calculator();
    const result = calc.multiply(4, 2);
    expect(result).toEqual(8);
});

test('divide 20 / 2', () => {
    const calc = new Calculator();
    const result = calc.divide(20, 2);
    expect(result).toEqual(10);
});
