<template>
    <Name class="intro" ref="name"/>
</template>
<script>
import { TweenMax, TimelineMax, Power3 } from 'gsap'
import Name from './Name'
export default {
    name: 'Intro',
    components: {
        Name
    },
    mounted () {
        this.introAnimation();
    },
    
    methods: {
        introAnimation () {
            const name = this.$refs.name.$el
            const lettersStaggerOut = new TimelineMax()
            const nonInitials = [].slice.call(name.childNodes, 1, -1);
            
            lettersStaggerOut.fromTo(name, 3, 
            {autoAlpha: 0},
            {autoAlpha: 1, ease: Power3.easeOut})
            .staggerTo(nonInitials, .4, {autoAlpha: 0, fontSize: 0, ease: Power3.easeOut}, 0.02, 2)
            .eventCallback('onComplete', () => { 
                this.$emit('introFinished')
            })
        },

        fadeOut() {
            const name = this.$refs.name.$el
            TweenMax.to(name, 1, {autoAlpha: 0, ease: Power3.easeOut}, 5)
        }
    }
}
</script>