export default {
    CREATE_TASK({commit}, task){
        commit("CREATE_TASK", task)
    },
    CLEAR_TASK({commit}) {
        commit("CLEAR_TASK");
    },
    TOGGLE_CHECK_TASK({commit}, {task, value}) {
        commit("TOGGLE_CHECK_TASK", {task, value})
    },
    TOGGLE_IMPORTANT_TASK({commit}, {task, value}){
        commit("TOGGLE_IMPORTANT_TASK", {task, value})
    }
}