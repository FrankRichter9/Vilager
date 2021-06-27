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
      </div>

      <img src="@/assets/basic/transition.png" alt="" class="transition">
  </article>
</template>

<script>

export default {
    name: 'MinecraftPreview',
}

</script>

<style scoped>
.transition{
    display: block;

    width: 100%;

    padding: 55px 0 0 0;
}

.minecraft-window{
  width: 960px;
  height: 431px;

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

  margin: 25px 0 0 60px;

  width: 398px;
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
</style>