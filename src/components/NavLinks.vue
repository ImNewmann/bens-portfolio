<template>
    <nav>
        <Name :touchDevice="touchDevice" ref="name"/>
        <div class="nav-links" ref="navLinks">
            <ul>
                <li class="nav-links__item link" :class="{'active': aboutView}" @click="aboutClicked">
                    About Me
                </li>
                <li class="nav-links__item link">
                    <a href="mailto:newman1602@gmail.com">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { TweenMax, Power3 } from "gsap"
import Name from './Name'
 
export default {
    name: 'NavLinks',
    components: {
        Name
    },
    
    props: {
        aboutView: Boolean,
        touchDevice: Boolean
    },
    mounted () {
        this.animIn(1300);
    },
    methods: {
        aboutClicked () {
            this.$emit('aboutClicked')
        },

        animIn(delay) {
            const navLinks = this.$refs.navLinks
            const name = this.$refs.name
            setTimeout(() => { 
                TweenMax.to(navLinks, 0.4, {autoAlpha: 1, transform: 'translateX(0)', ease: Power3.easeOut})
                name.fadeIn() 
            }, delay);
        },

        animOut() {
            const navLinks = this.$refs.navLinks
            const name = this.$refs.name
            TweenMax.to(navLinks, 0.4, {autoAlpha: 0, transform: 'translateX(100%)', ease: Power3.easeOut}, 0)
            name.fadeOut();
        }
    }
}
</script>