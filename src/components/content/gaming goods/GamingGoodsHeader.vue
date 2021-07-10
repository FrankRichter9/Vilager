<template>
<section>
    <div class="container">
        <nav class="gaming-goods-nav">
            <ul class="gaming-goods__list">
                <li class="gaming-goods__item">
                    <button type="button" class="gaming-goods-item__btn active">Action</button>
                </li>
                <li class="gaming-goods__item">
                    <button type="button" class="gaming-goods-item__btn">Action</button>
                </li>
                <li class="gaming-goods__item">
                    <button type="button" class="gaming-goods-item__btn">Action</button>
                </li>
                <li class="gaming-goods__item">
                    <button type="button" class="gaming-goods-item__btn">Action</button>
                </li>
            </ul>
        </nav>
    </div>
</section>
  
</template>

<script>

export default {
    name: 'GamingGoodsHeader',
}

</script>

<style scoped>
.gaming-goods__list{
    list-style: none;

    display: flex;
    justify-content: start;

    flex-wrap: wrap;

    margin: 50px 0 0 13%;
}
.gaming-goods-item__btn{
    border: none;
    background-color: rgba(30, 30, 39, 0.35);

    padding: 13.5px 40px;

    cursor: pointer;

    margin: 20px 0 0 0;

    color: #fff;
}
.gaming-goods__item{
    margin: 0 1.8% 0 0;
}
.active{
    background-color: rgba(30, 30, 39, 1);
}

@media screen and (max-width: 900px) {

}
</style>