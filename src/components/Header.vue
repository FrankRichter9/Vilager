<template>
  <header class="main-header"
    :class="{min_height_main_header: !menu.open}"
  >
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
      <div class="other__projects"
        v-show="menu.open"
      >
            <span class="other__projects-header">Другие проекты:</span>
            <a href="#">Скрафтиголову.store</a>
            <a href="#">Магазин аккаунтов</a>
      </div>
      
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

.other__projects{
  display: none;
}


.btn{
  border: none;

  font-size: 80px;

  display: block;
  width: 100%;
  background-color: #0A0A0A;

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

.btn-menu-open, .btn-menu-close{
  height: 56px;
  font-size: 40px;
}

@media screen and (max-width: 760px) {
  .btn{
    display: block;
  }
  .other__projects{
    display: block;

    font-family: VictorMono-Medium;

    background-color: #0A0A0A;

    width: 80%;

    box-sizing: border-box;
    padding: 0 3.208333333333333% 40px 3.208333333333333%;
  }

  .other__projects a{
    display: block;

    margin: 0 0 20px 0;

    text-decoration: none;

    color: #fff;
  }

  .other__projects-header{
    display: block;

    margin: 0 0 20px 0;
  }

  .main-header{
    height: 600px;
  }
  .min_height_main_header{
    height: 56px;
  }
}
</style>