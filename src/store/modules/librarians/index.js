// import axios from "axios";



// export const getLibrarians = ({commit}) =>{
//     axios.get("http://172.16.4.182:5000/api/librarian/")
//     .then (response => {
//         commit('SET_LIBRARIANS',response.data);
//     })
// };

// export const AddLibrarianSubmit=({commit},{
//     Firstname,Middlename,Lastname,RegisterDate,Gender }) =>{
//     commit('ADD_LIBRARIAN',
//        { Firstname, Middlename, Lastname, RegisterDate, Gender });
//     }



import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        librarianList: [],

    },
    getters: {
        librarians: (state) => state.librarianList,
    },

    actions: {
        async fetchLibrarian({ commit }) {
            const response = await axios.get(`${api.apiurl}librarian/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.librarianList);
            commit("SET_LIBRARIANS", response.data.librarianList);
        },
    
        // async fetchLibrarian1({ commit }) {
        //     const response = await axios.get(`${API_URL}/api/librarian/` + this.$route.params.);
        //     console.log(response.data.librarian1);
        //     commit("SET_LIBRARIANS1", response.data.librarian1);
        // },

        // async fetchLibrarian_ID({commit}){,
        //     const res = await axios.get(`${API_URL}/api/librarian/` + this.$route.params.UserID);


        // },
        // async librarianSubmit({ commit }, { Firstname, Middlename, Lastname,RegisterDate,Gender}) {
        //     const response = await axios.post(`${API_URL}/api/librarian/`, {
        //         Firstname, Middlename, Lastname, RegisterDate, Gender

        //     });
        //     commit("librarianSubmit", response.data);
        // },
        async librarianSubmit({ commit }, { Firstname, Middlename, Lastname, RegisterDate, Gender }) {
            console.log("look", Firstname, Middlename, Lastname, RegisterDate, Gender);
            return await axios({
                method: "POST",
                url: `${api.apiurl}librarian/`,

                data: {
                    Firstname, Middlename, Lastname, RegisterDate, Gender
                }
            })
                .then(res => {
                    console.log("supnew", res);

                    commit("ADD_LIBRARIAN", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },


        async updateLibrarian({ commit }, { Firstname, Middlename, Lastname, RegisterDate, Gender, UserID }) {
            console.log("look", Firstname, Middlename, Lastname, RegisterDate, Gender, UserID);

            return await axios({
                method: "PATCH",
                // url: `${API_URL}/api/librarian/${this.$route.params.UserID}`,
                url: `${api.apiurl}librarian/` + UserID,
                data: {
                    Firstname, Middlename, Lastname, RegisterDate, Gender, UserID
                }
            })

                .then(res => {
                    console.log("supnew", res);

                    commit("UPDATE_LIBRARIAN", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },

    },

    mutations: {
        SET_LIBRARIANS(state, librarianList) {
            state.librarianList = librarianList;
        },
        SET_LIBRARIANS1(state, librarian1) {
            state.librarian1 = librarian1;
        },
        librarianSubmit: (state, librarianList) => state.librarianList.unshift(librarianList),
        ADD_LIBRARIAN(state, librarians) {
            state.customersState.push(librarians);
        },
        updateLibrarian: (state, librarianList) => state.librarianList.unshift(librarianList),
        UPDATE_LIBRARIAN(state, librarians) {
            state.customersState.push(librarians);
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