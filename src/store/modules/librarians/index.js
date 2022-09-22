import axios from "axios";
const API_URL = "http://localhost:5000/api/accounts/";

export default {
    state: {
        accounts: [],
    },
    getters: {
        accountslist: (state) => state.accounts,
    },

    actions: {
        async fetchAccountList({ commit }) {
            const response = await axios.get(`${API_URL}/accounts`);
            console.log(response.data);
            commit("SET_ACCOUNTSLIST", response.data);
        },
    },

    mutations: {
        SET_ACCOUNTSLIST(state, accounts) {
            state.accounts = accounts;
        },
    },
};
