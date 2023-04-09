<template>
	<div>
		<header-vue />
		<div class="wrapper app-wrapper">
			<groups-menu />
			<tasks-vue />
		</div>
	</div>
</template>

<script>
import HeaderVue from "@/components/HeaderVue.vue";
import GroupsMenu from "@/components/GroupsMenu/GroupsMenu.vue";
import TasksVue from "./components/Tasks/TasksVue.vue";
import {mapGetters} from "vuex";
export default {
	components: {
		HeaderVue,
		GroupsMenu,
		TasksVue
	},
	computed: {
		...mapGetters("groups", {
			activeGroup: "getActiveGroup",
			groups: "getGroups",
		})
	},
	beforeCreate() {
		if(false){
			if(this.activeGroup) return;

			let group = {
				name: "Example of group",
				tasks: [],
				isActive: false,
				id: Date.now()
			};
			this.$store.dispatch("groups/ADD_GROUP", group);
			this.$store.dispatch("groups/ACTIVE_GROUP", group);
		}

	}
}
</script>

<style lang="scss" scoped>
.main {
	height: 100%;
}
</style>
