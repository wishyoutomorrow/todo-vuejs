export default {
    ADD_GROUP({commit}, group) {
        commit("DEACTIVATE_GROUPS");
        commit("ADD_GROUP", group);
    },
    TOGGLE_GROUP({commit}, id) {
        commit("DEACTIVATE_GROUPS")
        commit("TOGGLE_GROUP", id)
    },


}