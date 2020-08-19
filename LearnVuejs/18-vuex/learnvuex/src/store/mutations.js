export default {
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
}