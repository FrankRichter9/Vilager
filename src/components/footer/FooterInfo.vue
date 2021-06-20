<template>
  <section class="footer-info">
      <ul class="footer-info__list">
          <li class="footer-list__item">ИП Данильцев Михаил Александрович</li>
          <li class="footer-list__item">ОГРНИП 319774600661880, ИНН 772148129606, Москва</li>
          <li class="footer-list__item">© 2021 DivineEmpire Inc.</li>
      </ul>
  </section>
</template>

<script>

export default {
    name: 'FooterInfo',
}

</script>

<style scoped>
.footer-info__list{
    list-style: none;

    display: flex;
    justify-content: center;

    font-family: VictorMono-Medium;
    font-size: 14px;

    margin: 20px 0 0 0;
}

.footer-list__item{
    margin: 0 1.8%;
}
</style>