<template>
  <article class="popup">
        <div class="body"
            @click="stopClick"
        >
            <div class="block-close">Закрыть</div>

            <section class="content">
           <div class="color-block">
               
                   <button type="button" class="arrow">&#9668;</button>
               
               <img src="@/assets/contentBlock/PicBig.png" alt="" class="main-img">
           </div>
           <section class="main-content">
               <div class="main-content_block">
               <span class="btn-close">&times;</span>
                <span class="main-content__status">
                    Статус IMMORTAL
                </span>

                <span class="main-content__small-status">
                    Максимальный комфорт
                </span>

                <section class="main-content__text-list castom-scroll-two"
                    :class="{close_text_list: stage === 2 }"
                    @click="stage = 1;"
                >
                    
                    <span class="text-list">
                        Skyblock <br>
                        Доступ к команде /feed <br>
                        Доступ к команде /ptime <br>
                        Доступ к передаче спавнеров /spawner transfer <br>
                        Префикс Страж перед ником <br>
                        Дополнительно 1 сердечко <br>
                        Все команды предыдущих привилегий <br>
                        5 островов стража <br>
                            <br>
                        Анархия <br>
                        Доступ к третьему привату <br>
                        Лимит 10 предметов на аукционе <br>
                        Префикс Страж перед ником <br>
                        Все команды предыдущих привилегий <br>
                            <br>
                        Тюрьма <br>
                        Множитель монет х1.08 <br>
                        Лимит 10 предметов на аукционе <br> 
                        72 дополнительных слота под артефакты <br>
                        Все возможности предыдущих привилегий <br>
                            <br>
                        Креатив <br>
                        Создание 6 варпов /warp set <br>
                        Соединение 3 участков /p merge <br>
                        Префикс Страж перед ником <br>
                        Все возможности предыдущих привилегий <br>
                            <br>
                        Skyblock <br>
                        Доступ к команде /feed <br>
                        Доступ к команде /ptime <br>
                        Доступ к передаче спавнеров /spawner transfer <br>
                        Префикс Страж перед ником <br>
                        Дополнительно 1 сердечко <br>
                        Все команды предыдущих привилегий <br>
                        5 островов стража <br>
                            <br>
                        Анархия <br>
                        Доступ к третьему привату <br>
                        Лимит 10 предметов на аукционе <br>
                        Префикс Страж перед ником <br>
                        Все команды предыдущих привилегий <br>
                            <br>
                        Тюрьма <br>
                        Множитель монет х1.08 <br>
                        Лимит 10 предметов на аукционе <br>
                        72 дополнительных слота под артефакты <br>
                        Все возможности предыдущих привилегий <br>
                            <br>
                        Креатив <br>
                        Создание 6 варпов /warp set <br>
                        Соединение 3 участков /p merge <br>
                        Префикс Страж перед ником <br>
                        Все возможности предыдущих привилегий <br>

                    </span>
                </section>

                <section class="main-content__insurance">
                    <img src="@/assets/contentBlock/totem.png" alt="" width="39px" height="39px" class="insurance-img">

                    <span class="insurance-text">Страховка привилегии</span>
                    <span class="insurance-price">+ 169 ₽</span>
                </section>

                <ul class="main-content__buttons-list">
                    <li class="buttons-list__item">
                        <button type="button" class="buttons-list__item__btn active-btn">30 дней</button>
                    </li>

                    <li class="buttons-list__item">
                        <button type="button" class="buttons-list__item__btn">90 дней</button>
                    </li>

                    <li class="buttons-list__item">
                        <button type="button" class="buttons-list__item__btn">Навсегда</button>
                    </li>
                </ul>

                <form action="" class="main__form"
                    v-show="stage === 2"
                >
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
                </form>

                <button class="main-content__main-btn"
                    @click="stage = 2;"
                >Далее (169 ₽)</button>
                </div>
                <div>
                    <button type="button" class="arrow arrow-two">&#9658;</button>
                </div>
                
           </section>
           </section>
        </div>
  </article>
</template>

<script>

export default {
    name: 'PrivilegePopup',
    data(){
        return {
            stage: 1,
        }
    },
    methods: {
        stopClick(event){
            if(document.querySelector('.btn-close').textContent !== event.target.textContent && document.querySelector('.block-close').textContent !== event.target.textContent)event.stopPropagation();
        }
    }
}

</script>

<style scoped>

.content{
    width: 100%;
}
.arrow{
    display: block;

    width: 40px;
    height: 40px;

    padding: 10px;

    font-size: 20px;
    color: #fff;

    margin: 0 60px;

    border: none;

    background-color: rgba(30, 30, 39, 0.35);

    cursor: pointer;
}
.arrow-two{
    margin: 0 60px 0 93px;
}

.main-content_block{
    margin: 0 0 0 200px;
}

.content{
    display: flex;
}

.block-close{
    display: none;
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
    width: 1160px;
    height: 723px;

    background-color: #fff;

    color: #000;
    font-family: Gilroy-Regular;

    border-radius: 2px;

    display: flex;
}

.color-block{
    width: 32.76%;
    height: 723px;

    background-color: rgba(255, 85, 85, 1);

    display: flex;
    align-items: center;

    
}

.main-img{
    margin: 0 0 0 20px;
}

.main-content{
    width: calc(100%-32.76%);
}

.main-content__text-list{
    width: 380px;
    height: 330px;

    overflow-y: scroll;
}

.main-content{
    width: 360px;


    display: flex;
    align-items: center;
}

.main-content__status{
    display: block;

    font-family: Gilroy-Bold;
    font-size: 34px;
    line-height: 41px;

    margin: 10px 0 10px 0;
}

.main-content__small-status{
    display: block;

    font-family: Gilroy;
    font-size: 18px;
    line-height: 21px;

    margin: 0 0 40px 0;
}

.text-list{
    font-family: Gilroy;
    font-size: 14px;
    line-height: 22px;
}

.main-content__insurance{
    margin: 30px 0 30px 0;

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


.main-content__buttons-list{
    list-style: none;

    display: flex;
    justify-content: space-between;
}

.buttons-list__item__btn{
    border: none;

    padding: 14px 30px;
    
    background-color: rgba(30, 30, 39, 0.35);

    color: #fff;

    border-radius: 2px;

    cursor: pointer;
}

.active-btn{
    background-color: rgba(30, 30, 39, 1);
}

.main-content__main-btn{
    width: 100%;
    padding: 14px 30px;

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





.btn-close{
    float: right;

    font-size: 50px;

    margin: -30px -180px 0 0;

    cursor: pointer;
}

.close_text_list{
    height: 78px;

    cursor: pointer;
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
    padding: 10px;

    width: calc(100% - 20px);

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

.promocode{
    width: 100%;
    display: flex;

    border: 1px solid #000;

    /* box-sizing: border-box; */
}
.main__promocode__input-text{
    width: 50%;

    padding: 10px;

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



@media screen and (max-width: 1200px) {
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
        width: 100%;

        display: flex;

        flex-direction: column;
    }

    .content{
        display: flex;

        flex-direction: column;
    }

    .main-img{
        width: 180px;

        margin: 0 auto;

        margin-top: 50px;
    }

    .color-block{
        width: 100%;
        height: 174px;
    }

    .main-content{
        width: 100%;

        padding: 0;
    }

    .body{
        height: 100vh;
        overflow-y: scroll;

    }

    .popup{
        align-items: flex-start;
    }

    .btn-close{
        display: none;
    }
    
    

    .main-content__status{
        margin: 50px 0 0 0;
        margin-left: 10px;
    }
    .main-content__small-status{
        margin-left: 10px;
    }

    .main-content_block{
        margin: 0 auto;
    }

    .main-content__text-list{
        width: 96%;
        margin-left: 10px;
    }

    .main-content__main-btn{
        width: 95%;

        margin: 30px auto;
        margin-left: 10px;
    }

    .buttons-list__item__btn{
        width: 100%;
        
    }

    .main-content__buttons-list{
        width: 95%;
        margin: 0 0 0 10px;

    }

    .buttons-list__item{
        width: 32%;
    }

    .buttons-list__item__btn{
        padding: 14px 10px;
    }

    .insurance-text{
        font-size: 14px;
    }

    .main-content__insurance{
        width: 95%;
        margin-left: 10px;
    }

    .main__form{
        width: 95%;
        margin: 0 0 0 10px;
    }

    .arrow{
        display: none;
    }

    .main-content__text-list{

    }
}
</style>