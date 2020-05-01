<template>
    <section ref="about" class="about">
        <div class="about__bg" :style="{backgroundImage: `url(${aboutImageURL})`}" ref="aboutBG"/>
        <div class="about__desc">
            <div class="about__desc-text">
                <p v-html="aboutDescription" ref="aboutText"></p>
                <div ref="link">
                    <a href='mailto:newman1602@gmail.com' class='link'>Let's talk</a>
                </div>
            </div>
        </div>
        <ArrowLink text="GO BACK" @clicked=" () => { animOut(this.$refs) }" :touchDevice="touchDevice" ref="backLink"/>
    </section>
</template>
<script>
import ArrowLink from './ArrowLink'
import gsap from "gsap"
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
        const { about, aboutBG, aboutText, backLink, link } = components
        const aboutTL = gsap.timeline()
        const speed = 1
        const delay = 0
        aboutTL.to(about, 0.6 * speed, {scaleY: 1, ease: 'power3.out'}, 0 + delay)
            .to(aboutBG, 1 * speed, {autoAlpha: 1}, 0.4 + delay)
            .from(aboutText, 0.6, {xPercent: 10, scaleX: 1.2, autoAlpha: 0, ease: 'power3.out'}, 0.8 + delay)
            .from(link, 0.6, {autoAlpha: 0, xPercent: -10, ease: 'power3.out'}, 1 + delay)
        setTimeout(() => {
            backLink.animIn()
        }, 1200)
      },

      animOut(components) {
        const { about, aboutBG, aboutText, link } = components
        const aboutTL = gsap.timeline()
        this.$emit('toggleAboutView')
        
        aboutTL.to(link, 0.6, {autoAlpha: 0, xPercent: 10, ease: 'power3.out'}, 0.4)
               .to(aboutText, 0.6, {xPercent: 10, autoAlpha: 0, ease: 'power3.out'}, 0.6)
               .to(aboutBG, 1, {autoAlpha: 0, ease: 'power3.out'}, 0.8)
               .to(about, 0.6, {scaleY: 0, ease: 'power3.out'}, 1.2)
      }
    }
}
</script>