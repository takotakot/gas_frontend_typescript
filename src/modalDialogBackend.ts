/**
 * Returns an array of backend function names.
 *
 * @returns The array of backend function names.
 */
export function backendFunctions(): string[] {
  return [backendFunction.name, randomErrorFunction.name];
}

/**
 * This is a backend function that takes a string argument and returns the same string.
 *
 * @param arg1 - The string argument.
 * @returns The same string as the argument.
 */
export function backendFunction(arg1: string): string {
  return arg1;
}

/**
 * This is a backend function throws an error randomly.
 *
 * @returns Success message.
 * @throws An error randomly.
 */
export function randomErrorFunction(): string {
  Utilities.sleep(1000 + 1000 * 5 * Math.random());
  if (Math.random() < 0.3) {
    throw new Error('Random error');
  }
  return 'Success';
}
