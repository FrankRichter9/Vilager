export default {
    state:()=>({
        showmodal: false,
        itemid: 0,
        modaltype: "",
        purchases: []
    }),
    mutations: {
        showBuyModal: function (state, payload) {
            state.itemid = payload.id;
            state.modaltype = "buy";
            state.showmodal = true;
        },
        showInfoModal: function (state, payload) {
            state.modaltype = payload;
            state.showmodal = true;
        },
        closeModal: function (state) {
            state.showmodal = false;
        },
        setPurchases: function (state, payload) {
            state.purchases = payload;
        },
        testSetPurchases: function (state) {
            state.purchases = ["ddd-ttt",
                "pidoras:govno",
                "1234-1234"];
        }
    },
    actions: {
        getPurchases({commit}, orderId) {
            this.$shopapi.checkLastPurchases(orderId).then(data => commit("setPurchases", data.values));
        }
    },
    getters:{

    }
}