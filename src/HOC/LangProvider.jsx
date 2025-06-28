import React, { createContext, useContext, useState } from "react";

const LangContext = createContext({
  lang: "en",
  setLang: (lang) => {
    console.log("lang", lang);
  }
});

function LangProvider({ children }) {
  const [lang, setLang] = useState("english");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLangContext() {
  return useContext(LangContext);
}

export { LangProvider, useLangContext };
