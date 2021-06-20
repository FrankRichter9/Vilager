export default {
    state: {
        products: []
    },
    mutations: {
        updateProducts(state, products){
            state.products = products
        }
    },
    actions: {
        async fetchProducts(ctx){
            const res = await fetch('https://api.zakvielshop.ru/api/productGroups')
            const products = await res.json()
            ctx.commit('updateProducts', products)


            console.log(products)
        }
    },
    getters: {
        allProducts(state){
            return state.products
        }
    }
}