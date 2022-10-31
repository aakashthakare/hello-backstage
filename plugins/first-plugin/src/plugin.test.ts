import { firstPluginPlugin } from './plugin';

describe('first-plugin', () => {
  it('should export plugin', () => {
    expect(firstPluginPlugin).toBeDefined();
  });
});
