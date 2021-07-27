export default {
    state: ()=>({
        items: [],
        inLoading: true
    }),
    mutations: {
        addItems(state, data) {
            state.items = data;
        },
        endLoad(state) {
            state.inLoading = false;
        }
    },
    actions: {
        getItems({commit}) {
            const api = this;

            return this.$shopapi.getItems().then(function (items) {
                // items.map(function (item) {
                //     item["meta"].split(';').forEach(function (it) {
                //         if (it !== "") {
                //             let metaData = it.split(':');
                //             item[metaData[0]] = metaData.slice(1).join(':').trim();
                //         }
                //     });
                //     return item;
                // });
                // console.log(items)
                commit("addItems", items);
                return items

                // api.$caseapi.getAllCases().then(function (data) {
                //     commit("addCases", data);
                //     commit("addAllItems", api.$shopapi.getAllItems(items));
                //     commit("endLoad");
                // })
            });
        }
    },
    getters: {
        getItemsByType: state => elType => {
            console.log(state.items[1])
            return state.items.filter(i => i.category === elType);
        },
        getItemsById: state => Id => {
            return state.items.find(item => {
                return item.id === Id
            });
        }
    }
}