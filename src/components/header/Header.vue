<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <button class="header__burger burger"><i class="burger__line"></i></button>
      <div class="header__search header-search">
        <button class="header-search__submit header-search__btn">
          <i class="icon-search"></i>
        </button>
        <input type="text" name="search" id="search" class="header-search__input" v-model="value" />
        <button class="header-search__delete header-search__btn" @click="findTask">
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
  name: "Header",
  data() {
    return {
      value: '',
    }
  },

  props: {
    groups: {
      type: Array,
    }
  },

  methods: {
    findTask() {

    },
  }
}
</script>
<style lang="scss">
@import "header";
</style>