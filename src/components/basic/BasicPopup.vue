<template>
  <article class="popup">
        <div class="body"
            @click="stopClick"
        >

        
            <span class="btn-close">&times;</span>
            <div class="block-close">Закрыть</div>

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
                    <input type="radio" name="amount" class="form-amount__radio first-radio" checked>
                </label>
                
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
                            Я согласен с условиями <a href="#">пользовательского <br> соглашения</a>
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
    methods: {
        stopClick(event){
            if(document.querySelector('.btn-close').textContent !== event.target.textContent && document.querySelector('.block-close').textContent !== event.target.textContent)event.stopPropagation();
            
        }
    }
}

</script>

<style scoped>
.block-close{
    display: none;
}

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
    box-sizing: border-box;
    padding: 20px;

    width: 90%;

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

    justify-content: space-between;

    margin: 50px 7.8% 0 7.8%;

    height: 14px;

    border-radius: 8px;

    background-color: rgba(201, 201, 201, 1);
}

.label-block{
    display: block;

    /* margin: 0 11.5% 0 0; */

    font-size: 12px;
}

.form-amount__radio, .form-amount__amount{
    display: block;
    text-align: center;
}
.form-amount__radio{
    margin: 0 auto;

    
}
.first-radio{
    margin: 0 0 0 12px;
    opacity: 0;
}
.form-amount__radio.first-radio:checked {
    margin: -6px 0 0 -12px;
    opacity: 1;
    display: block;
}

.form-amount__radio:checked{
    filter: grayscale(100%);

    width: 25px;
    height: 25px;

    margin: -6px 0 0 6px;
}

.form-amount__amount{
    margin: 10px 0 0 0;
    width: 40px;
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
    /* max-width: 760px; */
    width: 40%;
    /* height: 643px; */

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

.main__form__btn{
    margin-bottom: 20px;
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

.main__form__label__heading-checkbox{
    font-size: 14px;
}

@media screen and (max-width: 1200px) {
    .body{
        width: 60%;
    }
}

@media screen and (max-width: 900px) {
    .body{
        width: 100%;
    }

    .nav{
        overflow-x: scroll;
    }

    .heading{
        font-size: 14px;
        line-height: 18px;
    }
    .numbers__block{
        width: 50px;
    }

    .heading-text{
        width: 135px;
    }

    .label-block{
        /* margin: 0 10% 0 0; */
    }

    .main__img{
        display: none;
    }

    .main__form{
        width: 90%;
        margin: 10px auto;
    }

    .promocode{
        width: 100%;
    }

    .main__form__label__input-text, .main__form__btn{
        width: 100%;
    }

    .main__form__btn{
        margin-top: 20px;
    }

    .btn-close{
        display: none;
    }

    .block-close{
        display: block;

        font-family: Gilroy-Regular;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        background-color: #141414;

        box-sizing: border-box;
        padding: 15px 10px;

        text-decoration: underline;

        height: 56px;

        text-align: right;

        color: #fff;
    }

    .body{
        overflow-y: scroll;
    }

    .nav__item{
        margin-top: 10px;
    }
    .form-amount, .numbers{
        margin-top: 20px;
    }
}

@media screen and (max-width: 320px) {
    .nav__item{
        font-size: 18px;
        line-height: 20px;
    }

    .main__form__label__input-text, .main__promocode__input-text{
        padding: 15px;
    }

    .main__form__btn{
        margin-bottom: 10px;
    }
}
</style>