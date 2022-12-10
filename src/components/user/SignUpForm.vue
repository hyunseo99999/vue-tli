<template>
  <div>
    <form @submit.prevent="formSubmit" ref="form">
      <div>
        <label for="username">id:</label>
        <input type="text" id="username" v-model="username" data-required="true">
      </div>
      <div>
        <label for="password">password:</label>
        <input type="text" id="password" v-model="password" >
      </div>
      <div>
        <label for="nickname">nickname:</label>
        <input type="text" id="nickname" v-model="nickname" >
      </div>
      <button type="submit">회원가입</button>
    </form>
    {{ logMessage}}
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';
export default {
  data: () => ({
    username: null,
    password: null,
    nickname: null,
    logMessage: null,
  }),
  methods: {
    async formSubmit() {
      let { data } = await registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname
      });

      console.log(data.username);
      this.logMessage = `${data.username} 님 회원가입을 축하드립니다`;
    }

    /*validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }*/
  }
};
</script>