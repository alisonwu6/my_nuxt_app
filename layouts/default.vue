<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" :navItems="navItems" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" :navItems="navItems" />
    <nuxt class="mb-4" />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  // middleware: 'log',
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
      navItems: [
        { title: 'Blog', to: '/posts' },
        { title: 'About', to: '/about' },
        { title: 'Admin', to: '/admin' },
      ],
    };
  },
};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
