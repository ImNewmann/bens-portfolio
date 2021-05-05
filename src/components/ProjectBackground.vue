<template>
    <div class="project-background">
        <div class="project-background__item" :style="{ backgroundImage: `url(${backgroundURL[0]})` }"></div>
        <div
            class="project-background__item blur"
            :style="{ backgroundImage: `url(${backgroundURL[1]})` }"
        ></div>
    </div>
</template>
<script>
export default {
    name: 'ProjectBackground',
    props: {
        backgroundURL: Array,
    },
};
</script>
