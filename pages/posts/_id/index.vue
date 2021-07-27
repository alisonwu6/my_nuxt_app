<template>
  <div>
    <div class="flex flex-col mb-10">
      <h1 class="text-2xl font-black mb-2 text-gray-800">{{ loadedPost.title }}</h1>
      <div class="info">{{ loadedPost.updatedDate | date }} | Written by {{ loadedPost.author }}</div>
    </div>
    <client-only>
      <pre class="contnet" v-html="loadedPost.content"></pre>
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
.contnet >>> h1 {
  @apply mt-2 text-lg text-gray-700 font-extrabold;
}
.contnet >>> pre {
  @apply text-xs leading-loose text-gray-600 bg-blue-200 p-3 rounded overflow-scroll font-semibold;
}
.contnet >>> p {
  @apply list-inside list-decimal;
}
.contnet >>> ul {
  @apply list-inside list-disc;
}
.contnet >>> ol {
  @apply list-inside list-decimal;
}
.content >>> hr {
  @apply border-yellow-300 w-48 border-2 m-auto;
}
</style>