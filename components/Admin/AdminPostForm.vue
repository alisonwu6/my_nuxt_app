<template>
  <div class="mx-4 md:mx-auto md:w-3/4 mb-24">
    <button class="flex bg-blue-500 text-white rounded-full px-2 py-1 hover:shadow-lg" @click="$router.push('/admin')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        />
      </svg>
      Back
    </button>
    <form @submit.prevent="onSave">
      <AppControlInput type="text" v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput type="text" v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput type="text" v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
      <AppControlInput type="text" control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
      <AppControlInput type="text" control-type="textarea" v-model="editedPost.previewText"
        >Preview Text</AppControlInput
      >
      <div class="flex justify-end mt-3 w-full">
        <AppButton class="w-36 mr-2" btn-style="cancel" type="button" @click="onCancel">Cancel</AppButton>
        <AppButton class="w-36" btn-style="primary" type="submit">Save</AppButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
          },
    };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost);
    },
    onCancel() {
      this.$router.push('/admin');
    },
  },
};
</script>
