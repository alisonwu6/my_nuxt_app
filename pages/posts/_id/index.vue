<template>
  <div>
    <div class="flex flex-col mb-6">
      <h1 class="text-2xl font-black mb-2 text-gray-800">{{ loadedPost.title }}</h1>
      <div class="flex flex-col">
        <div class="info">{{ loadedPost.updatedDate | date }}</div>
        <div class="info">Written by {{ loadedPost.author }}</div>
      </div>
    </div>
    <client-only>
      <div class="contnet" v-html="loadedPost.content"></div>
    </client-only>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get('/posts/' + context.params.id + '.json')
      .then((data) => {
        return {
          loadedPost: data,
        };
      })
      .catch((e) => context.error(e));
  },
};
</script>

<style scoped>
.contnet >>> pre {
  @apply text-sm text-gray-600 bg-blue-200 p-3 rounded overflow-scroll;
}
.contnet >>> h2 {
  @apply mt-5 mb-3 text-lg text-gray-700 font-extrabold;
}

.contnet >>> ul {
  @apply list-inside list-disc mb-5;
}

.contnet >>> ol {
  @apply list-inside list-decimal mb-5;
}

.contnet >>> p {
  @apply list-inside list-decimal mb-5;
}
</style>