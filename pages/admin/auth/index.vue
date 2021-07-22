<template>
  <div class="flex flex-col justify-center items-center mt-8">
    <p class="text-center text-xl text-gray-600">🧐 An administator on <span class="font-logo"> WU' BLOG</span> ?</p>
    <p class="mb-8 text-center text-xl text-gray-600">If yes, then login and create posts.</p>
    <form class="w-80 shadow-xl rounded p-5" @submit.prevent="onSubmit">
      <AppControlInput type="email" v-model="email">Email</AppControlInput>
      <AppControlInput type="password" v-model="password">Password</AppControlInput>
      <div class="flex justify-between mt-3">
        <AppButton class="flex-grow" type="submit" btn-style="primary">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton class="flex-grow" type="button" btn-style="inverted" @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/admin');
        });
    },
  },
};
</script>
