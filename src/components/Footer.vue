<template>
  <footer class="main-footer">

      <div class="container">
          <FooterNav />
          <FooterInfo />
      </div>
  </footer>
</template>

<script>
import FooterNav from '@/components/footer/FooterNav'
import FooterInfo from '@/components/footer/FooterInfo'

export default {
    name: 'Footer',
    components: {
        FooterNav,
        FooterInfo
    }
}

</script>

<style scoped>


.main-footer{
    background-color: rgba(20, 20, 20, 1);
    height: 140px;
}
    
@media screen and (max-width: 760px) {
    .main-footer{
        height: 380px;
    }
}
</style>