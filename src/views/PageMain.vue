<template>
   <main class="main">
      <section-catalog />
   </main>
</template>

<script>
import SectionCatalog from '@/components/PageMain/SectionCatalog';

export default {
   name: 'MainBlock',
   components: {
      SectionCatalog,
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';
</style>
