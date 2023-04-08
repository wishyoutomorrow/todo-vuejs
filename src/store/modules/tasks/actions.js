export default {
    ADD_TASK({commit}, task){
        commit("ADD_TASK", task)
    },
    CLEAR_TASKS({commit}){
        commit("CLEAR_TASKS");
    }
}