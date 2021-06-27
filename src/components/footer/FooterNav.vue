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

.footer-nav{
    
}
</style>