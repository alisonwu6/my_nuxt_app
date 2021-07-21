<template>
  <nuxt-link :to="postLink">
    <article class="flex flex-col-reverse md:flex-row md:justify-between shadow-xl rounded mb-6">
      <div class="w-full p-4">
        <div class="mb-2">
          <span class="text-gray-400 text-sm">{{ post.updatedDate | date }}</span>
          <AppTag />
        </div>
        <h1 class="text-2xl text-bold text-gray-800 font-semibold">{{ post.title }}</h1>
        <p class="text-sm text text-gray-500">{{ post.previewText }}</p>
      </div>
      <div class="w-full h-52 md:w-48 md:h-32 rounded-sm">
        <img class="w-full h-full object-cover" :src="post.thumbnail" :alt="post.title" />
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import AppTag from '@/components/UI/AppTag.vue';
export default {
  name: 'PostPreview',
  components: {
    AppTag,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.post.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id;
    },
  },
};
</script>
