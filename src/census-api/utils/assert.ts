import {ErrorResponse} from '../response/error';

export const assertHasNoErrors = <R>(data: ErrorResponse | R): void => {
  if ('errorCode' in data) {
    const {errorCode, errorMessage} = data;
    throw new Error(`${errorCode}: ${errorMessage}`);
  }
};

export function assertHasData<T>(data: T, field: keyof T): asserts data is T {
  if (!(field in data)) {
    throw new Error(`no field with name "${field}" found in response`);
  }
}
