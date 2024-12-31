import React from 'react';
import '../scss/index.scss';
import { Unstyled, Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

const preview = {
  parameters: {
      docs: {
          page: () => (
              <>
                  <Unstyled>
                      <Title />
                      <Subtitle />
                      <Description />
                        <Primary />
                        <Controls sort="requiredFirst" />
                        <Stories includePrimary={false} />
                    </Unstyled>
                </>
            ),
        },
    },
};
export const tags = ['autodocs'];

export default preview;
