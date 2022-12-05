import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum RouteNames {
   MAIN = 'main',
   // not found page last
   NOT_FOUND = 'not_found',
}

export const RoutePath: Record<RouteNames, string> = {
   [RouteNames.MAIN]: '/main',
   // not found page last
   [RouteNames.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteNames, RouteProps> = {
   [RouteNames.MAIN]: {
      path: RoutePath.main,
      element: <MainPage/>,
   },
   // not found page last
   [RouteNames.NOT_FOUND]: {
      path: RoutePath.not_found,
      element: <NotFoundPage/>
   },
}
