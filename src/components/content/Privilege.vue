<template>
    <article class="content-block">
        <div class="container">
            <ul class="privilege-list castom-scroll">
                <PrivilegeItem
                    v-for="item in getItemsByType('privilege')"
                    :key="item.id"
                    :item="item"
                />
            </ul>
        </div>

        <img src="@/assets/contentBlock/transition.png" alt="" class="transition">
    </article>
</template>

<script>
import PrivilegeItem from '@/components/content/privilege/PrivilegeItem'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Privilege',
    data(){
        return {
            items: []
        }
    },
    components: {
        PrivilegeItem
    },
    methods: {
        ...mapActions([
            'getItems'
            ]),
    },
    mounted(){
        this.getItems()
    },
    computed: {
        ...mapGetters([
            'getItemsByType'
        ])
    },
}

</script>

<style scoped>
    .transition{
        display: block;
        width: 100%;
        padding: 40px 0 0 0;
    }

    


    .privilege-list{
        list-style: none;

        display: flex;
        margin: 50px 0 40px 13%;

        max-width: 1100px;

        padding: 0 0 17px 0;
        overflow-x: scroll;
    }


    .privilege-list li:last-child {
        margin: 0;
    }

@media screen and (max-width: 1024px) {
    .privilege-list{
        margin: 50px 0 40px 5%;
    }
}
</style>