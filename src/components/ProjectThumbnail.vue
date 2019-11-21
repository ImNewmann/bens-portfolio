<template>
    <div class="project-thumbnail">
        <img :src="src" :alt="alt" class="project-thumbnail__image">
    </div>
</template>
<script>
export default {
    name: 'ProjectThumbnail',
    props: {
        src: String,
        alt: String
    }
}
</script>