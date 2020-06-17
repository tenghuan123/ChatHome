import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{ //设置全局访问的state对象
        userId:1
    },
    getters:{ //实时监听state值的变化
        getCount: state => {
            return state.count;
        }
    },
    mutations:{ //唯一允许更改state
        update(state, n){
            state.userId = n;
        },
        remove(state){
            state.userId = '';
        },
        getUserId(state){
            return state.userId;
        }
    },
    actions:{ // 触发更改
        updateFun(context, n){
            context.commit("update", n);
        },
        removeFun(context, n){
            context.commit("remove");
        }
    }
});
 
export default store;