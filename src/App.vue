<template>
   <div class="wrapper">
      <header-block></header-block>
      <div class="router">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
import HeaderBlock from '@/components/Header/HeaderBlock';

import { mapActions } from 'vuex';

export default {
   components: {
      HeaderBlock,
   },
   created() {
      window.addEventListener('resize', this.handleResize);
   },
   mounted() {
      setInterval(() => {
         this.ibg();
      }, 200);
      this.handleResize();
   },
   unmounted() {
      window.removeEventListener('resize', this.handleResize);
   },
   methods: {
      ...mapActions(['MAKE_RESIZE_WIDTH', 'MAKE_RESIZE_HEIGHT']),
      handleResize() {
         this.MAKE_RESIZE_WIDTH();
         this.MAKE_RESIZE_HEIGHT();
      },
      ibg() {
         let ibg = document.querySelectorAll('.ibg');
         for (let i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
               ibg[i].style.backgroundImage =
                  'url(' +
                  ibg[i].querySelector('img').getAttribute('src') +
                  ')';
            }
         }
      },
   },
};
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/constants.scss';

.router {
   flex: 1 1 auto;
   margin-top: 65px;
}
</style>
