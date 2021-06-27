<template>
  <div>
    <Header />
    <main>
        <StartPlay />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StartPlay from '@/components/StartPlay'

export default {
  data(){
    return {

    }
  },


  name: 'HowStartPlay',
  components: {
    Header,
    Footer,
    StartPlay,
  },
  methods: {
    
  }
}
</script>

<style>
.white{
    height: 500px;
}
</style>
