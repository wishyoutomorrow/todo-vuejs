export default {
    ADD_GROUP(state, group) {
        state.groups.push(group)
    },
    DEACTIVATE_GROUPS(state){
        state.groups.forEach(item => item.isActive = false)
    },
    TOGGLE_GROUP(state,id){
        let group = state.groups.find(item => item.id === id)
        group.isActive = !group.isActive;
    },
}