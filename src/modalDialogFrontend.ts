import { backendFunction, randomErrorFunction } from './modalDialogBackend';

/**
 * Retrieves an array of frontend function names.
 *
 * @returns An array of frontend function names.
 */
export function frontendFunctions(): string[] {
  return [
    runBackendFunction_.name,
    runRandomErrorFunction_.name,
    onSuccess_.name,
    onFailure_.name,
    frontendFunctionString.name,
  ];
}

/**
 * Returns a string representation of the frontend functions for templating.
 *
 * @returns The string representation of the frontend function.
 */
export function frontendFunctionString(): string {
  return [
    '*/',
    runBackendFunction_.toString(),
    runRandomErrorFunction_.toString(),
    onSuccess_.toString(),
    onFailure_.toString(),
    '/*',
  ].join('\n');
}

/**
 * Mock interface for google.script.run.
 */
interface Run {
  withSuccessHandler: (callback: (result: unknown) => void) => Run;
  withFailureHandler: (callback: (error: Error) => void) => Run;
  backendFunction: typeof backendFunction;
  randomErrorFunction: typeof randomErrorFunction;
}

/**
 * Runs the backendFunction on the provided Run object.
 *
 * @param run - The Run object used to execute the backend function.
 * @param arg1 - The first argument to be passed to the backend function.
 * @returns void
 */
export function runBackendFunction_(run: Run, arg1: string): void {
  run
    .withSuccessHandler(onSuccess_)
    .withFailureHandler(onFailure_)
    .backendFunction(arg1);
}

/**
 * Runs the randomErrorFunction on the provided Run object.
 *
 * @param run - The Run object to execute the randomErrorFunction on.
 * @returns void
 */
export function runRandomErrorFunction_(run: Run): void {
  run
    .withSuccessHandler(onSuccess_)
    .withFailureHandler(onFailure_)
    .randomErrorFunction();
}

/*
function runFunction_(
  run: Run,
  functionName: string,
  ...args: unknown[]
): void {
  ((run as any)[functionName](...args) as Run)
    .withSuccessHandler((result) => {
      console.log(result);
    })
    .withFailureHandler((error) => {
      console.error(error);
    });
}
*/

/**
 * Handles the success callback.
 *
 * @param result - The result of the operation.
 * @returns void
 */
export function onSuccess_(result: unknown): void {
  document.getElementById('messages')!.innerText += 'Success: ' + result + '\n';
}

/**
 * Handles the failure callback.
 *
 * @param error - The error object representing the failure.
 * @returns void
 */
export function onFailure_(error: Error): void {
  document.getElementById('messages')!.innerText +=
    'Failure: ' + error.message + '\n';
}
