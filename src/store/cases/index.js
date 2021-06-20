export default {
    state: () => ({
        casesInUse: [{inUsed: false, id: 0, wonId: -1, caseId: 0}],
        items: [],
        caseList: [],
        inLoading: true,
        wonValues: []
    }),
    mutations: {
        addAllItems(state, data) {
            //console.log(data);
            state.items = data;
        },
        addCases(state, data) {
            //console.log(data);
            state.caseList = data;
        },
        setCaseAsUsed(state, data) {
            state.casesInUse[data.index].inUsed = true;
            state.casesInUse[data.index].wonId = data.wonId;
        },
        addTry(state, data) {
            let arr = [];

            for (let i = 0; i < data.count; i++)
                arr.push({inUsed: false, id: i, wonId: -1, caseId: data.id});

            state.casesInUse = arr;
        },
        addWonValues(state, data) {
            Array.prototype.push.apply(state.wonValues, data);
        },
        useCaseTest(state, data) {
            state.casesInUse[data].inUsed = true;
        }
    },
    actions: {
        useCase({commit, state}, payload) {
            this.$caseapi.useCase(state.casesInUse[payload].caseId).then(function (data) {
                commit("addWonValues", data.values);
                commit("setCaseAsUsed", {index: payload, wonId: data.wonProductId});
            });
        },
        useAllCases({state, dispatch}) {
            for (let i = 0; i < state.casesInUse.length; i++) {
                setTimeout(() => dispatch("useCase", i), 200);
            }
        }
    },
    getters: {
        getCaseById: state => Id => {
            return state.caseList.find((el) => el.id === Id)
        }
    },
}