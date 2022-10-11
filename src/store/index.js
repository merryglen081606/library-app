import Vue from "vue";
import Vuex from "vuex";
import librarians from "./modules/librarians";
import accounts from "./modules/accounts";
import books from "./modules/books";
import readers from "./modules/readers";
import authors from "./modules/authors";
import publishers from "./modules/publishers";
import shelves from "./modules/shelves";
import category from "./modules/category";
import subcategory from "./modules/subcategory";
import login from "./modules/login";
import transactions from "./modules/transactions";
import bookcopy from "./modules/bookcopy";
import edit from "./modules/edit";
// import mechanic from "./modules/mechanic";
// import customers from "./modules/customers";
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    modules: {
        login,
        librarians,
        accounts,
        books,
        readers,
        authors,
        publishers,
        shelves,
        category,
        subcategory,
        transactions,
        bookcopy,
        edit
    },
});

export default store;





























// import Vue from 'vue';
// import Vuex from 'vuex';


// Vue.use(Vuex);
//  import state from "./state";
//  import * as getters from "./getters";
//  import * as mutations from "./mutations";
//  import * as actions from "./actions";


// export default  new Vuex.Store({
//             state,
//             getters,
//             mutations,
//             actions
// });

// import Vue from "vue";
// import Vuex from "vuex";
// import store from "store";
// // import mechanic from "./modules/mechanic";
// // import customers from "./modules/customers";
// Vue.use(Vuex);

// /* eslint-disable no-new */
// const store = new Vuex.Store({
   

// });

// export default store;
