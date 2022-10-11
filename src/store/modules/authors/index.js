import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        authorList: [],

    },
    getters: {
        authors: (state) => state.authorList,
    },

    actions: {
        async fetchAuthor({ commit }) {
            const response = await axios.get(`${api.apiurl}authors/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.authorList);
            commit("SET_AUTHOR", response.data.authorList);
        },
        async authorSubmit({ commit }, { firstname, middlename, lastname}) {
            console.log("look", firstname, middlename, lastname);
            return await axios({
                method: "POST",
                url: `${api.apiurl}authors/`,

                data: {
                    firstname, middlename, lastname
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_AUTHOR", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },

    },

    mutations: {
        SET_AUTHOR(state, authorList) {
            state.authorList = authorList;
        },

        authorSubmit: (state, authorList) => state.authorList.unshift(authorList),
        ADD_AUTHOR(state, authors) {
            state.customersState.push(authors);
        },

    },
};

















