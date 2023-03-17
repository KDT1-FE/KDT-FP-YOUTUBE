import { useState, useEffect } from 'react';
//value 값이 들어오면 디펜더시 리스트에 새로운 값이 부여되었기 때문에
//useEffect에 있는 콜백함수가 호출된다. delay 시간 이후에 setDebouncedValue에 의해서
//값이 갱신된다. 만약 delay 이전에 값이 들어오면 return문으로 이전의 값이 나간다. 그래서 새로운 값을 할당한다.

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
