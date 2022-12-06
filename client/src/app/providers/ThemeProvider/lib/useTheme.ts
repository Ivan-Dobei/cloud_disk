import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from 'app/providers/ThemeProvider';
import {useContext} from 'react';

interface UseThemeResult {
   toggleTheme: () => void;
   theme: Theme;
}

export const useTheme = (): UseThemeResult => {
   const {theme, setTheme} = useContext(ThemeContext);
   const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

   const toggleTheme = () => {
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
   };

   return {
      theme,
      toggleTheme,
   };
};
