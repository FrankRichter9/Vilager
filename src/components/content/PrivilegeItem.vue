
<template>
  <li class="item">
      <img src="@/assets/contentBlock/Pic.png" alt="" class="item-img">
      <span class="item-header">Статус GUARD</span>
      <span class="item-text">Стань частичкой великого!</span>

      <button type="button" class="action">Action</button>
  </li>
</template>

<script>

export default {
    name: 'PrivilegeItem',
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