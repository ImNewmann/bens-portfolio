<template>
  <Name class="intro" ref="name" />
</template>
<script>
import gsap from 'gsap';
import Name from './Name';
export default {
  name: 'Intro',
  components: {
    Name,
  },
  mounted() {
    this.introAnimation();
  },

  methods: {
    introAnimation() {
      const name = this.$refs.name.$el;
      const lettersStaggerOut = gsap.timeline();
      const nonInitials = [].slice.call(name.childNodes, 1, -1);

      lettersStaggerOut
        .fromTo(name, 3, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out' })
        .staggerTo(
          nonInitials,
          0.4,
          { autoAlpha: 0, fontSize: 0, ease: 'power3.out' },
          0.02,
          2
        )
        .eventCallback('onComplete', () => {
          this.$emit('introFinished');
        });
    },

    fadeOut() {
      const name = this.$refs.name.$el;
      gsap.to(name, 1, { autoAlpha: 0, ease: 'power3.out' }, 5);
    },
  },
};
</script>
