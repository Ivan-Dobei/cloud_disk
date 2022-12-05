import {Link} from "react-router-dom";
import {AppRouter} from "app/providers/AppRouter";
import {RoutePath} from "shared/config/routeConfig/routeConfig";




const App = () => {
   return (
      <div className={'app'}>
         <Link to={RoutePath.main} >Main Page</Link>
        <AppRouter/>
      </div>
   );
};

export default App;
