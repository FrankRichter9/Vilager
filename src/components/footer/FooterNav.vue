<template>
  <nav class="footer-nav">
      <ul class="footer-nav__list">
          <li class="footer-list__item">
              <router-link to="/politics">Политика конфиденциальности</router-link>
              <a href=""></a>
          </li>

          <li class="footer-list__item">
              <a href="">Пользовательское соглашение</a>
          </li>
      </ul>
  </nav>
</template>

<script>

export default {
    name: 'FooterNav',
}

</script>

<style scoped>
.footer-list__item a{
    text-decoration: none;
    color: #fff;

    font-family: VictorMono-Medium;
    font-size: 16px;
}

.footer-list__item{
    margin: 0 1.8%;
}
.footer-nav__list{
    list-style: none;

    display: flex;
    justify-content: center;

    padding: 40px 0 0 0;
}



@media screen and (max-width: 760px) {
    .footer-nav__list{
        flex-direction: column;

        margin: 0 0 0 5%;
    }
    .footer-list__item{
        margin: 0;
    }
    .footer-list__item:first-child{
        margin: 60px 0 15px 0;
    }
}
</style>