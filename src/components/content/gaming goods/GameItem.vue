<template>
  <li class="item">
      <span class="item__header">
          25 игровых- <br> Косметических ключей
      </span>
      <img src="@/assets/gaming-goods/game-item/img.png" alt="" class="item__img">
      <button type="button" class="item__btn btn-one"
        @click="popup.active = !popup.active"
      >Action</button>
      <button type="button" class="item__btn btn-two">Action</button>

      <GameGoodsPopup
        v-show="popup.active"
        @close="popup.active = false;"
       />
  </li>
</template>

<script>
import GameGoodsPopup from '@/components/content/gaming goods/GameGoodsPopup'

export default {
    name: 'GameItem',
    components: {
        GameGoodsPopup
    },
    data(){
        return {
            popup: {
                active: false,
            }
        }
    }
}

</script>

<style scoped>
.item {
    width: 216px;
    height: 376px;

    background: #FFFFFF;
    border-radius: 2px;

    box-shadow: 0px 2px 40px rgba(32, 32, 32, 0.14);

    margin: 0 1.4% 0 0;
}


/* .item::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 216px;
    height: 376px;
    
    
    z-index: 20;
} */


.item__header, .item__img, .item__btn{
    display: block;
    text-align: center;
}

.item__header{
    color: rgba(32, 32, 32, 1);
    font-family: Gilroy-Regular;
    font-size: 16px;
    font-weight: 600;

    padding: 30px 0 20px 0;
}

.item__btn{
    margin: 0 auto;

    border: none;

    padding: 12px 60px;
    border-radius: 2px;

    font-size: 16px;
    font-family: Gilroy-Regular;
}

.btn-one{
    background: #25C40B;

    color: #fff;

    margin-bottom: 20px;
    margin-top: 15px;
}
.btn-two{
    border: 2px solid #000;

    background-color: #fff;
}
</style>