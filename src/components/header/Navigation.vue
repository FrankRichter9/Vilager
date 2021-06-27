<template>
  <nav class="nav">
      <div class="container">
      <ul class="nav__list">
          <li>
              
              <router-link to="" class="nav__href">
                <div class="nav__item">
                    <img src="@/assets/header/navigation/Main.png" alt="" class="nav__img">
                    <span class="nav__name">Магазин</span>
                </div>
              </router-link>
          </li>

          <li>
              <router-link to="/HowStartToPlay" class="nav__href">
                <div class="nav__item">
                    <img src="@/assets/header/navigation/HowStartPlay.png" alt="" class="nav__img">
                    <span class="nav__name">Как начать играть?</span>
                </div>
              </router-link>
          </li>

          <li>
              <router-link to="" class="nav__href">
                <div class="nav__item">
                    <img src="@/assets/header/navigation/TopPlayers.png" alt="" class="nav__img">
                    <span class="nav__name">Топ игроков</span>
                </div>
              </router-link>
          </li>

          <li>
              <router-link to="" class="nav__href">
                <div class="nav__item">
                    <img src="@/assets/header/navigation/VK.png" alt="" class="nav__img">
                    <span class="nav__name">Вконтакте</span>
                </div>
              </router-link>
          </li>
      </ul>
      </div>
  </nav>
</template>

<script>

export default {
    name: 'Navigation',
}

</script>

<style scoped>
.nav{
    height: 84px;

    background-color: #141414;
}

.nav__href{
    text-decoration: none;
    color: #fff;
}

.nav__list{
    list-style: none;

    box-sizing: border-box;
    padding: 17px 0;

    display: flex;
    justify-content: center;
    align-content: center;
}

.nav__list li{
    margin: 0 3.208333333333333%;
}
.nav__name{
    font-family: Gilroy-Regular;

    display: block;
    text-transform: uppercase;

    align-self: center;

    margin: 0 0 0 18px;

    font-size: 14px;
}

.nav__img{
    display: block;

    align-self: center;
}

.nav__item{
    height: 48px;

    display: flex;
    align-items: center;
}
</style>