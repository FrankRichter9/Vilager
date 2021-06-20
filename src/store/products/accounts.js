export default {
    state: {
        accounts: [],
        mainAccounts: []
    },
    mutations: {
        updateMainAccounts(state, mainAccounts){
            state.mainAccounts = mainAccounts
        }
    },
    actions: {
        async fetchMainAccounts(ctx){
            const res = await fetch('https://api.zakvielshop.ru/api/productGroups')
            const fullList = await res.json()
            const mainAccounts = []
            fullList.forEach(element => {
                if(element.products[0].category === "account")
                mainAccounts.push(element.products[0])
            });
            ctx.commit('updateMainAccounts', mainAccounts)


            // console.log(accounts)
        }
    },
    getters: {
        allAccounts(state){
            return state.accounts
        },
        mainAccounts(state, n = 4){
            let k = 0
            const mainAccounts = []
            
            while( k < 4 ){
                
                mainAccounts.push(state.mainAccounts[k])
                // console.log(state.accounts[k])
                k++;
            }
            console.log(mainAccounts, k)
            return mainAccounts
        }
    }
}