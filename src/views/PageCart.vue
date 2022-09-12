<template>
   <section class="cart">
      <div class="cart__container _container">
         <h2 class="cart__title">Cart</h2>
         <p class="title" v-if="CART.length === 0">
            No products in the cart...
         </p>
         <transition-group name="cart-item">
            <cart-item
               v-for="(item, i) in CART"
               :key="item.id"
               :cart_item_data="item"
               @deleteFromCart="deleteFromCart(i)"
            />
         </transition-group>

         <div class="cart__total">
            <p>Total:</p>
            <p>{{ cartTotalCost }}</p>
         </div>
      </div>
   </section>
</template>

<script>
import CartItem from '@/components/PageCart/CartItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
   components: {
      CartItem,
   },
   computed: {
      ...mapGetters(['CART']),
      cartTotalCost() {
         let result = [];
         if (this.CART.length) {
            for (let item of this.CART) {
               result.push(+item.price.replace(/\./g, '') * item.quantity);
            }
            result = result.reduce((sum, cur) => sum + cur, 0);
            return result
               .toString()
               .split(/(?=(?:\d{3})+$)/)
               .join('.');
         } else {
            return 0;
         }
      },
   },
   methods: {
      ...mapActions(['DELETE_FROM_CART']),
      deleteFromCart(i) {
         this.DELETE_FROM_CART(i);
      },
   },
};
</script>

<style lang="scss" scoped>
.cart {
   margin-top: 15px;
   margin-bottom: 30px;
   &__title {
      text-align: center;
      margin-bottom: 10px;
   }
   &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 16px 24px;
      display: flex;
      justify-content: center;
      background: green;
      color: #ffffff;
      font-size: 20px;
      z-index: 10;
   }
}

.cart-item-leave-active {
   transform: translateX(-550px);
   transition: all 400ms ease-in;
   opacity: 0;
}
</style>
