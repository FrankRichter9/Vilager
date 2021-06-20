<template>
  <div>
    <Header />
    <main>
      <BasicContent />
      <ContentBlock />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import BasicContent from '@/components/BasicContent'
import ContentBlock from '@/components/ContentBlock'
import Footer from '@/components/Footer'


export default {
  data(){
    return {

    }
  },


  name: 'Home',
  components: {
    Header,
    BasicContent,
    ContentBlock,
    Footer
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
