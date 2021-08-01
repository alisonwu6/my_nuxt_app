<template>
  <div>
    <div class="flex flex-col mb-10">
      <h1 class="text-2xl font-black mb-2 text-gray-800">{{ loadedPost.title }}</h1>
      <div class="info">{{ loadedPost.updatedDate | date }} | Written by {{ loadedPost.author }}</div>
    </div>
    <client-only>
      <div class="contnet leading-loose" v-html="loadedPost.content"></div>
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
  @apply my-4 text-lg text-gray-700 font-extrabold;
}
.contnet >>> pre {
  @apply my-2 text-xs  text-gray-600 bg-blue-200 p-3 rounded overflow-scroll font-semibold;
}
.contnet >>> p {
  @apply m-3 text-lg;
}
.contnet >>> ul {
  @apply list-inside list-disc;
}
.contnet >>> ol {
  @apply list-inside list-decimal;
}
.content >>> hr {
  @apply border-yellow-300 w-48 border-2 mx-auto my-4;
}
</style>