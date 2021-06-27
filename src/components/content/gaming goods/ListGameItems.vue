<template>
    <div class="container">
        <section class="game-items">
          <span class="game-items__header">
              Товары 1
          </span>
          <ul class="game-items__list castom-scroll">
              <GameItem
                v-for="i in 8"
                :key="i"
               />
          </ul>
        </section>  
    </div>
</template>

<script>
import GameItem from '@/components/content/gaming goods/GameItem'

export default {
    name: 'ListGameItems',
    components: {
        GameItem
    }
}

</script>

<style scoped>
.game-items{
    margin: 60px 0 0 13%;
}

.game-items__list{
    list-style: none;

    display: flex;
    justify-content: space-between;

    overflow-x: scroll;

    padding: 35px 0 20px 0;

    max-width: 1140px;

   

}

.game-items__header{
    color: rgba(0, 0, 0, 1);

    font-size: 24px;
    font-family: Gilroy-Regular;
}


</style>