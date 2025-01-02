import { main } from './publish-package';

describe('publish scripts', () => {
  it('should work', () => {
    expect(main()).toEqual('publish scripts');
  });
});
