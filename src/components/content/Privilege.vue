<template>
    <article class="content-block">
        <div class="container">
            <ul class="privilege-list castom-scroll">
                <PrivilegeItem
                    v-for="i in 8"
                    :key="i"
                />
            </ul>
        </div>

        <img src="@/assets/contentBlock/transition.png" alt="" class="transition">
    </article>
</template>

<script>
import PrivilegeItem from '@/components/content/privilege/PrivilegeItem'

export default {
    name: 'Privilege',
    components: {
        PrivilegeItem
    }
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