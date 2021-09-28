import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLocalStorageValue(value);
    } catch (error) {
      setLocalStorageValue(value);
    }
  };

  return [localStorageValue, setValue];
};

export default useLocalStorage;
