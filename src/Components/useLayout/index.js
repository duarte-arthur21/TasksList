import { useState } from "react";

const useLayout = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const layout = () => setValue(value === false ? true : false);
  return [value, layout];
};

export default useLayout;
