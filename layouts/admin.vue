<template>
  <div class="font-body">
    <header class="bg-blue-500 h-20 flex justify-center items-center mb-10">
      <Logo />
    </header>
    <nuxt />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
