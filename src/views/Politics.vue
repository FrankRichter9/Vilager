<template>
  <div>
    <Header />
    <main>
      <PrivacyPolicy />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export default {
  data(){
    return {

    }
  },


  name: 'Politics',
  components: {
    Header,
    Footer,
    PrivacyPolicy
  },
  methods: {
    
  }
}
</script>

<style>

</style>
