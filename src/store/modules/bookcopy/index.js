
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


    },

    mutations: {
        SET_BOOKCOPY(state, bookCopyList) {
            state.bookCopyList = bookCopyList;
        },

        bookcopySubmit: (state, bookCopyList) => state.publisherList.unshift(bookCopyList),
        ADD_BOOKCOPY(state, publishers) {
            state.customersState.push(publishers);
        },

    },
};

















