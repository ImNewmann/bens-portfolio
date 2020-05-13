<template>
  <div class="title">
    <h1 v-if="showBase" class="title__base" v-html="text"></h1>
    <h1 class="title__outline" v-html="text"></h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String,
    showBase: Boolean,
  },
};
</script>
