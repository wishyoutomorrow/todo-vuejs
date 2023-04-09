<template>
    <form class="main__form main-form" @submit="addTask($event, newTask)">
        <input type="text" class="main-form__input" id="tasks-input" maxlength="80" required
               v-model="newTask.name"
        />
        <div class="main-form__btns">
            <div class="wrapper main-form__wrapper"></div>
            <input type="submit" class="main-form__btn main-form__submit" value="Add" id="tasks-add" />
        </div>
    </form>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "v-task-form",
    data() {
        return {
            newTask: {
                name: "",
                isChecked: false,
                isImportant: false,
                due: false,
                id: null,
            }
        }
    },
    computed: {
        ...mapGetters("tasks", {
            task: "getTask",
        })
    },
    methods: {
        addTask(event, newTask){
            event.preventDefault();

            this.$store.dispatch("tasks/CREATE_TASK", newTask);
            this.$store.dispatch("groups/ADD_TASK_TO_ACTIVE_GROUP", newTask)
            this.$store.dispatch("tasks/CLEAR_TASK");

            this.newTask = this.task;
        }
    }
}
</script>

<style lang="scss" scoped>
.main-form {
    box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1),
    0px 1.6px 3.6px rgba(0, 0, 0, 0.1);
    margin: 16px 0 12px;
    border-radius: 10px;

// .main-form__input
    &__input {
        padding: 0 16px;
        min-height: 52px;
        width: 100%;
        background-color: #fff;
        font-size: 1.4rem;
        line-height: 20px;
        transition: none;
        color: #323130;
        border-radius: 10px 10px 0 0;
    }

// .main-form__btns
    &__btns {
        padding: 0 16px;
        background-color: #faf9f8;
        height: 44px;
        border-top: 1px solid #e1dfdd;
        border-radius: 0 0 10px 10px;
    }

// .main-form__wrapper
    &__wrapper {}

// .main-form__btn
    &__btn {}

// .main-form__submit
    &__submit {}
}
</style>