import axios from "axios";
import api from "../../../../api";

export default {
    state: {
        bookCatList: [],

    },
    getters: {
        category: (state) => state.bookCatList,
    },

    actions: {
        async fetchCategory({ commit }) {
            const response = await axios.get(`${api.apiurl}book-cat/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.bookCatList);
            commit("SET_CATEGORY", response.data.bookCatList);
        },
        async categorySubmit({ commit }, { categoryName, b_subcategoryID }) {
            console.log("look", categoryName, b_subcategoryID);
            return await axios({
                method: "POST",
                url: `${api.apiurl}book-cat/`,

                data: {
                    categoryName, b_subcategoryID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_CATEGORY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        async updateCategory({ commit }, { categoryName, b_subcategoryID, categoryID }) {
            console.log("look", categoryName, b_subcategoryID, categoryID);
            return await axios({
                method: "PATCH",
                url: `${api.apiurl}book-cat/` + categoryID,

                data: {
                    categoryName, b_subcategoryID, categoryID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("UPDATE_CATEGORY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },

    },

    mutations: {
        SET_CATEGORY(state, bookCatList) {
            state.bookCatList = bookCatList;
        },

        categorySubmit: (state, bookCatList) => state.bookCatList.unshift(bookCatList),
        ADD_CATEGORY(state, category) {
            state.customersState.push(category);
        },
        updateCategory: (state, bookCatList) => state.bookCatList.unshift(bookCatList),
        UPDATE_CATEGORY(state, category) {
            state.customersState.push(category);
        },

    },
};

















