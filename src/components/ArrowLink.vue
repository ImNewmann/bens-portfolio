<template>
    <div class="arrow-link link" ref="arrowLinkContainer"
        v-on="!touchDevice ? { 
                mouseover: () => { handleHover(this.$refs, true) },
                mouseleave: () => { handleHover(this.$refs, false) }
            } : {}"
        @click="() => { 
          this.$emit('clicked');
          this.animOut(); 
        }">
        <span class="animated-arrow" ref="arrowLink">
          <span class="the-arrow -left">
            <span class="shaft"></span>
          </span>
          <span class="main">
            <span class="text">{{text}}</span>
            <span class="the-arrow -right">
              <span class="shaft"></span>
            </span>
          </span>
        </span>
      </div>
</template>
<script>
import gsap from "gsap"

export default {
    name: 'ArrowLink',
    props: {
      touchDevice: Boolean,
      text: String
    },

    methods: {
        handleHover(components, onHover) {
          const { arrowLink } = components;
          if (onHover) {
            arrowLink.classList.add("hover");
          } else {
            arrowLink.classList.remove("hover");
          }
          this.$emit('hover', onHover)
        },

        animOut () {
          const arrowLinkContainer = this.$refs.arrowLinkContainer
          const tl = gsap.timeline()
          tl.to(arrowLinkContainer, 0.4, { xPercent: -10, ease: 'power3.out' }, 0)
            .to(arrowLinkContainer, 0.7, { autoAlpha: 0, xPercent: 50, ease: 'power3.out' }, 0.2)
        },

        animIn() {
          const arrowLinkContainer = this.$refs.arrowLinkContainer
          gsap.fromTo(arrowLinkContainer, 0.4, { autoAlpha: 0, xPercent: 50 }, { autoAlpha: 1, xPercent: 0, ease: 'power3.out' })
        }
    }
}
</script>