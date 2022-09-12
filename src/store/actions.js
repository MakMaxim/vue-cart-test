export default {
   ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
   },
   ADD_TO_DELETED({ commit }, product) {
      commit('SET_DELETED', product);
   },
   MAKE_RESIZE_WIDTH({ commit }) {
      commit('RESIZE_WIDTH');
   },
   MAKE_RESIZE_HEIGHT({ commit }) {
      commit('RESIZE_HEIGHT');
   },
   TOGGLE_RESTORE({ commit }, product) {
      commit('TOGGLE_RESTORE', product);
   },
   DELETE_FROM_CART({ commit }, i) {
      commit('REMOVE_FROM_CART', i);
   },
   DELETE_FROM_DELETED({ commit }, i) {
      commit('REMOVE_FROM_DELETED', i);
   },
   INCREMENT_CART_ITEM({ commit }, i) {
      commit('INCREMENT', i);
   },
   DECREMENT_CART_ITEM({ commit }, i) {
      commit('DECREMENT', i);
   },
};
