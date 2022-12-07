import {Story} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';

export const RouteDecorator = (StoryComponent: Story) => {
   return (
      <MemoryRouter initialEntries={['/']}>
         <StoryComponent/>
      </MemoryRouter>
   );
};
