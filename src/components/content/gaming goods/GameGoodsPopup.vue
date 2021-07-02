<template>
  <article class="popup"
    @click="$emit('close')"
  >
        <div class="body"
            @click="stopClick"
        >
            <span class="btn-close">&times;</span>
            <hr class="line">
        
            
           
            <section class="flex">
               <section class="main-text-block">
                   <span class="main-text-block__text">
                       Купить 5 ключей для обычного сундука на скайблоке.
                        <br><br>
                        Открыть кейсы вы можете на спавне любого из серверов Скайблока. Сундук содержит случайную награду - блок или предмет
                   </span>
               </section>

               <section class="main-form">
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

                    <section class="main__form__counter">
                        <button type="button" class="main__form__counter__btn">-</button>
                        <span class="main__form__counter__output">1</span>
                        <button type="button" class="main__form__counter__btn">+</button>
                    </section>

                    <label for="" class="main__form__label main__form__label__checkbox">
                        <input type="checkbox" class="main__form__label__input-checkbox">
                        <span class="main__form__label__heading-checkbox">
                            Я согласен с условиями <a href="#">пользовательского <br> соглашения</a>
                            </span>
                    </label>

                     <button type="button" class="main-content__main-btn">Action</button>
                </form>
               </section>
            </section>

               

                

                

               
                
               
                
           
        </div>
  </article>
</template>

<script>

export default {
    name: 'GameGoodsPopup',
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
    width: 898px;
    height: 585px;

    background-color: #fff;

    color: #000;
    font-family: Gilroy-Regular;

    border-radius: 2px;
}


.line{
    background-color: rgba(196, 196, 196, 1);
    margin: 94px auto 30px auto;

    width: 90%;
    
}

.flex{
    display: flex;

}

.main-text-block{
    width: 45%;
    height: 400px;

    background-color: rgba(233, 247, 255, 1);

    margin: 0 0 0 4.5%;

    box-sizing: border-box;
    padding: 10px;

    font-family: Gilroy-Regular;
    font-size: 16px;
    line-height: 19px;
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
    box-sizing: border-box;
    padding: 12px;

    width: 100%;

    font-size: 15px;
    line-height: 17px;

    margin: 0 0 20px 0;
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



.promocode{
    width: 100%;
    display: flex;


    border: 1px solid #000;

    box-sizing: border-box;
}
.main__promocode__input-text{
    box-sizing: border-box;
    width: 50%;

    padding: 12px;

    font-size: 15px;
    line-height: 17px;

    border: none;
}
.main__promocode__btn{
    box-sizing: border-box;
    width: 50%;

    padding: 15px;

    font-family: Gilroy-Regular;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: #1E1E27;

    background-color: rgba(240, 241, 243, 1);

    border: none;

    cursor: pointer;
}

.main__form__label__input-text{
    font-size: 15px;
    line-height: 17px;
}

.main-form{
    width: 55%;

    box-sizing: border-box;
    padding: 0 40px;
}

.main__form__counter{
    width: 100%;
    height: 54px;

    margin: 32px 0 30px 0;

    background-color: rgba(30, 30, 39, 1);

    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main__form__counter__btn{
    width: 25%;
    height: 54px;

    color: #fff;

    background-color: rgba(30, 30, 39, 1);

    border: none;

    font-family: Gilroy-Regular;
    font-size: 30px;

    cursor: pointer;
}

.main__form__label__checkbox{
    display: flex;

    align-items: center;
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

    margin: 30px 0 0 0;

    background-color: rgba(37, 195, 11, 1);

    font-family: Gilroy;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;
}
</style>