export default {
    ADD_TASK(state, task){
        state.tasks.push(task);
    },
    CLEAR_TASKS(state){
      state.tasks = [];
    }
}