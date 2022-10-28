<template>
  <div class="sidebar">
    <ul class="groups" id="groups">
      <Group v-for="group in groups" :group="group" @click="toActiveGroup(group)" />
    </ul>
    <div class="sidebar__line"></div>
    <div class="group-form">
      <div class="wrapper group-form__wrapper">
        <i class="icon-add"></i>
        <input type="text" name="group-input" id="groups-input" class="group-form__item group-form__input"
          placeholder="New list" maxlength="40" v-model="value" @keyup.enter="addGroup" />
      </div>
      <button class="group-form__submit" @click="addGroup">
        <i class="icon-list_add"></i>
      </button>
    </div>
  </div>
</template>
<script>
import Group from "@/components/sidebar/Group.vue"
export default {
  name: "Sidebar",
  components: {
    Group,
  },
  data() {
    return {
      value: "",
    }
  },
  props: {
    groups: {
      type: Array,
    },
  },
  methods: {
    addGroup() {
      if (this.value === "") return;
      let group = {
        name: this.value,
        tasks: [],
        isActive: false,
      };
      this.groups.push(group);
      this.toActiveGroup(group);
      this.value = "";
    },
    toActiveGroup(group) {
      this.disableGroups();
      group.isActive = true;
      this.$emit("getActiveGroup", group)
    },
    disableGroups() {
      this.groups.forEach((item) => {
        item.isActive = false;
      })
    },
    context() {
      console.log("Hi");
    }
  }
}
</script>
<style lang="scss">
@import "sidebar";
</style>