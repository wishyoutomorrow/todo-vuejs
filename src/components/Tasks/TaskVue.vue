<template>
	<li class="task"
			:class=" {
				checked: task.isChecked,
				important: task.isImportant,
			}"
	>
		<div class="wrapper">
			<input type="checkbox" class="task__checkbox task__done" v-model="checkField"/>
			<span class="task__checkbox">{{	task.name	}}</span>
		</div>
		<input type="checkbox" class="task__checkbox task__important" v-model="importantField"/>
	</li>
	<!-- /.main-tasks__item -->
</template>

<script>

export default {
	data(){
		return {

		}
	},
	props: {
		task: {
			type: Object,
			required: true,
		}
	},
	computed: {
		checkField: {
			get() {
				return this.task.isChecked
			},
			set(value){
				let task = this.task
				this.$store.dispatch("tasks/TOGGLE_CHECK_TASK", {task, value})
			}
		},
		importantField: {
			get() {
				return this.task.isImportant
			},
			set(value){
				let task = this.task
				this.$store.dispatch("tasks/TOGGLE_IMPORTANT_TASK", {task, value})
			}
		}
	},
	methods: {
	},
}
</script>

<style lang="scss" scoped>
.task {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #323130;
	font-size: 1.4rem;
	padding: 0 16px;
	box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1),
		0px 1.6px 3.6px rgba(0, 0, 0, 0.1);
	min-height: 52px;
	width: 100%;
	background-color: #fff;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 10px;

	&:not(.active):not(.important):not(.checked):hover {
		background-color: #f5f5f5;
	}

	&.active {
		background-color: #eff6fc;
	}

	&.checked {
		background-color: rgba(75, 134, 69, 0.62);
		color: #fff;
		font-weight: bold;
		text-decoration: line-through;
	}
	&.important {
		background-color: rgba(201, 40, 40, 0.91);
		color: #fff;
		font-weight: bold;
	}

	&.important.checked{
		background-color: rgba(201, 180, 40, 0.91);
		color: #fff;
		font-weight: bold;
	}
	// .tasks-item__checkbox
	&__checkbox {
		cursor: pointer;
	}

	// .tasks-item__done
	&__done {
		margin-right: 14px;
	}

	// .tasks-item__important
	&__important {}
}
</style>