<template>
  <div class="font-body">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" :navItems="navItems" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" :navItems="navItems" />
    <div class="w-10/12 mx-auto my-8 grid md:grid-cols-12 gap-10">
      <div class="md:col-span-9">
        <nuxt />
      </div>
      <div class="md:col-span-3">
        <div class="shadow-xl rounded p-5 flex-rows justify-center">
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
