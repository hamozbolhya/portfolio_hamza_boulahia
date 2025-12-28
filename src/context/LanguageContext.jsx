// src/context/LanguageContext.jsx
import { createSignal, createContext, useContext } from "solid-js";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider(props) {
  // Default to English
  const [language, setLanguage] = createSignal("en");

  // Toggle function
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  // Translation helper function
  // Usage: t("header.role") -> "Full Stack Engineer"
  const t = (path) => {
    const keys = path.split(".");
    let value = translations[language()];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path; // Fallback to key if translation missing
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

// Custom Hook for easy access
export function useLanguage() {
  return useContext(LanguageContext);
}