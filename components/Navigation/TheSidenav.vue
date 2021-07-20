<template>
  <div class="w-full h-full">
    <div v-if="show" class="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="bg-blue-500 h-full w-1/3 bg-blue-00 z-50 fixed top-0 left-0">
        <ul class="mt-10" @click="$emit('close')">
          <li
            class="flex-rows text-center p-4 border-b-2 text-white active:bg-white active:text-yellow-400"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    navItems: {
      type: Array,
      require: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
