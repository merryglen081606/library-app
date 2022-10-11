import axios from "axios";
const API_URL = "http://172.16.4.182:5000";

export default {
    state: {
        bookCatList: [],

    },
    getters: {
        category: (state) => state.bookCatList,
    },

    actions: {
        async fetchCategory({ commit }) {
            const response = await axios.get(`${API_URL}/api/book-cat/`, {
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
                url: `${API_URL}/api/book-cat/`,

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

    },

    mutations: {
        SET_CATEGORY(state, bookCatList) {
            state.bookCatList = bookCatList;
        },

        categorySubmit: (state, bookCatList) => state.bookCatList.unshift(bookCatList),
        ADD_CATEGORY(state, category) {
            state.customersState.push(category);
        },

    },
};

















