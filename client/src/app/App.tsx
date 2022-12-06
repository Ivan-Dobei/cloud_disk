import {AppRouter} from 'app/providers/AppRouter';
import {useTheme} from 'app/providers/ThemeProvider';
import {NavBar} from 'widgets/NavBar/ui/NavBar';



const App = () => {
   const {theme, toggleTheme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <NavBar/>
         <AppRouter/>
      </div>
   );
};

export default App;
