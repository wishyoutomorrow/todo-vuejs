export default {
    CREATE_TASK({commit}, task){
        commit("CREATE_TASK", task)
    },
    CLEAR_TASK({commit}) {
        commit("CLEAR_TASK");
    },
    TOGGLE_CHECK_TASK({commit}) {
        commit("TOGGLE_CHECK_TASK")
    }
}