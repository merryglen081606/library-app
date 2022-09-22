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

import Vue from "vue";
import Vuex from "vuex";
import librarians from "./modules/librarians";
// import mechanic from "./modules/mechanic";
// import customers from "./modules/customers";
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    modules: {
        librarians,
    },
});

export default store;
