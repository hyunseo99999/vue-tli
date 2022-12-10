<template>
  <div>
    <h1>회원가입 페이지</h1>
    <SignUpForm></SignUpForm>
  </div>
</template>

<script>
import SignUpForm from "@/components/user/SignUpForm";
export default {
  name: "SignUpPage",
  components: {SignUpForm}
}
</script>

<style scoped>

</style>