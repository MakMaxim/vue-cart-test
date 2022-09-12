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
         }
      } else {
         state.cart.push(product);
         product.quantity++;
      }
   },
   SET_DELETED(state, product) {
      state.deleted.push(product);
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
   REMOVE_FROM_CART(state, i) {
      state.cart.map(function (item) {
         if (item.id === state.cart[i].id) {
            item.quantity = 0;
         }
      });
      state.cart.splice(i, 1);
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
