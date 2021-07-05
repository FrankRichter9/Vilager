<template>
  <article class="basic-content"> 
      <div class="container">
          <ul class="main-items-list">
              

              <Item
                v-for="i in 3"
                :key="i"
               />
          </ul>
      </div>
      <img src="@/assets/basic/transition.png" alt="" class="transition">
  </article>
</template>

<script>
import Item from '@/components/basic/Item'

export default {
    name: 'BasicContent',
    components: {
        Item
    }
}

</script>

<style scoped>
.basic-content{
    height: 656px;

    box-sizing: border-box;
    padding: 170px 0 0 0;

    background: url('../assets/basic/BG.png');
    background-position: 0 center;

    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
}

.main-items-list{
    list-style: none;

    display: flex;
    justify-content: space-around;
}

.transition{
    display: block;

    width: 100%;
}

@media screen and (max-width: 760px) {
    .basic-content{
        height: 1346px;

        display: flex;
        flex-flow: column wrap;

        padding: 70px 0 0 0;

        background-size: 500%;
    }

    .main-items-list{
        flex-flow: column wrap;

        justify-content: center;
        align-items: center;
    }

    .container{
        width: 100%;
    }
}
</style>