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
import { TweenMax, TimelineMax, Power3 } from "gsap"

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
          const tl = new TimelineMax()
          tl.to(arrowLinkContainer, 0.4, { xPercent: -10, ease: Power3.easeOut }, 0)
            .to(arrowLinkContainer, 0.7, { autoAlpha: 0, xPercent: 50, ease: Power3.easeOut }, 0.2)
        },

        animIn() {
          const arrowLinkContainer = this.$refs.arrowLinkContainer
          TweenMax.fromTo(arrowLinkContainer, 0.4, { autoAlpha: 0, xPercent: 50 }, { autoAlpha: 1, xPercent: 0, ease: Power3.easeOut })
        }
    }
}
</script>