import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:1
}

const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
//对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上100.
const getters = { 
    count:function(state){
        return state.count +=100;
    }
}

const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
 
})