<template>
    <article class="minecraft-preview">
        <div class="container">
            <h1 class="main-header">Как играть?</h1>

            <ul class="how-play__list">
                <li class="how-play__list__item">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
                <li class="how-play__list__item item-arrow">
                    <img src="@/assets/how_start_play/arrow.png" alt="">
                </li>
            </ul>

            <ul class="how-play__list list-two">
                <li class="how-play__list__item">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
            </ul>

            <ul class="how-play__list list-three">
                <li class="how-play__list__item">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
                <li class="how-play__list__item item-arrow arrow-3-1">
                    <img src="@/assets/how_start_play/arrow.png" alt="">
                </li>
                <li class="how-play__list__item item-arrow arrow-3-2">
                    <img src="@/assets/how_start_play/arrow.png" alt="">
                </li>
                <li class="how-play__list__item">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
            </ul>

             <ul class="how-play__list list-two list-four">
                <li class="how-play__list__item item-four">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
            </ul>

            <ul class="how-play__list list-five">
                
                <li class="how-play__list__item item-arrow arrow-5-1">
                    <img src="@/assets/how_start_play/arrow.png" alt="">
                </li>
                <li class="how-play__list__item item-arrow arrow-5-2">
                    <img src="@/assets/how_start_play/arrow.png" alt="">
                </li>
            </ul>

            <ul class="how-play__list last-list">
                <li class="how-play__list__item">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
                <li class="how-play__list__item item-seven-2">
                    <section class="how-play__block">
                        <span class="how-play__block__header">Заголовок 1</span>
                        <button class="how-play__block__btn">?</button>
                        <!-- <img src="" alt="" class="how-play__block__img"> -->
                        <div class="how-play__block__img"></div>
                    </section>
                </li>
            </ul>
        </div>

        <img src="@/assets/contentBlock/transition.png" alt="" class="transition">
    </article>
</template>

<script>

export default {
    name: 'HowPlay',
}

</script>

<style scoped>

.transition{
        display: block;
        width: 100%;
        padding: 120px 0 0 0;
}
.container{
    padding: 0 15%;
}

.main-header{
    font-size: 42px;
    line-height: 42px;

    text-align: center;

    margin: 64px 0 80px 0;
}

.last-list, .list-three{
    justify-content: space-between;
}

.list-three{
    margin: 66px 0 0 0;
}

.minecraft-preview{
    color: rgba(0, 0, 0, 1);
    
    box-sizing: border-box;
    /* padding: 0 17%; */

    font-family: Minecraft;
}

.how-play__block__img{
    width: 360px;
    height: 200px;

    background-color: #E0E0E0;
}

.how-play__list{
    list-style: none;

    display: flex;
}

.how-play__block__header{
    margin: 0 0 0 15%;
}

.list-two{
    margin: 66px 0 0 0;

    justify-content: center;
}

.item-arrow{
    margin: 110px 0 0 165px;
}

.how-play__block__header{
    font-size: 28px;
    line-height: 28px;
}

.how-play__block__btn{
    font-size: 18px;

    padding: 6px 10px;

    background-color: #C6C6C6;

    border: 1px solid #000;
}

.arrow-3-1{
    transform: rotate(90deg);
    margin: -120px 0 0 -70px;
}

.arrow-3-2{
    transform: rotate(-170deg) scale(1, -1);
   
}
.arrow-5-1{
    transform: scale(-1, 1);
    margin: -50px 0 0 10%;
}

.arrow-5-2{
    transform: rotate(90deg) scale(1, -1);
    margin: 0 0 0 40%;
}

.item-four{
    margin: 0 0 0 -20%;
}
.item-seven-2{
    margin: -100px 0 0 ;

}

@media screen and (max-width: 1220px) {
    .minecraft-preview{
        display: none;
    }
}
</style>