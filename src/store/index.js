import Vue from 'vue'
import Vuex from 'vuex'
import items from "@/store/items/index";
import modal from "@/store/modal/index";
import payment from "@/store/payment/index";
import ShopApi from "@/api/shop.js";
import CaseApi from "@/api/case.js";
import Cases from "@/store/cases/index";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        items: items,
        modal: modal,
        payment: payment,
        cases: Cases
    }
})

store.$shopapi = new ShopApi();
store.$caseapi = new CaseApi();

export default store
