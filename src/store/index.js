import Vue from 'vue';
import Vuex from 'vuex';
import * as CONFIG from '@/config.js';

Vue.use(Vuex);

/* Módulos */
import * as mUsers from '@/store/users.js'

/* Store */
export default new Vuex.Store({
    state : {
        user : {},
        specialty : {},
        center : {},
        submenu : 'prueba'
    },
    mutations: {
        [CONFIG.mut.setMenu](state, payload) {
            state.submenu = payload.menu;
        }
    },
    modules : {
        users : mUsers
    }
});