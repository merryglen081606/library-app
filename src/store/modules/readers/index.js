import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        readerList: [],
    },
    getters: {
        readers: (state) => state.readerList,
    },

    actions: {
        async fetchReaders({ commit }) {
            const response = await axios.get(`${api.apiurl}reader/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.readerList);
            commit("SET_READER", response.data.readerList);
        },
        async readerSubmit({ commit }, { ReaderNo, Firstname, Lastname, Birthdate, Gender, LibrarianID, RegisterDate, ContactNo, City, Status}) {
            console.log("look", ReaderNo, Firstname, Lastname, Birthdate, Gender, LibrarianID, RegisterDate, ContactNo, City, Status);
            return await axios({
                method: "POST",
                url: `${api.apiurl}reader/`,

                data: {
                    ReaderNo, Firstname, Lastname, Birthdate, Gender, LibrarianID, RegisterDate, ContactNo, City, Status
                }
            })
                .then(res => {
                    console.log("supnew", res);

                    commit("ADD_READER", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },


    },

    mutations: {
        SET_READER(state, readerList) {
            state.readerList = readerList;
        },
        bookSubmit: (state, readerList) => state.readerList.unshift(readerList),
        ADD_READER(state, readers) {
            state.readersState.push(readers);
        },
    },
};
