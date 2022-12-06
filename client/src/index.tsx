import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/style/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <ThemeProvider>
         <App/>
      </ThemeProvider>
   </BrowserRouter>,
);
