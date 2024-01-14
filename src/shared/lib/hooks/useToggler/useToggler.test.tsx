// useToggler.test.ts
import { act, renderHook } from '@testing-library/react';
import useToggler from './useToggler';

describe('useToggler', () => {
  test('should initialize with the correct default state', () => {
    const { result } = renderHook(() => useToggler(true));
    expect(result.current[0]).toBe(true);
  });

  test('should toggle the state when the toggle function is called', () => {
    const { result } = renderHook(() => useToggler(false));

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](); // call toggle
    });

    expect(result.current[0]).toBe(true);
  });

  test('should toggle the state back and forth', () => {
    const { result } = renderHook(() => useToggler(false));

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](); // call toggle
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1](); // call toggle again
    });

    expect(result.current[0]).toBe(false);
  });
});
