export const getStorage = (key, defaultCalue = []) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultCalue;
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
