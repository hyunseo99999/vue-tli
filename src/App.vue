<template>
  <div id="app">
    <app-header v-if="!errorPageYn"></app-header>
    <router-view @errorPage="errorPage"></router-view>
  </div>
</template>

<script>

import AppHeader from "@/components/common/AppHeader";
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      errorPageYn: false
    }
  },
  created() {
  },
  methods: {
    errorPage() {
      this.errorPageYn = true;
    }
  }
}
</script>

<style>

</style>
