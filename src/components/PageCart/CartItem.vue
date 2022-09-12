<template>
   <article class="cart__item cart-item">
      <div
         class="cart-item__deleted deleted"
         v-if="
            DELETED.filter((elem) => elem.id === cart_item_data.id).length &&
            !cart_item_data.restore
         "
      >
         <div class="deleted__text">
            product <span>{{ cart_item_data.title }}</span> removed from cart
         </div>
         <div
            class="cart-item__deletebtn btn"
            @click="
               toggleRestore(cart_item_data),
                  deleteFromDeleted(cart_item_data.id)
            "
         >
            Restore
         </div>
      </div>

      <div
         class="cart-item__cart"
         v-else-if="
            !DELETED.filter((elem) => elem.id === cart_item_data.id).length ||
            cart_item_data.restore
         "
      >
         <a href="#" class="cart-item__image">
            <img
               :src="
                  require('@/assets/images/products/' + cart_item_data.image)
               "
               alt="image"
            />
         </a>
         <div class="cart-item__content">
            <div class="cart-item__body">
               <div>
                  <h3 class="cart-item__title">{{ cart_item_data.title }}</h3>
                  <div class="cart-item__text">{{ cart_item_data.text }}</div>
               </div>
               <div class="cart-item__prices">
                  <div class="cart-item__price">
                     Rp {{ cart_item_data.price }}
                  </div>
                  <div
                     class="cart-item__price cart-item__price_old"
                     v-if="cart_item_data.priceOld"
                  >
                     Rp {{ cart_item_data.priceOld }}
                  </div>
               </div>
            </div>
            <div class="cart-item__quantity">
               <p>Quantity:</p>
               <div>
                  <span
                     class="cart-item__change-quantity"
                     @click="decrement(cart_item_data.id)"
                  >
                     -
                  </span>
                  {{ cart_item_data.quantity }}
                  <span
                     class="cart-item__change-quantity"
                     @click="increment(cart_item_data.id)"
                  >
                     +
                  </span>
               </div>
            </div>
            <div
               class="cart-item__deletebtn btn"
               @click.prevent="deleteFromCart(cart_item_data)"
            >
               Delete
            </div>
         </div>
      </div>
   </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   props: {
      cart_item_data: {
         type: Object,
      },
   },
   methods: {
      ...mapActions([
         'INCREMENT_CART_ITEM',
         'DECREMENT_CART_ITEM',
         'DELETE_FROM_CART',
         'TOGGLE_RESTORE',
         'DELETE_FROM_DELETED',
      ]),
      deleteFromCart(data) {
         this.DELETE_FROM_CART(data);
      },
      deleteFromDeleted(i) {
         this.DELETE_FROM_DELETED(i);
      },
      toggleRestore(data) {
         this.TOGGLE_RESTORE(data);
      },
      increment(i) {
         this.INCREMENT_CART_ITEM(i);
      },
      decrement(i) {
         this.DECREMENT_CART_ITEM(i);
      },
   },
   computed: {
      ...mapGetters(['DELETED', 'CART', 'PRODUCTS']),
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/constants.scss';

.cart-item {
   &__cart {
      display: flex;
      background-color: #f4f5f7;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: 16px;
      margin-bottom: 16px;
      @media (max-width: $md3 + px) {
         padding: 0 0 0 0;
      }
      @media (max-width: 555px) {
         flex-direction: column;
         align-items: flex-start;
      }
   }
   &__image {
      @include adaptiv-value('margin-right', 50, 10, 1);
      img {
         @media (max-width: 555px) {
            @include adaptiv-value('width', 1243, 290, 1);
         }
      }
   }
   &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1 1 auto;
      @media (max-width: $md2 + px) {
         flex-direction: column;
         align-items: flex-start;
      }
      @media (max-width: 555px) {
         padding: 0 0 10px 10px;
      }
   }
   &__body {
      display: flex;
      flex-direction: column;
      @media (min-width: $md2 + px) {
         width: 268px;
      }
   }
   &__title {
      font-family: 'Gilroy Semibold';
      font-size: 24px;
      line-height: 120%;
      color: $mainColor;
      margin-bottom: 8px;
      @media (max-width: 555px) {
         margin-top: 8px;
      }
   }
   &__text {
      font-family: 'Gilroy Medium';
      line-height: 150%;
      color: $grayColor;
      margin-bottom: 8px;
   }
   &__prices {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 8px;
      @media (max-width: $md3 + px) {
         flex-direction: column;
         align-items: flex-start;
      }
      @media (max-width: 555px) {
         flex-direction: row;
      }
   }
   &__price {
      font-family: 'Gilroy Semibold';
      font-size: 20px;
      line-height: 150%;
      color: $mainColor;
      &_old {
         font-family: 'Gilroy Regular';
         font-size: 16px;
         color: #b0b0b0;
         margin-left: 16px;
         text-decoration: line-through;
         @media (max-width: $md3 + px) {
            margin: 5px 0 0 0;
         }
         @media (max-width: 555px) {
            margin: 0px 0 0 10px;
         }
      }
   }
   &__quantity {
      font-family: 'Gilroy Semibold';
      font-size: 24px;
      line-height: 120%;
      color: $mainColor;
      @media (max-width: $md2 + px) {
         display: flex;
         margin-bottom: 16px;
         p {
            margin-right: 10px;
            @media (max-width: $md3 + px) {
               @include adaptiv-value('margin-right', 10, 3, 1);
            }
         }
      }
      div {
         text-align: center;
         user-select: none;
      }
   }
   &__change-quantity {
      padding: 4px;
      cursor: pointer;
   }
   &__deletebtn {
      color: white;
      padding: 15px 50px;
      background-color: $orangeColor;
      transition: 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
      }
      @media (max-width: 555px) {
         padding: 15px 60px;
      }
   }
}

.deleted {
   display: flex;
   background-color: #f4f5f7;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0 8px 0 #e0e0e0;
   padding: 16px;
   margin-bottom: 16px;
   font-size: 20px;
   &__text {
      span {
         font-family: 'Gilroy Bold';
      }
   }
}
</style>
