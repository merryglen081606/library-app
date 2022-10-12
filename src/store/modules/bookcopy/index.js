
import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        bookCopyList: [],

    },
    getters: {
        bookcopy: (state) => state.bookCopyList,
    },

    actions: {
        async fetchBookcopy({ commit }) {
            const response = await axios.get(`${api.apiurl}bookcopy/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.bookCopyList);
            commit("SET_BOOKCOPY", response.data.bookCopyList);
        },
        async bookcopySubmit({ commit }, { copyNo, b_bookID, b_shelfID }) {
            console.log("look", copyNo, b_bookID, b_shelfID);
            return await axios({
                method: "POST",
                url: `${api.apiurl}bookcopy/`,

                data: {
                    copyNo, b_bookID, b_shelfID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_BOOKCOPY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        async updateBookCopy({ commit }, { copyNo, b_bookID, b_shelfID, copyID }) {
            console.log("look", copyNo, b_bookID, b_shelfID, copyID);
            return await axios({
                method: "PATCH",
                url: `${api.apiurl}bookcopy/` + copyID ,

                data: {
                    copyNo, b_bookID, b_shelfID, copyID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("UPDATE_BOOKCOPY", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },


    },

    mutations: {
        SET_BOOKCOPY(state, bookCopyList) {
            state.bookCopyList = bookCopyList;
        },

        bookcopySubmit: (state, bookCopyList) => state.bookCopyList.unshift(bookCopyList),
        ADD_BOOKCOPY(state, bookcopy) {
            state.customersState.push(bookcopy);
        },

        updateBookCopy: (state, bookCopyList) => state.bookCopyList.unshift(bookCopyList),
        UPDATE_BOOKCOPY(state, bookcopy) {
            state.customersState.push(bookcopy);
        },
    },
};

















