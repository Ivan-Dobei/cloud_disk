import {createRoot} from "react-dom/client";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";

const root = createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
     <Suspense fallback="">
        <App/>
     </Suspense>
   </BrowserRouter>
)
