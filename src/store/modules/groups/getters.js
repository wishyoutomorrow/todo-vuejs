export default {
    getGroups: state => state.groups,
    getActiveGroup: state => state.groups.find(item => item.isActive)
}