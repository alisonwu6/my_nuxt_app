<template>
  <section>
    <AdminPostForm @submit="onSubmitted" />
  </section>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin');
      });
    },
  },
};
</script>
