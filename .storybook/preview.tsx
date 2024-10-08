import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/index.css';
import { MemoryRouter } from 'react-router-dom';

import { ChapterProvider } from '../src/contexts/chapter';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ChapterProvider>
          <Story />
        </ChapterProvider>
      </MemoryRouter>
    ),
  ],
};

export default preview;
