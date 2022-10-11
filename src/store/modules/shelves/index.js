import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        shelfList: [],

    },
    getters: {
        shelf: (state) => state.shelfList,
    },

    actions: {
        async fetchShelf({ commit }) {
            const response = await axios.get(`${api.apiurl}shelfs/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.shelfList);
            commit("SET_SHELF", response.data.shelfList);
        },
        async shelfSubmit({ commit }, { shelfname, location, CategoryID }) {
            console.log("look", shelfname, location, CategoryID);
            return await axios({
                method: "POST",
                url: `${api.apiurl}shelfs/`,

                data: {
                    shelfname, location, CategoryID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_SHELF", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },

    },

    mutations: {
        SET_SHELF(state, shelfList) {
            state.shelfList = shelfList;
        },

        shelfSubmit: (state, shelfList) => state.shelfList.unshift(shelfList),
        ADD_SHELF(state, shelf) {
            state.customersState.push(shelf);
        },

    },
};

















