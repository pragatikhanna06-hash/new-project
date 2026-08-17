import { useState, useEffect } from "react";

/* Shared across every page. Persists in localStorage and is mirrored onto
   <html data-theme="..."> so CSS-variable-driven pages (HomePage.css,
   NyayShieldPage.css) and inline-style pages (AboutPage, ServicesPage,
   etc.) can both react to the same single source of truth. */
export function useSiteTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("forfra-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("forfra-theme", theme);
  }, [theme]);

  // stay in sync if the theme is changed from another page/tab
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "forfra-theme" && e.newValue) setTheme(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return { theme, isLight: theme === "light", toggleTheme };
}
