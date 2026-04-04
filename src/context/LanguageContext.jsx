// src/context/LanguageContext.jsx
import { createSignal, createContext, useContext } from "solid-js";
import { translations } from "../i18n/translations";

// Initialize with a safe default so it never crashes
const LanguageContext = createContext({
  language: () => "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key, // Returns the key string if context fails
});

export function LanguageProvider(props) {
  const [language, setLanguage] = createSignal("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = (path) => {
    const keys = path.split(".");
    // This call to language() makes the helper reactive
    let value = translations[language()];

    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const store = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={store}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
