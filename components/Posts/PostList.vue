<template>
  <section>
    <PostPreview v-for="post in posts" :key="post.id" :is-admin="isAdmin" :post="post" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
