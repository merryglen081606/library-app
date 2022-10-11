import axios from "axios";
// const API_URL = "http://172.16.4.182:5000";
import api from "../../../../api";

export default {
    state: {
        borrowerList: [],
        readerList: [],
        librarianList: [],
        bookCopyList: [],
    },
    getters: {
        transactions: (state) => state.borrowerList,
        readers: (state) => state.readerList,
        librarians: (state) => state.librarianList,
        bookcopy: (state) => state.bookCopyList,
    },

    actions: {
        async fetchTransaction({ commit }) {
            const response = await axios.get(`${api.apiurl}borrowers/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.borrowerList);
            commit("SET_TRANSACTION", response.data.borrowerList);
        },
        async fetchReaders({ commit }) {
            const response = await axios.get(`${api.apiurl}reader/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.readerList);
            commit("SET_READER", response.data.readerList);
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
        async fetchBookcopy({ commit }) {
            const response = await axios.get(`${api.apiurl}bookcopy/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log(response.data.bookCopyList);
            commit("SET_BOOKCOPY", response.data.bookCopyList);
        },
        async transactionSubmit({ commit }, { ReaderID, LibrarianID, CopyID, DateIssued, DueDate, DateReturned, Penalty, Status, remarks }) {
            console.log("look", ReaderID, LibrarianID, CopyID, DateIssued, DateReturned, DueDate, Penalty, Status, remarks);
            return await axios({
                method: "POST",
                url: `${api.apiurl}borrowers/`,

                data: {
                    ReaderID, LibrarianID, CopyID, DateIssued, DueDate, DateReturned, Penalty, Status, remarks
                }
            })
                .then(res => {
                    console.log("supnew", res);

                    commit("ADD_TRANSACTION", res.data.posted);

                    return res;
                })
                .catch(err => err);
        },


    },
    mutations: {
        SET_TRANSACTION(state, borrowerList) {
            state.borrowerList = borrowerList;
        },
        SET_READER(state, readerList) {
            state.readerList = readerList;
        },
        SET_LIBRARIANS(state, librarianList) {
            state.librarianList = librarianList;
        },
        SET_BOOKCOPY(state, bookCopyList) {
            state.bookCopyList = bookCopyList;
        },
        transactionSubmit: (state, borrowerList) => state.borrowerList.unshift(borrowerList),
        ADD_TRANSACTION(state, transactions) {
            state.transactionsState.push(transactions);
        },
    },
};
