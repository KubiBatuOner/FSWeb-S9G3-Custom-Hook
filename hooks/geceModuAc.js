import { useLocalStorage } from "./localStorageKullan";

export const useGeceModu = (key, baslangicDegeri) => {
  const [value, setValue] = useLocalStorage(key, baslangicDegeri);
  const setGeceModu = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, setGeceModu];
};
