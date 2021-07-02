<template>
  <article class="popup">
        <div class="body"
            @click="stopClick"
        >
            <!-- <span class="btn-close">&times;</span> -->
           
           <span class="heading">Корзина:</span>

           <ul class="items-list">
               <BasketListItem 
                v-for="item in 2"
                :key="item"
               />
           </ul>

           <section class="form">

            <section class="main-content__insurance">
                        <img src="@/assets/contentBlock/totem.png" alt="" width="39px" height="39px" class="insurance-img">

                        <span class="insurance-text">Страховка привилегии</span>
                        <span class="insurance-price">+ 169 ₽</span>
                    </section>


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

                        <label for="" class="main__form__label main__form__label__checkbox">
                            <input type="checkbox" class="main__form__label__input-checkbox">
                            <span class="main__form__label__heading-checkbox">
                                Я согласен с условиями <a href="#">пользовательского <br> соглашения</a>
                            </span>
                        </label>
                    </form>

                    <button class="main-content__main-btn">Оплатить 169 ₽</button>
                </section>
        </div>
  </article>
</template>

<script>
import BasketListItem from '@/components/basket/BasketListItem'

export default {
    name: 'BasketPopup',
    components: {
        BasketListItem
    },
    methods: {
        stopClick(event){
            if(document.querySelector('.btn-close').textContent !== event.target.textContent)event.stopPropagation();
        }
    }
}

</script>

<style scoped>
.btn-close{
    float: right;

    font-size: 50px;

    margin: 0 18px 0 0;

    cursor: pointer;
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
    width: 560px;
    height: 793px;

    background-color: rgba(255, 176, 84, 1);

    color: #000;
    font-family: Gilroy-Regular;

    border-radius: 2px;
}

.heading{
    display: block;

    font-family: Gilroy-Regular;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;

    margin: 42px;
}

.main-content__insurance{
    margin: 41px auto 30px auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.insurance-text{
    font-family: Gilroy;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    text-decoration-line: underline;

    padding: 0 30px 0 0;
}

.insurance-price{
    font-family: Gilroy-Bold;
    font-size: 20px;
    line-height: 24px;
}

.form{
    width: 70%;
    margin: 0 auto;
}

.main__form{
    display: block;

    width: 100%;

    
}
.main__form__label , .main__form__label__heading, .main__form__label__input-text{
    display: block;
}

.main__form__label__heading{
    margin: 0 0 5px 0;
}
.main__form__label__input-text, .main__form__btn{
    padding: 15px;

    width: 100%;

    font-size: 15px;
    line-height: 17px;

    border: 1px solid #000;

    box-sizing: border-box;
}

.main__form__label__input-text{
    background-color: transparent;
    border-radius: 5px;

    box-sizing: border-box;
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

.promocode{
    width: 100%;
    display: flex;

    border: 1px solid #000;

    /* box-sizing: border-box; */
    border-radius: 5px;
}
.main__promocode__input-text{
    width: 50%;

    padding: 15px;

    font-size: 15px;
    line-height: 17px;

    border: none;

    background-color: transparent;

    box-sizing: border-box;
    
}
.main__promocode__btn{
    width: 50%;

    padding: 15px;

    font-size: 15px;
    line-height: 17px;

    background-color: rgba(240, 241, 243, 1);

    border: none;

    border-radius:  0 5px 5px 0 ;

    box-sizing: border-box;
}

.main__form__label__checkbox{
    display: flex;

    align-items: center;

    margin: 30px 0 30px 0;
}

.main__form__label__input-checkbox{
    width: 30px;
    height: 30px;

    margin: 0 15px 0 0;
}

.main-content__main-btn{
    width: 100%;
    padding: 16px 30px;

    border: none;
    border-radius: 2px;

    margin: 0 0 0 0;

    background-color: rgba(30, 30, 39, 1);

    font-family: Gilroy;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;
}
</style>