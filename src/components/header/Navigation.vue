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

          <li
            @click="popup.active = !popup.active;"
          >
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

      <PlayerRating
        @close="popup.active = false; document.body.style.overflowY = 'scroll';"
        v-show="popup.active"
       />
  </nav>
</template>

<script>
import PlayerRating from '@/components/header/PlayerRating'

export default {
    name: 'Navigation',
    components : {
        PlayerRating
    },
    data(){
        return {
            popup: {
                active: false,
            }
        }
    },
    
}

</script>

<style scoped>
.nav{
    height: 84px;

    background-color: #0A0A0A;
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

@media screen and (max-width: 760px) {
    .nav{
        width: 80%;
        height: 420px;
    }
    .nav__list{
        flex-direction: column;

        background-color: #0A0A0A;
        font-size: 14px;

        
    }

    /* .nav__name{
        font-size: 4.375vw;
    } */

    .nav__item{
        padding: 25px 0;
    }
}
</style>