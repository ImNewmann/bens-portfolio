<template>
  <div :class="['title', classModifier]">
    <h1 v-if="showBase" class="title__base" v-html="text"></h1>
    <h1 class="title__outline" v-html="text"></h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String,
    classModifier: String,
    showBase: Boolean
  }
}
</script>
