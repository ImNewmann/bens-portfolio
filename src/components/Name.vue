<template>
    <div ref="name" 
        class="name link"
        @click="onClick" 
        v-on="!touchDevice ? { 
            mouseover: mouseOver,
            mouseleave: mouseLeave
        } : {}">
        <span>B</span>
        <span>E</span>
        <span>N</span>
        <span>N</span>
        <span>E</span>
        <span>W</span>
        <span>M</span>
        <span>A</span>
        <span>N</span>
    </div>
</template>
<script>
import { TweenMax, TimelineMax, Power3 } from 'gsap'
export default {
    name: 'Name',
    props: {
        touchDevice: Boolean,
    },

    methods: {
        mouseOver () {
            const { name } = this.$refs
            const nonInitials = [].slice.call(name.childNodes, 1, -1);
            const tl = new TimelineMax()
            tl.staggerTo(nonInitials, .4, {autoAlpha: 1, fontSize: `${this.touchDevice ? '6vw' : 30}`, ease: Power3.easeOut}, 0.02)
        },
        mouseLeave() {
            const { name } = this.$refs
            const nonInitials = [].slice.call(name.childNodes, 1, -1);
            const tl = new TimelineMax()
            tl.staggerTo(nonInitials, .4, {autoAlpha: 0, fontSize: 0, ease: Power3.easeOut}, 0.02)
        },
        onClick () {
            location.reload()
        },
        fadeOut () {
            const { name } = this.$refs
            TweenMax.to(name, 0.4, {autoAlpha: 0, x: -50, skewX: 16, ease: Power3.easeOut}, 0)
        },
        fadeIn () {
            const { name } = this.$refs
            TweenMax.fromTo(name, 0.4, 
                {autoAlpha: 0, x: -50, skewX: 16},
                {autoAlpha: 0.9, x: 0, skewX: 0, ease: Power3.easeOut}, 0)
        }
    }
}
</script>