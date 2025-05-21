"use client";

import { createContext, type JSX } from "react"

type LanguageContextType = {
  languagechange: "fa" | "en";
  setLanguagechange: (lang: "fa" | "en") => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  languagechange: "en",
  setLanguagechange: () => {},
});

const MyLanguageContextProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: { languagechange: "fa" | "en"; setLanguagechange: (lang: "fa" | "en") => void };
}) => {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default MyLanguageContextProvider;
