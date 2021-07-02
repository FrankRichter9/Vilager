<template>
  <header class="main-header">
      <HeaderInfo

       />
      <Navigation />

      <Basket />
  </header>
</template>

<script>
import HeaderInfo from '@/components/header/HeaderInfo'
import Navigation from '@/components/header/Navigation'
import Basket from '@/components/Basket'


export default {
    name: '',
    components: {
      HeaderInfo,
      Navigation,
      Basket
    },
    data(){
      return {
        
      }
    }
}

</script>

<style scoped>
.main-header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
   z-index: 999;
}
</style>