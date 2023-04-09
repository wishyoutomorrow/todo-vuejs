export default {
    ADD_GROUP({commit}, group) {
        commit("DEACTIVATE_GROUPS");
        commit("ADD_GROUP", group);
    },
    ACTIVE_GROUP({commit}, id) {
        commit("DEACTIVATE_GROUPS")
        commit("ACTIVE_GROUP", id)
    },
    ADD_TASK_TO_ACTIVE_GROUP({commit}, task) {
        commit("ADD_TASK_TO_ACTIVE_GROUP", task);
    }

}