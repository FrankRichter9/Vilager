<template>
  <header class="main-header">
      <HeaderInfo />
      <Navigation />
  </header>
</template>

<script>
import HeaderInfo from '@/components/header/HeaderInfo'
import Navigation from '@/components/header/Navigation'

export default {
    name: '',
    components: {
      HeaderInfo,
      Navigation
    }
}

</script>

<style scoped>
.main-header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>