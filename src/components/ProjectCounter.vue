<template>
    <div class="counter">
        <span class="counter--min">{{ currentNum }}</span>
        <span class="counter--max">/ {{ maximumNum }}</span>
    </div>
</template>
<script>
export default {
    name: 'ProjectsCounter',
    props: {
        currentNum: String,
        maximumNum: String,
    },
};
</script>
