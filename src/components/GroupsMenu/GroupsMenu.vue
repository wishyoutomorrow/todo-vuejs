<template>
	<div class="sidebar">
		<ul class="groups" v-if="groups">
			<group-vue
					v-for="group in groups"
					:key="group.id"
					:group="group"
					@click="activateGroup(group)"
					:class="group.isActive ? 'active': ''"
			></group-vue>
		</ul>
		<hr class="sidebar__line">
		<groups-form

		></groups-form>
	</div>
</template>

<script>
import GroupVue from "@/components/GroupsMenu/GroupVue.vue";
import GroupsForm from "@/components/GroupsMenu/GroupsForm.vue";
import {mapGetters} from "vuex";
export default {
	components: {
		GroupVue,
		GroupsForm
	},
	computed: {
		...mapGetters("groups", {
			groups: "getGroups",
			activeGroup: "getActiveGroup",
		})
	},
	methods: {
		activateGroup(group) {
			if(group.isActive) return;
			this.$store.dispatch("groups/ACTIVE_GROUP", group)
		}
	},
}
</script>

<style lang="scss" scoped>
.sidebar {
	background-color: #fff;
	width: 300px;
	float: left;
	height: 100%;
	padding: 40px 0 20px 0;
	color: #323130;
	box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1),
		0px 1.6px 3.6px rgba(0, 0, 0, 0.1);

	&__line {
		height: 2px;
		margin: 20px;
		background-color: $gray;
		border: none;
	}
}
</style>