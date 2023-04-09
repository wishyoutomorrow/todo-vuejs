export default {
    ADD_GROUP(state, group) {
        state.groups.push(group)
    },
    DEACTIVATE_GROUPS(state){
        state.groups.forEach(item => item.isActive = false)
        state.activeGroup = null;
    },
    ACTIVE_GROUP(state, group){
        group.isActive = true;
        state.activeGroup = group;
    },
    ADD_TASK_TO_ACTIVE_GROUP(state, task){
        state.activeGroup.tasks.push(task);
    }
}