<template>
  <div ref="aboutProject" class="about-project">
    <div class="about-project__item">
      <ul>
        <li>Year</li>
        <li class="list__item">{{ year }}</li>
      </ul>
    </div>
    <div class="about-project__item">
      <ul>
        <li>Role</li>
        <li class="list__item">{{ role }}</li>
      </ul>
    </div>
    <div class="about-project__item">
      <ul>
        <li>Technology</li>
        <li class="list__item" v-for="item in technology" :key="item.index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="about-project__item">
      <ul>
        <li class="list__item">{{ description }}</li>
      </ul>
    </div>
    <a :href="link" class="about-project__visit-link link" target="_blank">
      Visit Project
    </a>
  </div>
</template>

<script>
import gsap from 'gsap';
import observe from '@/utilities/observe.js';

export default {
  name: 'ProjectDescription',
  props: {
    year: String,
    role: String,
    technology: Array,
    description: String,
    link: String,
  },

  mounted() {
    observe('.about-project', this.animIn, 1);
  },

  updated() {
    this.resetStyles();
    this.$nextTick(() => observe('.about-project', this.animIn, 0.3));
  },

  methods: {
    animIn(el) {
      gsap.fromTo(
        el,
        1,
        { autoAlpha: 0, scaleY: 2, y: 200 },
        { autoAlpha: 1, scaleY: 1, y: 0, ease: 'power3.out' }
      );
    },

    resetStyles() {
      gsap.set(this.$refs.aboutProject, { autoAlpha: 0 });
    },
  },
};
</script>
