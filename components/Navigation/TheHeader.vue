<template>
  <div class="bg-blue-500 h-20 flex justify-center">
    <header class="flex justify-between items-center w-10/12">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div>
        <Logo />
      </div>
      <ul class="hidden md:flex">
        <li
          class="
            ml-5
            px-
            pb-1
            text-white
            transform
            hover:scale-110
            hover:text-yellow-400
            transition
            ease-out
            duration-200
            font-bold
          "
          v-for="(item, index) in navItems"
          :key="index"
        >
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle';

export default {
  name: 'TheHeader',
  components: {
    Logo,
    TheSideNavToggle,
  },
  props: {
    navItems: {
      type: Array,
      require: true,
    },
  },
};
</script>
