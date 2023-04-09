<template>
	<li class="group">
		<div class="group__name">
			<img src="@/assets/images/sun.svg" alt="#ico">
			<span>{{ group.name }}</span>
		</div>
		<span class="group__number">{{ tasksNumber }}</span>
	</li>
</template>

<script>
export default {
	props: {
		group: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
		}
	},
	computed: {
		tasksNumber() {
			return this.group.tasks.length ? this.group.tasks.length : "";
		}
	}
}
</script>

<style lang="scss" scoped>
.group {
	padding: 12px 24px 12px 24px;
	cursor: pointer;
	font-size: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	position: relative;

	&:hover {
		background-color: #fafafa;
	}

	&__name {
		display: flex;
		align-items: center;
		gap: 10px;
		overflow: hidden;

		span {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		img {
			width: 1.3333em;
		}

		* {
			display: block;
		}
	}

	&::before {
		content: "";
		position: absolute;
		width: 2px;
		background-color: #2564cf;
		height: 0;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		transition: height 0.2s ease;
	}

	&.active {
		background-color: #eff6fc;

		&::before {
			height: 100%;
		}
	}
}
</style>