<template>
  <Header :groups="groups" />
  <div class="wrapper app-wrapper">
    <Sidebar :groups="groups" @getActiveGroup="getActiveGroup" />
    <Main :activeGroup="activeGroup" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Main from "@/components/main/Main.vue";

export default {
  name: 'App',
  data() {
    return {
      groups: [
        {
          name: 'Group 1',
          tasks: [
            {
              name: 'Task 2',
              isCompleted: false,
              isImportant: false,
              due: false,
            }
          ],
          isActive: true,
        },
      ],
      activeGroup: {},
    }
  },
  mounted: function () {
    this.getActiveGroup(this.groups[0])
  },
  methods: {
    getActiveGroup(group) {
      this.activeGroup = group;
    },
  },

  components: {
    Header,
    Sidebar,
    Main
  },
}
</script>

<style lang="scss">

</style>
