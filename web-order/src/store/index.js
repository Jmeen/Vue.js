import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allusers: [
      { id: "test", name: "jaemin", email: "test@test.com", password: "1234" },
      {
        id: "test2",
        name: "jaemin2",
        email: "test2@test.com",
        password: "1234",
      },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    // 상태값 변화 login이나 loginerror 변경하기
    // 로그인이 성공했을때
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인이 실패했을때
    loginFail(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    //로그인을 시도
    login({ state, commit }, loginObj) {
      console.log(loginObj);
      let selectedUser = null;
      state.allusers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      selectedUser === null
        ? commit("loginFail")
        : selectedUser.password !== loginObj.password
        ? commit("loginFail")
        : commit("loginSuccess");
    },
  },
});
