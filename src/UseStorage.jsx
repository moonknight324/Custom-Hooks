import { useEffect, useState } from 'react';

export default function UseStorage(key, initValue) {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key)) || JSON.parse(sessionStorage.getItem(key));
    return savedValue !== null ? savedValue : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
