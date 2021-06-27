<template>
  <div class="content-block">
      <ContentNav 
        @display="this.display"
      />
      <Privilege v-show="active === 'privel'"/>
      <GamingGoods v-show="active === 'game'"/>
  </div>
</template>

<script>
import ContentNav from '@/components/content/ContentNav'
import Privilege from '@/components/content/Privilege'
import GamingGoods from '@/components/content/GamingGoods'

export default {
    name: '',
    data(){
        return {
            active: 'privel'
        }
    },
    components: {
        ContentNav,
        Privilege,
        GamingGoods
    },
    methods: {
        display(active_item){
            this.active = active_item
            console.log(active_item)
        }
    }
}

</script>

<style scoped>
.content-block{
    background-color: #fff;
}
</style>