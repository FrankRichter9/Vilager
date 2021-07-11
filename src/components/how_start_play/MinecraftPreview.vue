<template>
  <article class="minecraft-preview">
      <div class="container">
        <section class="minecraft-window">
          <span class="minecraft-window__text">
            Играйте в BedWars, SkyWars, Murder Mystery и многие <br>
             другие уникальные мини-игры Minecraft на Village <br>
              Server, все, что вам нужно сделать, это войти в систему
          </span>

         
            <ol class="minecraft-window__text minecraft-window__list">
              <li class="minecraft-window__list__item">
                В Майнкрафте зайдите в <span class="excretion">Сетевая игра</span> , <br>
             затем <span class="excretion">Добавить сервер</span> <br>
              </li>
              <li class="minecraft-window__list__item">
                Введите <span class="excretion">play.villagemc.net</span>  и нажмите <br>
                <span class="excretion">Готово</span>
              </li>
            </ol>

          <label for="" class="minecraft-window__text">
            Server Addres
            <input type="text" class="minecraft-window__input" disabled>
          </label>

          <button type="button" class="minecraft-window__btn" disabled>Готово</button>
        </section>
      

      <section class="mobile-block">
        <section class="mobile-block__btns">
          <ul class="mobile-block__btns-list">
            <li class="mobile-block__btns-list__item">
              <button type="button" class="mobile-block__btns-list__item__btn  mobile-block__btns-list__item__btn-active">
                  Action
              </button>
            </li>
            <li class="mobile-block__btns-list__item">
              <button type="button" class="mobile-block__btns-list__item__btn">
                  Action
              </button>
            </li>
            <li class="mobile-block__btns-list__item">
              <button type="button" class="mobile-block__btns-list__item__btn">
                  Action
              </button>
            </li>
            <li class="mobile-block__btns-list__item">
              <button type="button" class="mobile-block__btns-list__item__btn">
                  Action
              </button>
            </li>
          </ul>
        </section>

        <section class="mobile-block__img-block">
          <img src="" alt="" width="300px" height="190px" class="mobile-block__img-block__img">
        </section>
      </section>

      </div>

      <img src="@/assets/basic/transition.png" alt="" class="transition">
      <img src="@/assets/contentBlock/transition.png" alt="" class="transition transition-mobile">
  </article>
</template>

<script>

export default {
    name: 'MinecraftPreview',
}

</script>

<style scoped>

.mobile-block{
  display: none;
}
.container{
  display: flex;

  flex-direction: column;
}

.transition{
    display: block;

    width: 100%;

    padding: 55px 0 0 0;
}

.minecraft-window{
  width: 65%;
  /* height: 431px; */

  background-color: #0f0;

  box-sizing: border-box;
  border: 4px solid #000000;

  margin: 0 auto;

  background: url("../../assets/how_start_play/minecraft-BG.png");

  font-family: Minecraft;
  font-size: 15px;
  line-height: 24px;

  padding: 10px 0 0 0;
}
.minecraft-window__text{
  margin: 25px 0 0 60px;
  display: block;

}

.excretion{
  color: #FFC20E;
}
.minecraft-preview{
  margin: 120px 0 0 0;
  padding: 50px 0 0 0;

  background: url("../../assets/politics/BG.png");
}

.minecraft-window__input{
  display: block;

  width: 370px;
  height: 36px;

  margin: 10px 0 0 0;

  box-sizing: border-box;
  background: #000000;
  border: 1px solid #FFFFFF;
}

.minecraft-window__btn{
  display: block;

  margin: 25px 0 25px 60px;

  width: 370px;
  background: url("../../assets/how_start_play/mc-button.png");

  font-family: Minecraft;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  
  padding: 5px 0;

  cursor: pointer;
}
.minecraft-window__list{
  margin: 25px 0 0 120px;
}

.transition-mobile{
  display: none;
}




.mobile-block{
  margin: 80px auto 0 auto;

  width: 90%;
}

.mobile-block__btns-list{
  list-style: none;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
}

.mobile-block__btns-list__item__btn{
  padding: 13.5px 30px;

  background-color: #2A2E2C;

  margin: 10px 20px;

  color: #fff;
  font-family: Gilroy-Regular;

  border: none;

}

.mobile-block__btns-list__item__btn-active{
  background-color: #1E1E27;
}

.mobile-block__img-block{
  margin: 40px 0 20px 0;

  display: flex;
  justify-content: center;
}

/* .mobile-block__img-block__img{
  width: 90%;
  display: block;

  margin: 0 auto;
} */










@media screen and (max-width: 1220px) {
  .transition{
      display: none;
  }
  .transition-mobile{
      padding-top: 80px;
      display: block;
  }

  .mobile-block{
      display: block;
    }
}

@media screen and (max-width: 900px) {
  .minecraft-window{
    width: 90%;
    /* height: 431px; */
  }

  .minecraft-window__btn, .minecraft-window__input{
    width: 250px;
  }
}

@media screen and (max-width: 900px) {
  .minecraft-window{
    font-size: 11px;
    line-height: 16px;
  }


  
}
@media screen and (max-width: 760px) {
  .minecraft-preview{
    margin-top: 50px;
  }
  
}
@media screen and (max-width: 550px) {
    .minecraft-window__text{
      margin: 10px 0 0 30px;
    }

    .minecraft-window__btn, .minecraft-window__text{
      margin-left: 15px;
    }

    .minecraft-window__list{
      display: block;
      margin-left: 45px;
    }

    
    
  }

</style>