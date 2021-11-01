import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "paly game", checked: false },
    ],
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoID) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoID;
      });
      state.todos.splice(index, 1);
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        commit("SET_USERS", res.data);
      });
    },
    //비동기 작업후  state 값을 변경할 떄 사용
    addTodo({ commit }, value) {
      setTimeout(() => {
        commit("ADD_TODO", value);
      }, 2000);
    },
    toggleTodo({ commit }, { id, checked }) {
      setTimeout(() => {
        commit("TOGGLE_TODO", { id, checked });
      }, 1000);
    },
    deleteTodo({ commit }, todoID) {
      setTimeout(() => {
        commit("DELETE_TODO", todoID);
      }, 2000);
    },
  },
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
});
