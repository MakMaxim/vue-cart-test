<template>
   <section class="catalog">
      <div class="catalog__container _container">
         <h2 class="catalog__title">Our Products</h2>
         <div class="catalog__list">
            <transition-group name="list">
               <catalog-item
                  v-for="product in products"
                  :key="product.id"
                  :product_item="product"
                  @addToCart="addToCart"
               />
            </transition-group>
         </div>
         <div
            class="catalog__button btn"
            v-if="products.length < PRODUCTS.length"
            @click="loadMore"
         >
            Show More
         </div>
      </div>
   </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from '@/components/PageMain/CatalogItem.vue';

export default {
   name: 'SectionCatalog',
   data() {
      return {
         products: [],
         num: 0,
      };
   },
   components: {
      CatalogItem,
   },
   methods: {
      ...mapActions(['ADD_TO_CART']),
      addToCart(data) {
         this.ADD_TO_CART(data);
      },
      loadMore() {
         this.num += 4;
         return this.products.push(
            ...this.PRODUCTS.slice(this.num, this.num + 4)
         );
      },
   },
   computed: {
      ...mapGetters(['PRODUCTS', 'CART']),
   },
   mounted() {
      this.products = this.PRODUCTS.slice(this.num, this.num + 4);
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.catalog {
   @include adaptiv-value('margin-bottom', 44, 25, 1);
   &__container {
      display: flex;
      flex-direction: column;
   }
   &__title {
      @include adaptiv-value('margin-bottom', 32, 16, 1);
      text-align: center;
   }
   &__list {
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
   }
   &__item {
   }
   &__button {
      margin: 32px auto 0 auto;
      min-width: 245px;
      min-height: 48px;
   }
}

.catalog-item {
   display: flex;
   flex-direction: column;
   background-color: #f4f5f7;
   &__image {
      padding: 0px 0px 301px/285px * 100% 0px;
   }
   &__body {
      padding: 16px 16px 30px 16px;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
   }
   &__content {
      flex: 1 1 auto;
   }
   &__title {
      font-family: 'Gilroy Semibold';
      font-size: 24px;
      line-height: 120%;
      color: $mainColor;
      margin-bottom: 8px;
   }
   &__text {
      font-family: 'Gilroy Normal';
      line-height: 150%;
      color: $grayColor;
      margin-bottom: 8px;
   }
   &__prices {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
   }
   &__price {
      font-family: 'Gilroy Semibold';
      font-size: 20px;
      line-height: 150%;
      color: $mainColor;
      &_old {
         font-family: 'Gilroy Regular';
         font-size: 20px;
         color: #b0b0b0;
         margin-left: 16px;
         text-decoration: line-through;
      }
   }
}

.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.6s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateY(-80px);
}
</style>
