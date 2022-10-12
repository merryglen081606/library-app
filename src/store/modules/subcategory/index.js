import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        bookSubCatList: [],

    },
    getters: {
        subcategory: (state) => state.bookSubCatList,
    },

    actions: {
        async fetchSubcategory({ commit }) {
            const response = await axios.get(`${api.apiurl}book-subcat/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.bookSubCatList);
            commit("SET_SUBCATEGORY", response.data.bookSubCatList);
        },
        async subcatSubmit({ commit }, { name }) {
            console.log("look", name);
            return await axios({
                method: "POST",
                url: `${api.apiurl}book-subcat/`,

                data: {
                    name
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_SUBCATEGORY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        async updateSubCategory({ commit }, { name, subcategoryID }) {
            console.log("look", name, subcategoryID);
            return await axios({
                method: "PATCH",
                url: `${api.apiurl}book-subcat/` + subcategoryID,

                data: {
                    name, subcategoryID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("UPDATE_SUBCATEGORY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
    },
    mutations: {
        SET_SUBCATEGORY(state, bookSubCatList) {
            state.bookSubCatList = bookSubCatList;
        },

        subcatSubmit: (state, bookSubCatList) => state.bookSubCatList.unshift(bookSubCatList),
        ADD_SUBCATEGORY(state, subcategory) {
            state.customersState.push(subcategory);
        },
        updateSubCategory: (state, bookSubCatList) => state.bookSubCatList.unshift(bookSubCatList),
        UPDATE_SUBCATEGORY(state, subcategory) {
            state.customersState.push(subcategory);
        },
    },
};

















