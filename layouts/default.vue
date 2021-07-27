<template>
  <div class="relative font-body h-full">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" :navItems="navItems" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" :navItems="navItems" />
    <div class="flex flex-col md:grid md:grid-cols-12 gap-10 w-10/12 m-auto mb-24">
      <div class="md:col-span-9">
        <nuxt />
      </div>
      <div class="md:col-span-3">
        <div class="shadow-xl p-5 rounded-b-md border-t-4 border-blue-500">
          <img class="mx-auto my-4 w-24 h-24 rounded-full object-cover" src="../assets/images/wu.jpg" />
          <div class="text-left text-sm leading-6 text-gray-500">
            <p>
              🙋🏻‍♂️ Hi there 🙌🏼 <br />Welcome to <strong>WU'S BLOG</strong>! <br />
              I am a frontend developer. <br />
              I'm gonna share things about coding and thoughts here.
            </p>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheFooter from '@/components/Navigation/TheFooter';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  // middleware: 'log',
  components: {
    TheHeader,
    TheFooter,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
      navItems: [
        // { title: 'Blog', to: '/posts' },
        // { title: 'About', to: '/about' },
        { title: 'Admin', to: '/admin' },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background: rgb(233, 230, 230);
}
</style>
