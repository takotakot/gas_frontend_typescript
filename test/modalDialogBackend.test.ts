import { backendFunction } from '../src/modalDialogBackend';

describe('backendFunction', () => {
  it('Returns the same string as the argument', () => {
    const arg1 = 'Hello';
    expect(backendFunction(arg1)).toBe(arg1);
  });
});
