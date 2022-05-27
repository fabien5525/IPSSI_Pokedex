import { createContext, ReactNode, useContext, useState } from "react";

type appContextType = {
};

const appContextValues: appContextType = {
};

const AppContext = createContext<appContextType>(appContextValues);

export function useApp() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const value = {
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
