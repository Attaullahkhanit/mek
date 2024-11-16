import { debounce } from '../src/debounce';

jest.useFakeTimers();

test('debounce calls function after delay', () => {
  const mockFunction = jest.fn();
  const debouncedFunc = debounce(mockFunction, 500);

  debouncedFunc();
  expect(mockFunction).not.toBeCalled();

  jest.advanceTimersByTime(500);
  expect(mockFunction).toBeCalledTimes(1);
});
