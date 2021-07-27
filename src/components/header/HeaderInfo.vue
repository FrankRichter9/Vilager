<template>
    <article class="full-info">
        <div class="container header__info">
        <div class="other__projects">
            <span class="other__projects-header">Другие проекты:</span>
            <a href="#">Скрафтиголову.store</a>
            <a href="#">Магазин аккаунтов</a>
        </div>

        <div class="online__VillageMC">
            <span>На сервере VillageMC: <span class="counter__player">324 игрока</span></span>
        </div>
        </div>
    </article>
</template>

<script>

export default {
    name: 'HeaderInfo',
}

</script>

<style scoped>
.full-info{
    display: block;
    background-color: #0A0A0A;
}
.header__info{
    font-family: VictorMono-Regular;
    

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 40px;
}

.other__projects{
    width: 40%;
}
.online__VillageMC{
    width: 40%;
    text-align: right;
}



.other__projects a{
    text-decoration: none;
    color: #fff;
    margin: 0 0 0 5%;
}

.counter__player{
    color: #0f0;
}

@media screen and (max-width: 1240px) {
    .header__info{
        flex-direction: column;
        justify-content: center;
    }
    .other__projects{
        width: 90%;
        text-align: center;
    }
    .online__VillageMC{
        text-align: center;
    }
}

@media screen and (max-width: 760px) {
    .header__info{
        flex-direction: row;
        justify-content: start;
    }

    .other__projects{
        display: none;
    }
    .online__VillageMC{
        text-align: left;
        margin: 40px 3.208333333333333%;
    }

    .full-info{
        width: 80%;
        
    }

    .header__info{
        background-color: #0A0A0A;
    }

    .online__VillageMC{
        width: 80%;
        /* margin: 40px 0 35px 0; */
    }

    .header__info{
        justify-content: start;
    }
}
</style>