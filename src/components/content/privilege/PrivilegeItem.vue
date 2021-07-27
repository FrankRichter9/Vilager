
<template>
  <li class="item"
    @click="popup.active = !popup.active"
  >
      <img :src="item.imgLink" alt="" class="item-img" width="155px" height="155px">
      <span class="item-header">{{item.displayName}}</span>
      <span class="item-text">Стань частичкой великого!</span>

      <button type="button" class="action">Action</button>

      <PrivilegePopup 
        v-show="popup.active"
        :item="item"
      />
  </li>
</template>

<script>
import PrivilegePopup from '@/components/content/privilege/PrivilegePopup'

export default {
    name: 'PrivilegeItem',
    data(){
        return {
            popup: {
                active: false,
            }
        }
    },
    components: {
        PrivilegePopup
    },
    props: ['item']
}

</script>

<style scoped>
    .item{
        

        width: 275px;
        height: 331px;
        background-color: #00C149;

        margin: 0 2.08% 0 0;

    }
    
    .item-img, .item-header, .item-text, .action{
        display: block;
        margin: 0 auto;
    }
    .item-img{
        margin-top: 10px;
    }

    .item-header, .item-text{
        text-align: center;
    }

    .item-header{
        margin-top: 20px;

        font-family: Gilroy-Bold;
        font-size: 22px;
    }

    .item-text{
        margin-top: 5px;

        font-family: Gilroy-Regular;
        font-size: 16px;
    }

    .action{
        margin-top: 30px;

        border: none;

        background: rgba(255, 255, 255, 0.25);
        border-radius: 4px;
        transition: .3s;

        cursor: pointer;

        padding: 13px 85px;

        color: #fff;

        border-radius: 4px;
    }

    .action:hover {
        background: rgba(255, 255, 255, 0.5);
    }
</style>