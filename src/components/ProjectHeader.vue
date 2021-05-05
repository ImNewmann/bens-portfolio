<template>
    <section class="project__header">
        <ProjectBackground :backgroundURL="image" />
        <Title showBase :text="title" />
        <div class="height-block"></div>
    </section>
</template>

<script>
import ProjectBackground from '@/components/ProjectBackground';
import Title from '@/components/Title';

export default {
    name: 'ProjectHeader',
    components: {
        ProjectBackground,
        Title,
    },
    props: {
        image: Array,
        title: String,
    },
};
</script>
