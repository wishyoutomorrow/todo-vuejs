<template>
  <div class="main">
    <div class="wrapper main__wrapper">
      <h1 class="main__title" id="group-title">{{activeGroup.name}}</h1>
      <div class="main__btns">
        <button class="main__btn">
          <i class="icon-sort"></i><span>Sort</span>
        </button>
        <button class="main__btn">
          <i class="icon-printer"></i><span>Print</span>
        </button>
      </div>
    </div>
    <div class="main__form main-form">
      <input type="text" class="main-form__input" id="tasks-input" maxlength="80" v-model="value"
        @keyup.enter="addTask" />
      <div class="main-form__btns">
        <div class="wrapper main-form__wrapper"></div>
        <!-- /.wrapper main-form__wrapper -->
        <button class="main-form__btn main-form__submit" id="tasks-add" @click="addTask">
          Add
        </button>
      </div>
    </div>
    <!-- /.main__form -->
    <ul class="main__tasks main-tasks" id="main-tasks">
      <Task v-for="task in activeGroup.tasks" :task="task" />
    </ul>
    <!-- /.main__tasks main-tasks -->
  </div>
</template>
<script>
import Task from "@/components/main/Task.vue"
export default {
  name: "Main",
  data() {
    return {
      value: "",
    }
  },
  props: {
    activeGroup: {
      type: Object
    }
  },
  methods: {
    addTask() {
      if (this.value === "") return;
      this.activeGroup.tasks.push({
        name: this.value,
        isCompleted: false,
        isImportant: false,
        due: false,
      });
      this.value = "";
    }
  },
  components: {
    Task,
  }
}
</script>
<style lang="scss">
@import "main";
</style>