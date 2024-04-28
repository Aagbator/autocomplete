import { useEffect, useState } from "react";

export const useDebounceValue = (value: string, delay = 1000): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      // Cleanup the timeout if value changes before the delay
      clearTimeout(timeoutHandler);
    };
  }, [value, delay]);

  return debouncedValue;
};
