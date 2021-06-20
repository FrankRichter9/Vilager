<template>
  <div>
    <Header />
    <main>
      <BasicContent />
      <ContentBlock />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import BasicContent from '@/components/BasicContent'
import ContentBlock from '@/components/ContentBlock'


export default {
  data(){
    return {

    }
  },


  name: 'Home',
  components: {
    Header,
    BasicContent,
    ContentBlock
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
