<template>
  <li class="groups__item groups-item" :class="{active: group.isActive}">
    <div class="groups-item__name">
      <img src="@/assets/images/sun.svg" alt="#ico">
      <span>{{group.name}}</span>
    </div>
    <span class="groups__number">{{group.tasks.length ? group.tasks.length : ""}}</span>
  </li>
</template>
<script>
export default {
  name: "Group",
  data() {
    return {
    }
  },
  props: {
    group: {
      type: Object,
    }
  }

}
</script>
<style lang="scss">

</style>