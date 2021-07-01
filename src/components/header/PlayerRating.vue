<template>
  <article class="popup"
    @click="$emit('close')"
  >
        <div class="body"
            @click="stopClick"
        >
        <span class="btn-close">&times;</span>
            <span class="heading">Рейтинг игроков</span>

            <section class="slider">
                <button class="slider__arrow slider__arrow-1">&#9668;</button>

                <span class="slider__text">
                    Кол-во убийств (BedWars)
                </span>

                <button class="slider__arrow slider__arrow-2">&#9658;</button>
            </section>

            <section class="table-head">
                <table class="main-table">
                    <thead>
                        <tr class="main-table__header-row">
                            <td class="main-table__header-item">Место</td>
                            <td class="main-table__header-item">Никнейм</td>
                            <td class="main-table__header-item">Кол-во убийств</td>
                        </tr>
                    </thead>
                    <section class="scroll castom-scroll-two">
                
                    <tbody class="main-table__body">
                        <tr
                            v-for="item in players"
                            :key="item.id"
                            class="main-table__row"
                        >
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kills}}</td>
                        </tr>
                    </tbody>
                
            </section>
                </table>

            </section>
            
        </div>
  </article>
</template>

<script>

export default {
    name: 'PlayerRating',
    data(){
        return {
            players: [
                {id: "1", name: "Gadzila1", kills: "1234"},
                {id: "2", name: "Gadzila1", kills: "1223"},
                {id: "3", name: "Gadzila1", kills: "1211"},
                {id: "4", name: "Gadzila1", kills: "1132"},
                {id: "5", name: "Gadzila1", kills: "1034"},
                {id: "6", name: "Gadzila1", kills: "954"},
                {id: "7", name: "Gadzila1", kills: "832"},
                {id: "8", name: "Gadzila1", kills: "754"},
                {id: "9", name: "Gadzila1", kills: "523"},
                {id: "10", name: "Gadzila1", kills: "12"},
                {id: "1", name: "Gadzila1", kills: "1234"},
                {id: "2", name: "Gadzila1", kills: "1223"},
                {id: "3", name: "Gadzila1", kills: "1211"},
                {id: "4", name: "Gadzila1", kills: "1132"},
                {id: "5", name: "Gadzila1", kills: "1034"},
                {id: "6", name: "Gadzila1", kills: "954"},
                {id: "7", name: "Gadzila1", kills: "832"},
                {id: "8", name: "Gadzila1", kills: "754"},
                {id: "9", name: "Gadzila1", kills: "523"},
                {id: "10", name: "Gadzila1", kills: "12"},
                {id: "1", name: "Gadzila1", kills: "1234"},
                {id: "2", name: "Gadzila1", kills: "1223"},
                {id: "3", name: "Gadzila1", kills: "1211"},
                {id: "4", name: "Gadzila1", kills: "1132"},
                {id: "5", name: "Gadzila1", kills: "1034"},
                {id: "6", name: "Gadzila1", kills: "954"},
                {id: "7", name: "Gadzila1", kills: "832"},
                {id: "8", name: "Gadzila1", kills: "754"},
                {id: "9", name: "Gadzila1", kills: "523"},
                {id: "10", name: "Gadzila1", kills: "12"},
            ],
        }
    },
    methods: {
        stopClick(event){
            if(document.querySelector('.btn-close').textContent !== event.target.textContent)event.stopPropagation();
        }
    }
}

</script>

<style scoped>

.btn-close{
    display: block;
    padding: 10px;
    float: right;

    font-size: 50px;
    
    margin: -20px 0 0 -10px;
    cursor: pointer;
}

.scroll{
    height: 400px;
    overflow-y: scroll;

    margin: 10px 0 0 0;
}

.popup{
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(10, 10, 10, 0.85);
}

.body{
    /* max-width: 760px; */
    width: 760px;
    height: 700px;

    background: url("../../assets/header/popup/bg.png");

    color: #000;
    font-family: Gilroy-Regular;

    border-radius: 2px;
}


.heading{
    display: block;
    width: 50%;
    margin: 30px auto 41px auto;

    text-align: center;

    font-family: VictorMono-Bold;
    font-weight: bold;
    font-size: 28px;
    line-height: 39px;
}

.slider__arrow{
    width: 40px;
    height: 40px;

    color: #fff;

    background-color: rgba(9, 9, 105, 0.35);

    font-size: 25px;

    border: none;
}
.slider{
    display: flex;
    flex-direction: row;

    margin: 0 0 50px 0;
}
.slider__arrow-1{
    margin: 0 7.9% 0 26.3%;

    /* margin: 0 60px 0 200px; */
}

.slider__arrow-2{
    margin: 0 26.3% 0 7.9%;

    /* margin: 0 200px 0 60px; */
}

.slider__text{
    display: block;
    width: 160px;

    text-align: center;
}

.main-table{
    width: 560px;

    margin: 0 auto;

    text-align: center;
}

.main-table__header-row{
    font-family: VictorMono-Bold;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;

    text-align: center;
}

.main-table__row{
    padding: 12px 0;

    font-family: Gilroy-Regular;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    text-align: center;
}

.main-table__body{
    display: block;
    width: 100%;
    height: 400px;

    
}
.main-table tr, .main-table__body tr{
    display: flex;

}

.main-table__header-row  td:first-child, .main-table__body td:first-child{
    display: block;

    width: 10.71428571428571%;
    margin: 0 7.142857142857143% 0 0;
} 

.main-table__header-row  td:nth-child(2), .main-table__body td:nth-child(2){
    display: block;

    width: 35.714285714285719%;
    margin: 0 17.85714285714286% 0 0;
} 
.main-table__header-row  td:nth-child(3){
    display: block;

    width: 28.57142857142857%;
    margin: 0 6.678571428571429% 0 0;
} 

.main-table__body tr td:nth-child(3){
    display: block;
    width: 28.57142857142857%;
}

.main-table__body tr:nth-child(1){
    background: linear-gradient(270deg, rgba(253, 238, 255, 0.25) 0%, #FDEEFF 52.6%, rgba(253, 238, 255, 0.25) 100%);
}

.main-table__body tr:nth-child(n+2){
    background: linear-gradient(270deg, rgba(255, 218, 203, 0.25) 0%, #FFE6DC 52.6%, rgba(255, 218, 203, 0.25) 100%);
}
.main-table__body tr:nth-child(n+6){
    background: linear-gradient(270deg, rgba(250, 255, 220, 0.25) 0%, #FAFFDC 50%, rgba(250, 255, 220, 0.25) 100%);
}








.castom-scroll-two::-webkit-scrollbar {
    border-color: #FDF8EB;
        
    }
    .castom-scroll-two::-webkit-scrollbar-track-piece{
    border-color: #FDF8EB;
            
    }

    .castom-scroll-two::-webkit-scrollbar-thumb{
       border-color: #FDF8EB;
    }
</style>