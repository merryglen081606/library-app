import axios from "axios";
import api from "../../../../api";
// const API_URL = "http://172.16.4.182:5000";

export default {
    state: {
        accountList: [],
        librarianList: [],
    },
    getters: {
        accounts: (state) => state.accountList,
        librarians: (state) => state.librarianList,
    },

    actions: {
        async fetchAccounts({ commit }) {
            const response = await axios.get(`${api.apiurl}accounts/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.accountList);
            commit("SET_ACCOUNTS", response.data.accountList);
        },
        async fetchLibrarian({ commit }) {
            const response = await axios.get(`${api.apiurl}librarian/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.librarianList);
            commit("SET_LIBRARIANS", response.data.librarianList);
        },
        async accountSubmit({ commit }, { Username, Password, UserID, Roles, Status }) {
            console.log("look", Username, Password, UserID, Roles, Status);
            return await axios({
                method: "POST",
                url: `${api.apiurl}accounts/`,

                data: {
                    Username, Password, UserID, Roles, Status
                }
            })
                .then(res => {
                    console.log("supnew", res);

                    commit("ADD_ACCOUNT", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        // async editRegister({ commit }, register) {
        //     return await axios({
        //         method: "PUT",
        //         url: `${api.apiurl}/user/edit/${register.user_id}`,
        //         headers: {
        //             Authorization: localStorage.getItem("token"),
        //         },
        //         data: {
        //             firstname: register.firstname,
        //             lastname: register.lastname,
        //             password: register.password,
        //         },
        //     })
        //         .then((response) => {
        //             commit("UPDATE_REGISTER", response.data);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // },


        async updateAccount({ commit }, { Username, Password, UserID, Roles, Status, AccountID }) {
            console.log("look", Username, Password, UserID, Roles, Status, AccountID);

            return await axios({
                method: "PATCH",
                // url: `${API_URL}/api/librarian/${this.$route.params.UserID}`,
                url: `${api.apiurl}accounts/` + localStorage.getItem('accountid'),
                data: {
                    Username, Password, UserID, Roles, Status, AccountID
                }
            })

                .then(res => {
                    console.log("supnew", res);

                    commit("UPDATE_ACCOUNT", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        // async updateAccount({ commit }, { Username, Password, UserID, Roles, Status, AccountID }) {
        //     console.log("look", Username, Password, UserID, Roles, Status, AccountID);

        //     return await axios({
        //         method: "PUT",
        //         // url: `${API_URL}/api/librarian/${this.$route.params.UserID}`,
        //         url: `${api.apiurl}accounts/` + AccountID,
        //         data: {
        //             Username, Password, UserID, Roles, Status, AccountID
        //         }
        //     })

        //         .then(res => {
        //             console.log("supnew", res);

        //             commit("UPDATE_ACCOUNT", res.data.posted);

        //             return res;
        //         })
        //         .catch(err => err);
        // },


    },

    mutations: {
        SET_ACCOUNTS(state, accountList) {
            state.accountList = accountList;
        },
        SET_LIBRARIANS(state, librarianList) {
            state.librarianList = librarianList;
        },
        accountSubmit: (state, accountList) => state.accountList.unshift(accountList),
        ADD_ACCOUNT(state, accounts) {
            state.accountsState.push(accounts);
        },
        updateAccount: (state, accountList) => state.accountList.unshift(accountList),
        UPDATE_ACCOUNT(state, accounts) {
            state.accountsState.push(accounts);
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