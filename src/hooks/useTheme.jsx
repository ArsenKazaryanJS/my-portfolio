import { useEffect, useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || '');
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === '' ? 'dark' : ''));
    };
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app-theme', theme);
    }, [theme]);
  
    return{toggleTheme,theme}
  
}

export default useTheme
