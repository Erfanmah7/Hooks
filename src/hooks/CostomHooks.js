import { useEffect, useState } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export { useTitle, useLocalStorage };
