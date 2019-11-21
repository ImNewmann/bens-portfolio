<template>
    <section ref="about" class="about">
        <div class="about__bg" :style="{backgroundImage: `url(${aboutImageURL})`}" ref="aboutBG"/>
        <div ref="aboutBlock" class="about__desc">
            <div class="about__desc-text" ref="aboutText">
                <p v-html="aboutDescription"></p>
                <a href='mailto:newman1602@gmail.com' class='link'>Let's talk</a>
            </div>
        </div>
        <ArrowLink text="GO BACK" @clicked=" () => { animOut(this.$refs) }" :touchDevice="touchDevice" ref="backLink"/>
    </section>
</template>
<script>
import ArrowLink from './ArrowLink'
import { TimelineMax, Power3 } from "gsap"
import vhCheck from 'vh-check'

export default {
    name: 'About',
    props: {
        touchDevice: Boolean,
        aboutImageURL: String
    },
    components: {
        ArrowLink,
    },

    data: () => ({
        aboutDescription: "Hello. My name is Ben Newman. I'm a Web Designer & Developer based in London, UK. I'm currently available for work opportunities."
    }),

    mounted () {
        setTimeout(() => { 
            this.animIn(this.$refs) 
            vhCheck();
        }, 400)
    },

    methods: {
      animIn(components) {
        const { about, aboutBG, aboutBlock, aboutText, backLink } = components
        const aboutTL = new TimelineMax({paused: true})
        const speed = 1
        const delay = 0
        aboutTL.to(about, 0.6 * speed, {scaleY: 1, ease: Power3.easeOut}, 0 + delay)
            .to(aboutBG, 1 * speed, {autoAlpha: 1}, 0.4 + delay)
            .from(aboutBlock, 0.6, {scaleX: 0, autoAlpha: 0, ease: Power3.easeOut}, 0.6 + delay)
            .fromTo(aboutBlock, 0.6, {scaleY: 0.1}, {scaleY: 1, ease: Power3.easeOut}, 1 + delay)
            .fromTo(aboutText, 0.6, 
                {autoAlpha: 0, xPercent: 30, ease: Power3.easeOut}, 
                {xPercent: 0, autoAlpha: 1, ease: Power3.easeOut }, 1.3 + delay)
        
        aboutTL.progress(1).progress(0).play()
        setTimeout(() => {
            backLink.animIn()
        }, 1600)
      },

      animOut(components) {
        const { about, aboutBG, aboutBlock, aboutText } = components
        const aboutTL = new TimelineMax()
        this.$emit('toggleAboutView')
        
        aboutTL.to(aboutText, 0.6, {autoAlpha: 0, ease: Power3.easeOut}, 0.4)
               .to(aboutBlock, 0.6, {scaleY: 0.1, ease: Power3.easeOut}, 0.6)
               .to(aboutBlock, 0.6, {scaleX: 0, ease: Power3.easeOut}, 1)
               .to(aboutBG, 1, {autoAlpha: 0, ease: Power3.easeOut}, 1.4)
               .to(about, 0.6, {scaleY: 0, ease: Power3.easeOut}, 1.8)
      }
    }
}
</script>