<template>
	<div class="main" >
		<div v-if="group">
			<div class="wrapper main__wrapper">
				<h1 class="main__title" id="group-title">
					{{	group.name	}}
				</h1>
				<div class="main__btns">
					<button class="main__btn">
						<i class="icon-sort"></i><span>Sort</span>
					</button>
					<button class="main__btn">
						<i class="icon-printer"></i><span>Print</span>
					</button>
				</div>
			</div>
			<v-task-form></v-task-form>
			<ul class="main__tasks main-tasks" id="main-tasks">
				<task-vue
						v-for="task in group.tasks"
						:key="task.id"
						:task="task"
				></task-vue>
			</ul>
			<!-- /.main__tasks main-tasks -->
		</div>
		<div v-else>
			<h1 class="main__title" id="group-title">
				Create new group
			</h1>
		</div>
	</div>
</template>

<script>
import vTaskForm from "@/components/Tasks/vTaskForm.vue";
import TaskVue from '@/components/Tasks/TaskVue.vue';
import { mapGetters } from "vuex";

export default {

	components: {
		vTaskForm,
		TaskVue
	},
	computed: {
		...mapGetters("groups", {
			group: "getActiveGroup",
		})
	},
}
</script>

<style lang="scss" scoped>
.main {
	padding: 18px 28px;
	flex: 1 1 0;

	// .main__wrapper
	&__wrapper {
		justify-content: space-between;
	}

	// .main__title
	&__title {
		font-size: 20px;
		color: $blue;
		font-weight: 600;
		margin: 0;
		padding: 6px 0;
	}

	// .main__btns
	&__btns {
		display: flex;
	}

	// .main__btn
	&__btn {
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 15px;
		color: $blue;
		display: flex;
		align-items: center;
		gap: 5px;
		transition: background 0.2s ease;

		i {
			font-size: 22px;
		}

		&:hover {
			background: #fafafa;
		}
	}

	// .main__form
	&__form {}

	// .main__tasks
	&__tasks {}
}

.main-tasks {

	// .main-tasks__item
	&__item {
		margin-bottom: 8px;
	}
}
</style>