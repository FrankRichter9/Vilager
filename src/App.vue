<template>
    <div id="app">
        
            
            <router-view v-if="!inLoading"/>
            
        
    </div>
</template>

<script>

export default {
    // beforeCreate: function () {
    //   this.$store.dispatch('getItems');
    // },
    // computed: {
    //     inLoading: function () {
    //         return this.$store.state.items.inLoading;
    //   }
    // }
}
</script>

<style>
@font-face {
    font-family: VictorMono-Medium;
    src: url(static/VictorMono/VictorMono-Medium.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Gilroy-Regular;
    src: url(static/Gilroy/Gilroy-Regular.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Gilroy-Bold;
    src: url(static/Gilroy/Gilroy-Bold.ttf);
    font-style: normal;
    font-weight: normal;
}

*{
    margin: 0;
    padding: 0;
}
#app {
    /* background-image: url("assets/img/BG.png"); */
    color: #fff;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}


/* 
@media screen and (max-width: 1024px) { */

</style>
