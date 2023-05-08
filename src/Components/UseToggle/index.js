import { useState } from "react";

const useToggle = (initialValue = "OFF") => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(value === "OFF" ? "ON" : "OFF");
  return [value, toggle];
};

export default useToggle;
