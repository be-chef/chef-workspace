import { render } from '@testing-library/react';

import Slushy from './slushy';

describe('Slushy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Slushy />);
    expect(baseElement).toBeTruthy();
  });
});
