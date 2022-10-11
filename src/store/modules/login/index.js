
import axios from "axios";
import api from "../../../../api";
import router from "../../../router/index"
// const API_URL = "http://172.16.4.182:5000";

export default {
    state: {
        account: [],
        // accountList: [],

    },
    getters: {
        login: (state) => state.account,
    },

    actions: {

        async handleSubmit({ commit }, { Username, Password }) {
            console.log("look", Username, Password);
            return await axios({
                method: "POST",
                url: `${api.apiurl}accounts/login/`,

                data: {
                    Username, Password
                },

            })
                .then(res => {
                    // if (this.account.Username == "!==") {
                    //     this.errors.push("email is empty");
                    // }
                    // else {
                    //     if (!this.validEmail(this.user.email)) {
                    //         this.errors.push("Invalid Email");
                    //     }
                    // }
                    console.log("newsup", res.data.account);
                    localStorage.setItem("token", res.data.account.token);
                    router.push("/account")

                    commit("ADD_LOGIN", res.data.posted);
                    

                    return res;

                })
                .catch(err => err);
        },

    },

    mutations: {
        SET_LOGIN(state, account) {
            state.account = account;
        },

        handleSubmit: (state, account) => state.account.unshift(account),
        ADD_LOGIN(state, login) {
            state.customersState.push(login);
        },

    },
};

















