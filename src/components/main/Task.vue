<template>
  <li class="main-tasks__item tasks-item" :class="{ checked: isChecked, important: isImportant }">
    <div class="wrapper">
      <input type="checkbox" class="tasks-item__checkbox tasks-item__done" v-model="isChecked" />
      <span class="tasks-item__checkbox">{{ task.name }}</span>
    </div>
    <input type="checkbox" class="tasks-item__checkbox tasks-item__important" v-model="isImportant"
      v-show="!isChecked" />
  </li>
  <!-- /.main-tasks__item -->
</template>
<script>
export default {
  name: "Task",
  data() {
    return {
      isChecked: false,
      isImportant: false,
    }
  },
  props: {
    task: {
      type: Object,
    }
  }

}
</script>
<style lang="scss">

</style>