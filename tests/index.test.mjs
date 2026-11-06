import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('creates equal chunks', () => {
  assert.deepEqual(api.chunkArray([1, 2, 3, 4], 2), [
    [1, 2],
    [3, 4],
  ]);
});
test('keeps final partial chunk', () => {
  assert.deepEqual(api.chunkArray([1, 2, 3], 2), [[1, 2], [3]]);
});
test('returns empty for empty input', () => {
  assert.deepEqual(api.chunkArray([], 3), []);
});
test('supports single-item chunks', () => {
  assert.deepEqual(api.chunkArray(['a', 'b'], 1), [['a'], ['b']]);
});
test('does not mutate source', () => {
  const a = [1, 2, 3];
  api.chunkArray(a, 2);
  assert.deepEqual(a, [1, 2, 3]);
});
test('rejects zero chunk size', () => {
  assert.throws(() => api.chunkArray([1], 0), RangeError);
});
