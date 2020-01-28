/* eslint-disable max-nested-callbacks */
import { becomeAnArtisan } from './index';

describe('Be a software artisan', () => {
  test('Become An Artisan', () => {
    expect(becomeAnArtisan([], { values: [], skills: [] })).toBeDefined();
  });
});
