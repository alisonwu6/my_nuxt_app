<template>
  <div class="flex flex-col justify-center items-center mt-8">
    <p class="text-center text-xl text-gray-600">🧐 An administator on <span class="font-logo"> WU' BLOG</span> ?</p>
    <p class="mb-8 text-center text-xl text-gray-600">If yes, then login and create posts.</p>

    <div
      v-if="errorMessage"
      class="
        transition-height
        duration-500
        ease-in-out
        w-80
        shadow-sm
        bg-red-50
        flex
        justify-between
        items-center
        rounded
        border-1
        mb-4
        px-4
        py-3
        text-sm text-red-400
      "
    >
      <span>{{ errorMessage }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2 h-4 w-4 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="errorMessage = null"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>

    <form class="w-80 shadow-xl rounded p-5" @submit.prevent="onSubmit">
      <AppControlInput v-model="form.email">Email</AppControlInput>
      <AppControlInput type="password" v-model="form.password">Password</AppControlInput>
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
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      form: {
        email: '',
        password: '',
      },
      errorMessage: null,
    };
  },
  validations: {
    form: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    onSubmit() {
      if (!this.$v.form.email.required || !this.$v.form.password.required) {
        this.errorMessage = 'Incorrect username or password.';
        return;
      } else {
        this.$store
          .dispatch('authenticateUser', {
            isLogin: this.isLogin,
            email: this.form.email,
            password: this.form.password,
          })
          .then(() => {
            this.$router.push('/admin');
          })
          .catch((e) => {
            this.errorMessage = 'Incorrect username or password.';
          });
      }
    },
  },
};
</script>
