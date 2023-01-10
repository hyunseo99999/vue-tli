<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
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
@import './css/reset.css';
@import './css/common.css';
</style>
