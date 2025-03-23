import React from 'react';
import './toggleDarkMode.css';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

export const ToggleDarkMode = () => {
  const {toggleTheme,theme} = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} >
      {theme ? (
        <Sun className="theme-icon" size={20} />
      ) : (
        <Moon className="theme-icon" size={20} />
      )}
    </button>
  );
};