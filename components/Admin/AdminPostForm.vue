<template>
  <form class="mx-4 md:mx-auto md:w-1/2" @submit.prevent="onSave">
    <AppControlInput type="text" v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput type="text" v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput type="text" v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput type="text" control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput type="text" control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
    <div class="flex mt-3 w-52">
      <AppButton class="flex-grow" btn-style="primary" type="submit">Save</AppButton>
      <AppButton class="flex-grow" btn-style="inverted" type="button" @click="onCancel">Cancel</AppButton>
    </div>
  </form>
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
      // Save the post
      this.$emit('submit', this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    },
  },
};
</script>
