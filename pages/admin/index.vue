<template>
  <div class="w-10/12 m-auto">
    <section class="flex justify-between">
      <AppButton class="px-3" btn-style="primary" @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton class="" btn-style="inverted" @click="onLogout">Logout</AppButton>
    </section>
    <section>
      <h1 class="text-xl text-gray-600 mt-6 mb-4">Existing Posts:</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/admin/auth');
    },
  },
};
</script>
