<template>
  <div class="content-block">
      <ContentNav />
      <Privilege />
  </div>
</template>

<script>
import ContentNav from '@/components/content/ContentNav'
import Privilege from '@/components/content/Privilege'

export default {
    name: '',
    components: {
        ContentNav,
        Privilege
    }
}

</script>

<style scoped>
.content-block{
    background-color: #fff;
}
</style>