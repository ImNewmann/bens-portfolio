<template>
  <nav>
    <Name :touchDevice="touchDevice" ref="name" />
    <div class="nav-links" ref="navLinks">
      <ul>
        <li
          class="nav-links__item link"
          :class="{ active: aboutView }"
          @click="aboutClicked"
        >
          About Me
        </li>
        <li class="nav-links__item link">
          <a href="mailto:newman1602@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import gsap from 'gsap';
import Name from './Name';

export default {
  name: 'NavLinks',
  components: {
    Name,
  },

  props: {
    aboutView: Boolean,
    touchDevice: Boolean,
  },
  mounted() {
    this.animIn(1300);
  },
  methods: {
    aboutClicked() {
      this.$emit('aboutClicked');
    },

    handleNavAnimations(fadeOutDelay, fadeInDelay) {
      this.animOut(fadeOutDelay);
      this.animIn(fadeInDelay);
    },

    animIn(delay) {
      const navLinks = this.$refs.navLinks;
      const name = this.$refs.name;
      setTimeout(() => {
        gsap.fromTo(
          navLinks,
          0.4,
          { autoAlpha: 0, xPercent: 50, skewX: -16 },
          { autoAlpha: 1, xPercent: 0, skewX: 0, ease: 'power3.out' }
        );
        name.fadeIn();
      }, delay);
    },

    animOut(delay) {
      const navLinks = this.$refs.navLinks;
      const name = this.$refs.name;
      setTimeout(() => {
        gsap.to(
          navLinks,
          0.4,
          { autoAlpha: 0, xPercent: 50, skewX: -16, ease: 'power3.out' },
          0
        );
        name.fadeOut();
      }, delay);
    },
  },
};
</script>
