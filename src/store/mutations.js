/**
 *Mutation methods exported in a single object.
 */

import * as types from './mutation-types';

export default {
  [types.PAGE_STATUS](state) {
    state.isPageMounted = true;
  }
};
