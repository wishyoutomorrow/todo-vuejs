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
export default {
	components: {
		HeaderVue,
		GroupsMenu,
		TasksVue
	}
}
</script>

<style lang="scss" scoped>
.main {
	height: 100%;
}
</style>
