import * as api from '@lp-labs/array-chunking';
import { chunkArray } from '@lp-labs/array-chunking';
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.chunkArray('items', 2);
