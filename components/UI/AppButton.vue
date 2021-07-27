<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.primary {
  @apply bg-blue-500 text-white rounded-full inline-block hover:shadow-xl;
}
.inverted {
  @apply bg-transparent text-gray-400  border-gray-400 hover:text-blue-500;
}
.cancel {
  @apply bg-transparent rounded-full text-gray-400 border border-gray-400 hover:text-blue-500 hover:border-blue-500;
}
</style>
