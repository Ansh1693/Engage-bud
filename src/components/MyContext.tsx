import React, { Children } from "react";

interface MyContext {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = React.createContext<MyContext>({
  result: "",
  setResult: (value) => {},
});

const MyComponent = ({ children }: { children: React.ReactNode }) => {
  const [result, setResult] = React.useState<string>("");

  const values = {
    result,
    setResult,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export { MyContext, MyComponent };
