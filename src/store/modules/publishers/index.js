



import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        publisherList: [],

    },
    getters: {
        publishers: (state) => state.publisherList,
    },

    actions: {
        async fetchPublisher({ commit }) {
            const response = await axios.get(`${api.apiurl}publishers/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.publisherList);
            commit("SET_PUBLISHER", response.data.publisherList);
        },
        async publisherSubmit({ commit }, { firstname, middlename, lastname, location}) {
            console.log("look", firstname, middlename, lastname, location);
            return await axios({
                method: "POST",
                url: `${api.apiurl}publishers/`,

                data: {
                    firstname, middlename, lastname, location
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("ADD_PUBLISHER", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },
        async updatePublisher({ commit }, { firstname, middlename, lastname, location, publisherID }) {
            console.log("look", firstname, middlename, lastname, location, publisherID);
            return await axios({
                method: "PATCH",
                url: `${api.apiurl}publishers/` + publisherID,

                data: {
                    firstname, middlename, lastname, location, publisherID
                }
            })
                .then(res => {
                    console.log("newsup", res);

                    commit("UPDATE_PUBLISHER", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },

        // async updateLibrarian({ commit }, { Firstname, Middlename, Lastname, RegisterDate, Gender, UserID }) {
        //     console.log("look", Firstname, Middlename, Lastname, RegisterDate, Gender, UserID);

        //     return await axios({
        //         method: "PATCH",
        //         // url: `${API_URL}/api/librarian/${this.$route.params.UserID}`,
        //         url: `${API_URL}/api/librarian/` + UserID,
        //         data: {
        //             Firstname, Middlename, Lastname, RegisterDate, Gender, UserID
        //         }
        //     })

        //         .then(res => {
        //             console.log("supnew", res);

        //             commit("UPDATE_LIBRARIAN", res.data.posted);

        //             return res;
        //         })
        //         .catch(err => err);
        // },

    },

    mutations: {
        SET_PUBLISHER(state, publisherList) {
            state.publisherList = publisherList;
        },
 
        publisherSubmit: (state, publisherList) => state.publisherList.unshift(publisherList),
        ADD_PUBLISHER(state, publishers) {
            state.customersState.push(publishers);
        },
        updatePublisher: (state, publisherList) => state.publisherList.unshift(publisherList),
        UPDATE_PUBLISHER(state, publishers) {
            state.customersState.push(publishers);
        },
 
    },
};

















