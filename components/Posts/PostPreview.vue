<template>
  <div class="flex shadow-xl rounded">
    <nuxt-link :to="postLink" class="flex flex-grow flex-col-reverse md:flex-row md:justify-between">
      <article class="w-full px-2 py-1">
        <div class="mb-2">
          <span class="text-gray-400 text-sm">{{ post.updatedDate | date }}</span>
          <AppTag />
        </div>
        <h1 class="text-2xl text-bold text-gray-800 font-semibold">{{ post.title }}</h1>
        <p class="text-sm text text-gray-500">{{ post.previewText }}</p>
      </article>
      <div class="w-full h-52 md:w-48 md:h-32 rounded-sm">
        <img class="w-full h-full object-cover" :src="post.thumbnail" :alt="post.title" />
      </div>
    </nuxt-link>
    <div v-if="isAdmin" class="w-10 flex justify-center items-center text-gray-400" @click="deletePost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 hover:text-red-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
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
      return this.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id;
    },
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.post.id);
    },
  },
};
</script>
