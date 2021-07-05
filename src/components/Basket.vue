<template>
  <article class="basket"
    @click="popup.active = !popup.active"
  >
      <img src="@/assets/basket/main.png" alt="" class="static">
      <img src="@/assets/basket/main-hover.png" alt="" class="hover">

      <BasketPopup 
        v-show="popup.active"
      />
  </article>
</template>

<script>
import BasketPopup from '@/components/basket/BasketPopup'

export default {
    name: 'Basket',
    components: {
        BasketPopup
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
 .basket{
     position: fixed;

     z-index: 9999;

     background-color: #fff;

     padding: 15px 10px;

     border-radius: 50%;

     display: flex;
     align-items: center;
     justify-content: center;

     cursor: pointer;

     left: 80%;
     top: 20%;
 }

 .hover{
     display: none;
 }

 .hover, .static{
     margin: 0 0 7px 11px;
 }

 .basket:hover .hover{
     display: block;
 }
 .basket:hover .static{
     display: none;
 }

 @media screen and (max-width: 760px) {
      .basket{
          display: none;
      }
 }

</style>