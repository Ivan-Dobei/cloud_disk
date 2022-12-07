import {render, screen} from '@testing-library/react';
import {NavBar} from 'widgets/NavBar/ui/NavBar';
import {renderComponent} from 'shared/lib/tests/renderComponent';

describe('NavBar.test', () => {
   test('render test', () => {
      renderComponent(<NavBar/>);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
   });
});
