<template>
    <article class="gaming-goods">
        <GamingGoodsHeader />
        <ListGameItems
            v-for="i in 3"
            :key="i"
         />
         <img src="@/assets/contentBlock/transition.png" alt="" class="transition">
    </article>
</template>

<script>
import GamingGoodsHeader from '@/components/content/gaming goods/GamingGoodsHeader'
import ListGameItems from '@/components/content/gaming goods/ListGameItems'

export default {
    name: 'GamingGoods',
    components: {
        GamingGoodsHeader,
        ListGameItems
    }
}

</script>

<style scoped>
.transition{
        display: block;
        width: 100%;
        padding: 60px 0 0 0;
    }
</style>