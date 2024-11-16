import { throttle } from '../src/throttle';

jest.useFakeTimers();

test('throttle limits function calls within a timeframe', () => {
  const mockFunction = jest.fn();
  const throttledFunc = throttle(mockFunction, 1000);

  throttledFunc();
  throttledFunc();
  expect(mockFunction).toBeCalledTimes(1);

  jest.advanceTimersByTime(1000);
  throttledFunc();
  expect(mockFunction).toBeCalledTimes(2);
});
