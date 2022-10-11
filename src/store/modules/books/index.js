import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";
export default {
    state: {
        bookList: [],
        authorList: [],
        publisherList: [],
    },
    getters: {
        books: (state) => state.bookList,
        authors: (state) => state.authorList,
        publishers: (state) => state.publisherList,
    },

    actions: {
        async fetchBooks({ commit }) {
            const response = await axios.get(`${api.apiurl}books/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.bookList);
            commit("SET_BOOK", response.data.bookList);
        },
        async fetchAuthor({ commit }) {
            const response = await axios.get(`${api.apiurl}authors/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.authorList);
            commit("SET_AUTHOR", response.data.authorList);
        },
        async fetchPublisher({ commit }) {
            const response = await axios.get(`${api.apiurl}publishers/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.publisherList);
            commit("SET_PUBLISHER", response.data.publisherList);
        },




        async bookSubmit({ commit }, { ISBN, Title, AuthorID, PublisherID, YearPublish, PageNo }) {
            console.log("look", ISBN, Title, AuthorID, PublisherID, YearPublish, PageNo);
            return await axios({
                method: "POST",
                url: `${api.apiurl}books/`,

                data: {
                    ISBN, Title, AuthorID, PublisherID, YearPublish, PageNo
                }
            })
                .then(res => {
                    console.log("supnew", res);

                    commit("ADD_BOOK", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },


    },

    mutations: {
        SET_BOOK(state, bookList) {
            state.bookList = bookList;
        },
        SET_AUTHOR(state, authorList) {
            state.authorList = authorList;
        },
        SET_PUBLISHER(state, publisherList) {
            state.publisherList = publisherList;
        },
        bookSubmit: (state, bookList) => state.bookList.unshift(bookList),
        ADD_BOOK(state, books) {
            state.booksState.push(books);
        },
    },
};




















// import axios from "axios"
// const API_URL = "http://172.16.4.182:5000/api/accounts/";


// export default{
//     async libbrarians({commit},{Secret}){
//         console.log("what",this.$axios);
//         return await axios({
//             method: "GET",
//             API_URL:'${this.$axios.defaults.API_URL}/librarian',

//         })
//             .then(res => {
//                 console.log(res);
//                 commit("SET_CUSTOMER", res.data.view);
//                 console.log("testCustomer", res.data.view);
//                 return res.data;
//             })
//             .catch(err => {
//                 console.log(err);
//             });

//     },
// }