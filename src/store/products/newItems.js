export default {
    state: {
        newItems: []
    },
    mutations: {
        updateProducts(state, newItems){
            state.newItems = newItems
        }
    },
    actions: {
        async fetchNewItems(ctx){
            const res = await fetch('https://api.zakvielshop.ru/api/productGroups')
            const products = await res.json()
            ctx.commit('updateProducts', newItems)


            console.log(newItems)
        }
    },
    getters: {
        allNewItems(state){
            return state.newItems
        }
    }
}