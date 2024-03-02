"use client"
import { useState, useEffect } from 'react';


export default function UseThemeCheck() {

  const [themeCheck, setThemeCheck] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const toggleTheme = () => {
    const themeScheme = localStorage.getItem('tp_theme_scheme');
    const themeToggle: any = document.querySelector('.themepure-theme-toggle');

    if (themeScheme === 'tp-theme-dark') {
      tp_set_scheme('tp-theme-light');
      themeToggle.classList.remove('dark-active');
      themeToggle.classList.add('light-active');
    } else {
      tp_set_scheme('tp-theme-dark');
      themeToggle.classList.remove('light-active');
      themeToggle.classList.add('dark-active');
    }
  };

  const tp_set_scheme = (tp_theme: string) => {
    localStorage.setItem('tp_theme_scheme', tp_theme);
    document.documentElement.setAttribute('tp-theme', tp_theme);

    // Toggle button class
    setActive(tp_theme === 'tp-theme-dark');
  };

  const tp_init_theme = () => {
    const themeToggle: any = document.querySelector('.themepure-theme-toggle');
    const themeInput: HTMLInputElement | null = document.querySelector('.themepure-theme-toggle-input');

    if (themeToggle && themeInput) {
      if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-light') {
        tp_set_scheme('tp-theme-light');
        themeToggle.classList.remove('dark-active');
        themeToggle.classList.add('light-active');
        themeInput.checked = false;
      } else {
        tp_set_scheme('tp-theme-dark');
        themeInput.checked = true;
        themeToggle.classList.remove('light-active');
        themeToggle.classList.add('dark-active');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      tp_init_theme();

      const themeInput: any = document.querySelector('.themepure-theme-toggle-input');
      if (themeInput) {
        themeInput.addEventListener('change', toggleTheme);
        return () => {
          themeInput.removeEventListener('change', toggleTheme);
        };
      }

      setThemeCheck(true)
    }
  }, []);

  return {
    themeCheck,
    toggleTheme,
    active,
  };

}