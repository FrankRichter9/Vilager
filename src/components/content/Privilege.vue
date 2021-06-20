<template>
  <div class="container">
      <ul class="privilege-list">
          <PrivilegeItem
            v-for="i in 8"
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

        max-width: 1100px;

        padding: 0 0 37px 0;
        overflow-x: scroll;
    }

    .privilege-list::-webkit-scrollbar {
        height: 41px;
        width: 200px;
        border-top: 20px solid #fff;
        border-bottom: 20px solid #fff;
        background-color: #1E1E27;
        
    }
    .privilege-list::-webkit-scrollbar-track-piece{
        height: 5px;
        
    }

    .privilege-list::-webkit-scrollbar-thumb{
        background-color: #1E1E27;
        height: 5px;
        border-top: 18px solid #fff;
        border-bottom: 18px solid #fff;
        border-radius: 2px;
    }

    

    .privilege-list::-webkit-scrollbar-button:horizontal:end:decrement{
        /* border-width: 7px 14px 7px 0; */
        border-style: solid;
        height: 50px;
        width: 50px;
        background-color: #fff;
        display: block;
        background-size: 24px;
        background-repeat: no-repeat;

        background-position: center 4px;
        background-image: url("../../assets/contentBlock/scroll/Left.svg");
    }
    

    .privilege-list::-webkit-scrollbar-button:horizontal:end:increment{
        /* border-width: 7px 0 7px 14px; */
        border-style: solid;
        height: 50px;
        width: 50px;
        
        background-color: #fff;
        display: block;
        background-size: 24px;
        background-repeat: no-repeat;

        background-position: center 4px;
        background-image: url("../../assets/contentBlock/scroll/Right.svg");
    }

    .privilege-list::-webkit-scrollbar-button:horizontal:startd:decrement{
        width: 0;
        padding: 10px;
        color:red;

        transform: rotate(45deg);
    }

    .privilege-list::-webkit-scrollbar-button:horizontal:start:increment{
        width: 0;
        height: 0;
        /* border-width: 7px 0 7px 14px; */
        color:blue;
    }
</style>