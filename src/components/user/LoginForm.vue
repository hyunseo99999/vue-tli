<template>
  <div>
    <form @submit.prevent="formSubmit" ref="form">
      <div>
        <label for="username">id:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">password:</label>
        <input type="text" id="password" v-model="password" >
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import {fetchLogin} from "@/api/index.js";
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    async formSubmit() {
      let { data } = await fetchLogin({
        username: this.username,
        password: this.password
      });

      if (data.success) {
        alert('로그인 성공');
      }
    }
  }
}
</script>

<style scoped>

</style>