export default {
    state: () => ({
        paymentData: {
            player: {
                username: "",
                email: ""
            },
            products: [
                {
                    productId: -1,
                    amount: 0
                }
            ]
        }
    }),
    mutations: {
        setEmail: function (state, payload) {
            state.paymentData.player.email = payload;
        },
        setCoupon: function (state, payload) {
            state.paymentData.coupon = payload;
        },
        setProduct(state, payload) {
            state.paymentData.products[0].productId = payload.id;
            state.paymentData.products[0].amount = payload.amount;
        },
        setPaymentData(state, payload) {
            this.commit("setEmail", payload.player.email);
            if (payload.coupon !== undefined)
                this.commit("setCoupon", payload.coupon);
            this.commit("setProduct", {id: payload.products[0].productId, amount: payload.products[0].amount});
        }
    }
}