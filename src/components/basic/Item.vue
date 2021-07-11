<template>
  <li class="main-items-list__item"
    @click="popup.active = !popup.active"
  >
        <div class="hover">верстак появится чуточку позже</div>
      
        <div class="color-square">
            <img src="@/assets/basic/items/craftingTable.png" alt="" class="item__img">
        </div>
        <span class="item__header">Верстак привилегий</span>
        <span class="item__text">
            Попытай удачу и скрафти самую топовую привилегию!
        </span>

        <BasicPopup
            v-show="popup.active"
        />
    </li>
</template>

<script>
import BasicPopup from '@/components/basic/BasicPopup'

export default {
    name: '',
    data(){
        return {
            popup: {
                active: false,
            }
        }
    },
    components: {
        BasicPopup
    }
}

</script>

<style scoped>
.main-items-list__item{
    display: block;

    width: 25%;
    height: 402px;

    cursor: pointer;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-items-list__item:hover .hover{
    opacity: 100;
}

.color-square{
    width: 151.32px;
    height: 151.32px;

    background-color: #FFA133;

    
    
    transform-origin: center;
    transform: rotate(45deg);

    /* margin: 0 auto; */
   
    margin-top: 62px;
}

.item__img{
    width: 173.22px;
    height: 173.22px;

    transform: rotate(-45deg);
    margin: -20px 0 0 -10px;
}

.item__header{
    
    display: block;
    text-align: center;

    margin: 50px 0 0 0;

    font-size: 26px;
}

.item__text{
    display: block;
    text-align: center;

    margin: 10px 0 0 0;

    font-size: 16px;
}

.item__header, .item__text{
    font-family: Gilroy-Regular;
}


.hover{
    opacity: 0;
    transition: .3s;

    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    font-family: Gilroy-Bold;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20%;
    position: absolute;
    
    height: 402px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}


@media screen and (max-width: 760px) {
    .main-items-list__item{
        width: 95%;
    }

    .hover{
        width: 60%;
    }
}
</style>