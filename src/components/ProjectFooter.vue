<template>
  <section class="project__footer">
    <ProjectBackground ref="nextProjectBG" :backgroundURL="image" />
    <Title ref="nextProjectTitle" showBase :text="title" />
    <ArrowLink
      :touchDevice="touchDevice"
      @hover="
        (onHover) => {
          handleNextHover(this.animElems, onHover);
        }
      "
      @clicked="
        () => {
          this.animateOut(this.animElems);
        }
      "
      ref="nextLink"
      text="VIEW PROJECT"
    />
    <div ref="heightBlock" class="height-block"></div>
  </section>
</template>

<script>
import gsap from 'gsap';
import ProjectBackground from '@/components/ProjectBackground';
import Title from '@/components/Title';
import ArrowLink from '@/components/ArrowLink';

export default {
  name: 'ProjectHeader',
  components: {
    ProjectBackground,
    Title,
    ArrowLink,
  },
  props: {
    image: Array,
    title: String,
    touchDevice: Boolean,
  },

  data: () => ({
    animationActive: null,
  }),

  mounted() {
    this.animElems = this.getAnimatableElements(this.$refs);
  },

  watch: {
    title() {
      this.resetNextProjectStyles(this.animElems);
    },
  },

  methods: {
    getAnimatableElements(refs) {
      const body = document.querySelector('body');
      const { nextProjectTitle, nextProjectBG, nextLink, heightBlock } = refs;

      return {
        body,
        nextProjectTitle: nextProjectTitle.$el.childNodes[0],
        nextProjectBG: nextProjectBG.$el,
        nextProjectBGScale: nextProjectBG.$el.childNodes[0],
        nextLink: nextLink.$el,
        heightBlock,
      };
    },

    handleNextHover(components, onHover) {
      if (this.animationActive) return;

      const tl = gsap.timeline();
      tl.to(
        components.nextProjectBGScale,
        0.8,
        {
          rotation: onHover ? 7 : 0,
          scale: onHover ? 2.2 : 2,
          autoAlpha: onHover ? 1 : 0,
          ease: 'power3.out',
        },
        0
      ).to(
        components.nextProjectTitle,
        1,
        { autoAlpha: onHover ? 1 : 0, ease: 'power3.out' },
        0
      );
    },

    animateOut(components) {
      const tl = gsap.timeline();

      this.animationActive = true;
      this.$emit('projectClicked');
      window.scroll(0, document.body.scrollHeight);
      tl.set(components.body, { overflow: 'hidden' }, 0.2)
        .to(
          components.nextProjectBGScale,
          1.4,
          { scale: 1, autoAlpha: 1, rotation: 0, ease: 'power3.out' },
          0.2
        )
        .to(
          components.nextProjectBG,
          1.4,
          { autoAlpha: 0.9, ease: 'power3.out' },
          0.2
        )
        .to(
          components.nextProjectTitle,
          1,
          { autoAlpha: 1, ease: 'power3.out' },
          0.8
        )
        .to(
          components.heightBlock,
          0.6,
          { transform: 'translateY(1px)', ease: 'power3.out' },
          1.2
        ); // HEIGHT

      setTimeout(() => {
        this.$emit('updateIndex', this.index + 1);
        this.animationActive = false;
        this.animElems.body.style.overflow = 'inherit';
      }, 1800);
    },

    resetNextProjectStyles(components) {
      const images = document.querySelectorAll('.image');

      gsap.set(components.nextProjectBGScale, { scale: 2, autoAlpha: 0 });
      gsap.set(components.nextProjectBG, { autoAlpha: 0.6, height: '100vh' });
      gsap.set(components.nextProjectTitle, { autoAlpha: 0 });
      gsap.set(components.nextLink, { autoAlpha: 1, xPercent: 0 });
      gsap.set(components.heightBlock, { transform: 'translateY(100%)' });

      // images.forEach(image => gsap.set(image, { scale: 0.9 }));
      images.forEach((image) => image.classList.remove('enter'));
    },
  },
};
</script>
