import {Link} from "react-router-dom";
import {AppRouter} from "app/providers/AppRouter";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTheme} from "app/providers/ThemeProvider";



const App = () => {
   const {theme, toggleTheme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <Link to={RoutePath.main} >Main Page</Link>
         <button onClick={toggleTheme}>toggle</button>
        <AppRouter/>
      </div>
   );
};

export default App;
