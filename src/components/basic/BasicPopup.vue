<template>
  <article class="popup">
        <div class="body"
            @click="event.stopPropagation();"
        >
            <span class="btn-close">&times;</span>

            <ul class="nav">
                <li class="nav__item item-active">Приобрести Изюмы</li>
                <li class="nav__item item-two">Приобрести Монетки</li>
            </ul>

            <section class="numbers">
                <div class="numbers__block">
                    <span class="heading">Кол-во</span>
                    <span class="numb">100</span>
                </div>

                <div class="numbers__block numbers__block-2">
                    <span class="heading">Выгода</span>
                    <span class="numb">25</span>
                </div>

                <span class="delimiter">|</span>

                <div class="numbers__block">
                    <span class="heading heading-text">(Зависит от количества валюты)</span>
                    
                </div>
            </section>

            <form action="" class="form-amount">
                <label class="label-block">
                    <input type="radio" name="amount" class="form-amount__radio">
                    <span class="form-amount__amount">16 шт.</span>
                </label>

                <label class="label-block">
                    <input type="radio" name="amount" class="form-amount__radio">
                    <span class="form-amount__amount">32 шт.</span>
                </label>

                <label class="label-block">
                    <input type="radio" name="amount" class="form-amount__radio">
                    <span class="form-amount__amount">64 шт.</span> 
                </label>

                <label class="label-block">
                    <input type="radio" name="amount" class="form-amount__radio">
                    <span class="form-amount__amount">128 шт.</span> 
                </label>

                <label class="label-block">
                    <input type="radio" name="amount" class="form-amount__radio">
                    <span class="form-amount__amount">256 шт.</span> 
                </label>
            </form>

            <section class="main">
                <div class="main__img">
                    <img src="@/assets/basic-popup/emerald.png" alt="">
                </div>

                <form action="" class="main__form">
                    <label for="" class="main__form__label">
                        <span class="main__form__label__heading">Никнейм</span>
                        <input type="text" class="main__form__label__input-text" placeholder="Введите никнейм">
                    </label>

                    <label for="" class="main__form__label">
                        <span class="main__form__label__heading">Промокод</span>
                        <div class="promocode">
                            <input type="text" class="main__promocode__input-text" placeholder="Введите промокод">
                            <button type="button" class="main__promocode__btn">Применить</button>
                        </div>
                    </label>

                    <label for="" class="main__form__label">
                        <input type="checkbox" class="main__form__label__input-checkbox">
                        <span class="main__form__label__heading-checkbox">
                            Я согласен с условиями <a href="#">пользовательского соглашения</a>
                            </span>
                    </label>

                    <button type="button" class="main__form__btn">Оплатить 169 ₽</button>
                </form>
            </section>
        </div>
  </article>
</template>

<script>


export default {
    name: 'BasicPopup',
}

</script>

<style scoped>
.promocode{
    width: 90%;
    display: flex;

    border: 1px solid #000;

    box-sizing: border-box;
}
.main__promocode__input-text{
    width: 50%;

    padding: 20px;

    font-size: 15px;
    line-height: 17px;

    border: none;
}
.main__promocode__btn{
    width: 50%;

    padding: 15px;

    font-size: 15px;
    line-height: 17px;

    background-color: rgba(240, 241, 243, 1);

    border: none;
}
.main{
    display: flex;

    font-size: 13px;
    line-height: 15px;
}

.main__form{
    display: block;

    width: 60%;

    margin: 20px 0 0 0;
}
.main__form__label , .main__form__label__heading, .main__form__label__input-text{
    display: block;
}

.main__form__label__heading{
    margin: 0 0 5px 0;
}
.main__form__label__input-text, .main__form__btn{
    padding: 20px;

    width: 80%;

    font-size: 15px;
    line-height: 17px;
}
.main__form__btn{
    width: 90%;

    background-color: rgba(37, 195, 11, 1);

    border: none;

    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    margin: 30px 0 0 0;
}

.main__form__label{
    margin: 20px 0 0 0;
}

.main__img{
    margin: 20px 0 0 7.8%;
}

.main__img img{
    width: 240px;
    height: 240px;
}


.form-amount{
    display: flex;
    justify-content: space-around;

    margin: 50px 7.8% 0 7.8%;

    height: 14px;

    border-radius: 8px;

    background-color: rgba(201, 201, 201, 1);
}

.label-block{
    display: block;
}

.form-amount__radio, .form-amount__amount{
    display: block;
    text-align: center;
}
.form-amount__radio{
    margin: 0 auto;
}
.form-amount__amount{
    margin: 10px 0 0 0;
}
.numbers{
    display: flex;

    margin: 40px 0 0 7.8%;
}
.numbers__block .heading, .numbers__block .numb{
    display: block;
}
.heading{
    font-size: 18px;
    line-height: 21px;

    margin: 0 0 10px 0;
}

.numb{
    font-family: Gilroy-Bold;

    font-size: 28px;
    line-height: 34px;
}

.numbers__block-2{
    margin: 0 2% 0 13.8%;
}

.delimiter{
    margin: 0 2% 0 0;
}



.popup{
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(10, 10, 10, 0.85);
}

.body{
    width: 40%;
    height: 643px;

    background-color: #fff;

    color: #000;
    font-family: Gilroy-Regular;

    border-radius: 2px;
}

.btn-close{
    font-size: 40px;

    float: right;

    margin: 5px 20px;
}

.nav{
    list-style: none;

    display: flex;
}

.nav__item{
    font-family: Gilroy-Bold;

    font-size: 28px;
    line-height: 34px;

    color: rgba(146, 146, 146, 1);

    margin: 40px 6.6% 0 7.8%;
}
.item-active{
    color: #000;
}
.item-two{
    margin: 40px 0 0 0;
}
.heading-text{
    color: rgba(30, 30, 39, 0.5); 
}
</style>