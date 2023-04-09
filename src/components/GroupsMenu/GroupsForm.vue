<template>
	<form class="groups-form" @submit="addGroup">
		<div class="wrapper groups-form__wrapper">
			<input type="text" name="groups-input" placeholder="New list" :maxlength="maxLength" class="groups-form__input"
			v-model="name" required
			>
			<input type="submit" value="+">
		</div>
	</form>
</template>

<script>

export default {
	data() {
		return {
			name: '',
			maxLength: 40,
		}
	},

	methods: {
		addGroup(e){
			e.preventDefault();

			let group = {
				name: this.name,
				tasks: [],
				id: Date.now(),
				isActive: true,
			};
			this.$store.dispatch("groups/ADD_GROUP", group);
			this.$store.dispatch("groups/ACTIVE_GROUP", group);
			this.name="";
		}
	},
}
</script>

<style lang="scss" scoped>
.groups-form {
	font-size: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;

	&__wrapper {
		align-items: center;
	}

	&__input {
		padding-left: em(10px);
		color: $black;
	}
}
</style>