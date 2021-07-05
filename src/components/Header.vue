<template>
  <header class="main-header">
    <button class="btn btn-menu-open"
      v-show="!menu.open"
      @click="menu.open = true"
    >&equiv;</button>
    <button class="btn btn-menu-close"
      v-show="menu.open"
      @click="menu.open = false"
    >&times;</button>
      <HeaderInfo
        v-show="menu.open"
       />
      <Navigation 
        v-show="menu.open"
      />
      
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
        menu: {
          open: true,
        }
      }
    }
}

</script>

<style scoped>
.main-header{
  
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
   z-index: 999;

}

.btn{
  border: none;

  font-size: 80px;

  display: block;
  width: 100%;
  background-color: #141414;

  color: #fff;

  box-sizing: border-box;

  padding: 0 5%;

  display: none;
}

.btn-menu-open{
  text-align: left;
}

.btn-menu-close{
  text-align: right;
}

@media screen and (max-width: 760px) {
  .btn{
    display: block;
  }
}
</style>