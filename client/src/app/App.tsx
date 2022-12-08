import {AppRouter} from 'app/providers/AppRouter';
import {useTheme} from 'app/providers/ThemeProvider';
import {NavBar} from 'widgets/NavBar/ui/NavBar';
import {SideBar} from 'widgets/SideBar';

const App = () => {

   const {theme, toggleTheme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <NavBar/>
         <div className="app-container">
            <SideBar/>
            <AppRouter/>
         </div>
      </div>
   );
};

export default App;
