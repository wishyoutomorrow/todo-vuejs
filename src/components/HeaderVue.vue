<template>
	<header class="header">
		<div class="wrapper header__wrapper">
			<button class="header__burger burger"><i class="burger__line"></i></button>
			<div class="header__search header-search">
				<button class="header-search__submit header-search__btn">
					<i class="icon-search"></i>
				</button>
				<input type="text" name="search" id="search" class="header-search__input" />
				<button class="header-search__delete header-search__btn">
					<i class="icon-cross"></i>
				</button>
			</div>
			<div class="header__menu header-menu">
				<a href="#" class="header-menu__settings header-menu__item"><i class="icon-gear"></i></a>
				<a href="#" class="header-menu__account header-menu__item"><i class="icon-account-user"></i></a>
			</div>
		</div>
		<!-- /.wrapper -->
	</header>
	<!-- /.header -->
</template>

<script>
export default {
	name: "HeaderVue",
}
</script>

<style lang="scss">
.header {
	height: 48px;
	background-color: $blue;

	// .header__wrapper
	&__wrapper {
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
}

.burger {
	width: 48px;
	height: 48px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px 12px;
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		background-color: #005a9e;
		padding: 14px 12px;
	}

	// .burger__line
	&__line,
	&::after,
	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 2px;
		background-color: #fff;
	}
}

.header-search {
	height: 32px;
	width: 400px;
	display: flex;
	background-color: #edebe9;
	cursor: pointer;
	border-radius: 2px;

	&:hover {
		background-color: #f4f6ff;
		box-shadow: 0 0 0 1px #f4f6ff;
	}

	// .header-search__submit
	&__submit {
		width: 32px;
		text-align: left;
		padding-left: 5px;
		padding-top: 2px;
	}

	// .header-search__btn
	&__btn {
		font-size: 17px;
		color: #346fef;
	}

	// .header-search__input
	&__input {
		cursor: pointer;
		flex: 1 1 0;
		font-size: 14px;
	}

	// .header-search__delete
	&__delete {
		width: 32px;
		font-size: 15px;
		padding: 8px;
	}
}

.header-menu {
	height: 100%;
	display: flex;

	// .header-menu__settings
	&__settings {
		&:hover i {
			transform: rotate(90deg);
		}
	}

	// .header-menu__item
	&__item {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 23px;
		width: 48px;
		padding: 5px;
		transition: background-color 0.2s ease, transform 0.2s ease;

		& i {
			transition: transform 0.2s ease;
		}

		&:hover {
			background-color: #005a9e;
		}
	}

	// .header-menu__account
	&__account {
		i {
			transition: font-size 0.1s ease-in;
		}

		&:hover i {
			font-size: 24px;
		}
	}
}
</style>