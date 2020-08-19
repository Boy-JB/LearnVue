import Vue from "vue";
import Vuex, { Store } from "vuex";

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象
const modeleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
};

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "kobe", age: 24 },
      { id: 112, name: "james", age: 30 },
      { id: 113, name: "curry", age: 10 }
    ],
    info: {
      name: "kobe",
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, payload) {
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu);
    },
    updateInfo(state) {
      state.info.name = "coderwhy";

      Vue.set(state.info, "addresss", "洛杉矶");

      Vue.delete(state.info, "age");
    }
  },
  actions: {
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // }

    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo");
          console.log(payload);

          resolve("111111");
        }, 1000);
      });
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20);
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length;
    },
    moreAgestu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age);
      };
    }
  },
  modules: {
    a: modeleA
  }
});

// 3.导出store对象
export default store;
