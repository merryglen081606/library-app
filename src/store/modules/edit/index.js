// import axios from "axios";
// import api from "../../../../api";
// // const API_URL = "http://172.16.4.182:5000";

// export default {
//     state: {
//         librarianList: [],
//     },
//     getters: {
//         librarians: (state) => state.librarianList,
//     },

//     actions: {
//         // async fetchLibrarians({ commit }) {

//         //     const res = await axios.get(`${api.apiurl}librarian/` + this.$route.params.UserID,
//         //         {
//         //             headers: {
//         //                 Authorization: 'Bearer ' + localStorage.getItem('token')
//         //             }

//         //         }

//         //     );
//         //     console.log(res);
//         //     commit("SET_LIBRARIAN", res.data.librarianList);
//         // },


//         async fetchLibrarians({ commit }) {
//             return await axios({
//                 method: "GET",
//                 url: `${api.apiurl}librarian/${this.$route.params.UserID}`,
//                 headers: {
//                     Authorization: 'Bearer ' + localStorage.getItem('token')
//                 },
//             })
//                 .then((response) => {
//                     commit("SET_LIBRARIAN", response.data);
//                     console.log(response.data)
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         },


//         async updateLibrarian({ commit }, { Firstname, Middlename, Lastname, RegisterDate, Gender, UserID }) {
//             console.log("look", Firstname, Middlename, Lastname, RegisterDate, Gender, UserID);
//             return await axios({
//                 method: "POST",
//                 url: `${api.apiurl}librarian/`,

//                 data: {
//                     Firstname, Middlename, Lastname, RegisterDate, Gender, UserID
//                 }
//             })
//                 .then(res => {
//                     console.log("supnew", res);

//                     commit("UPDATE_LIBRARIAN", res.data.posted);

//                     return res;
//                 })
//                 .catch(err => err);
//         },


//     },

//     mutations: {

//         SET_LIBRARIAN(state, librarianList) {
//             state.librarianList = librarianList;
//         },
//         updateLibrarian: (state, librarianList) => state.accountList.unshift(librarianList),
//         UPDATE_LIBRARIAN(state, librarians) {
//             state.customersState.push(librarians);
//         },
//     },
// };


















