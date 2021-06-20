<template>
  <div class="container">
      <ul class="privilege-list">
          <PrivilegeItem
            v-for="i in 4"
            :key="i"
           />
      </ul>
  </div>
</template>

<script>
import PrivilegeItem from '@/components/content/PrivilegeItem'

export default {
    name: 'Privilege',
    components: {
        PrivilegeItem
    }
}

</script>

<style scoped>
    .privilege-list{
        list-style: none;

        display: flex;
        margin: 50px 0 40px 13%;
    }
</style>