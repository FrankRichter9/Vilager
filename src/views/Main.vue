<template>
  <div>
    <Header />
    <main>
      <BasicContent />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import BasicContent from '@/components/BasicContent'


export default {
  data(){
    return {

    }
  },


  name: 'Home',
  components: {
    Header,
    BasicContent
  },
  methods: {
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
