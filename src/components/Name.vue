<template>
  <div
    ref="name"
    class="name link"
    @click="onClick"
    v-on="
      !touchDevice
        ? {
            mouseover: mouseOver,
            mouseleave: mouseLeave,
          }
        : {}
    "
  >
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
import gsap from 'gsap';

export default {
  name: 'Name',
  props: {
    touchDevice: Boolean,
  },

  methods: {
    mouseOver() {
      const { name } = this.$refs;
      const nonInitials = [].slice.call(name.childNodes, 1, -1);
      const tl = gsap.timeline();
      tl.staggerTo(
        nonInitials,
        0.4,
        {
          autoAlpha: 1,
          fontSize: `${this.touchDevice ? '6vw' : 30}`,
          ease: 'power3.out',
        },
        0.02
      );
    },
    mouseLeave() {
      const { name } = this.$refs;
      const nonInitials = [].slice.call(name.childNodes, 1, -1);
      const tl = gsap.timeline();
      tl.staggerTo(
        nonInitials,
        0.4,
        { autoAlpha: 0, fontSize: 0, ease: 'power3.out' },
        0.02
      );
    },
    onClick() {
      window.location.reload();
    },
    fadeOut() {
      const { name } = this.$refs;
      gsap.to(
        name,
        0.4,
        { autoAlpha: 0, x: -50, skewX: 16, ease: 'power3.out' },
        0
      );
    },
    fadeIn() {
      const { name } = this.$refs;
      gsap.fromTo(
        name,
        0.4,
        { autoAlpha: 0, x: -50, skewX: 16 },
        { autoAlpha: 0.9, x: 0, skewX: 0, ease: 'power3.out' },
        0
      );
    },
  },
};
</script>
