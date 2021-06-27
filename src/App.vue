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
*{
  padding: 0;
  margin: 0;
}

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
@font-face {
    font-family: Minecraft;
    src: url(static/Minecraft_RUS/minecraft.ttf);
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

/* scroll */

.castom-scroll::-webkit-scrollbar {
        height: 41px;
        width: 200px;
        border-top: 20px solid #fff;
        border-bottom: 20px solid #fff;
        background-color: #1E1E27;
        
    }
    .castom-scroll::-webkit-scrollbar-track-piece{
        height: 5px;
        
    }

    .castom-scroll::-webkit-scrollbar-thumb{
        background-color: #1E1E27;
        height: 5px;
        border-top: 18px solid #fff;
        border-bottom: 18px solid #fff;
        border-radius: 19px;
    }

    

    .castom-scroll::-webkit-scrollbar-button:horizontal:end:decrement{
        /* border-width: 7px 14px 7px 0; */
        border-style: solid;
        height: 50px;
        width: 50px;
        background-color: #fff;
        display: block;
        background-size: 24px;
        background-repeat: no-repeat;

        background-position: center 4px;
        background-image: url("assets/contentBlock/scroll/Left.svg");
    }
    

    .castom-scroll::-webkit-scrollbar-button:horizontal:end:increment{
        /* border-width: 7px 0 7px 14px; */
        border-style: solid;
        height: 50px;
        width: 50px;
        
        background-color: #fff;
        display: block;
        background-size: 24px;
        background-repeat: no-repeat;

        background-position: center 4px;
        background-image: url("assets/contentBlock/scroll/Right.svg");
    }

    .castom-scroll::-webkit-scrollbar-button:horizontal:startd:decrement{
        width: 0;
        padding: 10px;
        color:red;

        transform: rotate(45deg);
    }

    .castom-scroll::-webkit-scrollbar-button:horizontal:start:increment{
        width: 0;
        height: 0;
        /* border-width: 7px 0 7px 14px; */
        color:blue;
    }
/* 
@media screen and (max-width: 1024px) { */

</style>
