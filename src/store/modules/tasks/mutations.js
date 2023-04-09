export default {
    CREATE_TASK(state, task){
        task.id = Date.now();
        state.task = task
    },
    CLEAR_TASK(state){
        state.task = {
            name: "",
            isChecked: false,
            isImportant: false,
            due: false,
            id: null,
        };
    },
    TOGGLE_CHECK_TASK(state, {task, value}) {
        task.isChecked = value;
    },
    TOGGLE_IMPORTANT_TASK(state, {task, value}) {
        task.isImportant = value;
    }
}