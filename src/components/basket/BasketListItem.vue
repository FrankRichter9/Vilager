<template>
  <li class="items-list__item">
        <img src="@/assets/basket/items/one.png" alt="" width="60px" height="60px" class="items-list__item__img">

        <span class="items-list__item__name">
            25 игровых - косметических ключей
        </span>

        <section class="items-list__item__counter">
            <button type="button" class="main__form__counter__btn">-</button>
            <span class="main__form__counter__output">1</span>
            <button type="button" class="main__form__counter__btn">+</button>
        </section>

        <span class="items-list__item__btn-close">&times;</span>
    </li>
</template>

<script>

export default {
    name: 'BasketListItem',
}

</script>

<style scoped>
.items-list__item{
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 111px;

    background-color: rgba(252, 224, 126, 1);
    margin: 0 0 2px 0;
}
.items-list__item__img{
    margin: 0 0 0 7.678571428571429%;

    background-color: #FEEFBF;
}
.items-list__item__name{
    width: 37.09090909090909%;
}


.items-list__item__counter{
    width: 25.45454545454545%;
    height: 40px;

    margin: 32px 0 30px 0;

    background-color: rgba(30, 30, 39, 1);

    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main__form__counter__btn{
    width: 25%;
    height: 40px;

    color: #fff;

    background-color: rgba(30, 30, 39, 1);

    border: none;

    font-family: Gilroy-Regular;
    font-size: 20px;

    cursor: pointer;
}

.items-list__item__btn-close{
    font-size: 30px;

    margin: 0 5% 0 5%;
    font-weight: 600;
}
</style>