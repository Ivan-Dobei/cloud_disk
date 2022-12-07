import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

interface RenderComponentOptions {
   route?: string;
}

export const renderComponent = (children: ReactNode, options: RenderComponentOptions = {}) => {
   const {
      route = '/',
   } = options;

   return render(
      <MemoryRouter initialEntries={[route]}>
         {children}
      </MemoryRouter>,
   );
};
