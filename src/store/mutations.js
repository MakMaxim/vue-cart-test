export default {
   SET_CART(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
         state.cart.map(function (item) {
            if (item.id === product.id) {
               isProductExists = true;
               item.quantity++;
            }
         });
         if (!isProductExists) {
            state.cart.push(product);
            product.quantity++;
            product.restore = false;
         }
      } else {
         state.cart.push(product);
         product.quantity++;
         product.restore = false;
      }
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
   REMOVE_FROM_CART(state, product) {
      if (
         !state.deleted
            .map((elem) => (elem.id == product.id ? 1 : ''))
            .filter((el) => el !== '').length
      ) {
         state.deleted.push(product);
      }
      product.restore = false;
   },
   REMOVE_FROM_DELETED(state, i) {
      let ind = state.deleted
         .map((elem, index) => (elem.id === i ? index : ''))
         .filter((el) => el !== '');
      state.deleted.splice(ind, 1);
   },
   TOGGLE_RESTORE(state, product) {
      product.restore = true;
   },
   INCREMENT(state, i) {
      state.cart.map(function (item) {
         if (item.id === i) {
            item.quantity++;
         }
      });
   },
   DECREMENT(state, i) {
      state.cart.map(function (item) {
         if (item.id === i && item.quantity > 1) {
            item.quantity--;
         }
      });
   },
};
