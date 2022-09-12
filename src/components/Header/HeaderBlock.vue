<template>
   <header class="header">
      <div class="header__wrapper">
         <div class="header__container _container">
            <div class="header__body">
               <router-link :to="{ name: 'main' }">
                  <a href="" class="header__logo title">Funiro.</a>
               </router-link>
               <div class="header__icons icons">
                  <div class="icons__cart">
                     <span class="icons__cart-quantity">
                        {{ totalQuantity }}
                     </span>
                     <router-link :to="{ name: 'cart' }">
                        <div>
                           <img
                              src="@/assets/images/icons/Cart.svg"
                              alt="cart"
                           />
                        </div>
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'HeaderBlock',
   methods: {},
   computed: {
      ...mapGetters(['WIDTH', 'HEIGHT', 'CART']),
      totalQuantity() {
         return this.CART.length == 0
            ? 0
            : this.CART.map((e) => e.quantity).reduce(
                 (sum, cur) => sum + cur,
                 0
              );
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.header {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   &__wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 50;
      background-color: $lightOrangeColor;
   }
   &__logo {
      position: relative;
      z-index: 5;
      transition: all 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
         color: white;
      }
   }
   &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 65px;
      position: relative;
   }
}

.icons {
   position: relative;
   &__cart {
      img {
         cursor: pointer;
      }
   }
   &__cart-quantity {
      position: absolute;
      right: 27px;
      top: 2px;
      font-size: 18px;
      color: $darkOrangeColor;
   }
}
</style>
