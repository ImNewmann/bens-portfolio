<template>
  <main class="project">
    <ProjectHeader
      ref="projectHeader"
      :image="currentProjImage"
      :title="currentProjTitle"
    />
    <section class="project__content">
      <ProjectDescription
        :year="projects[this.currentIndex].year"
        :role="projects[this.currentIndex].role"
        :technology="projects[this.currentIndex].technology"
        :description="projects[this.currentIndex].description"
        :link="projects[this.currentIndex].link"
      />
      <div class="project__content-logo-container">
        <div
          class="image image--logo"
          v-for="imageURL in projects[this.currentIndex].logo"
          :key="imageURL.index"
        >
          <img :src="imageURL" />
        </div>
      </div>
      <div
        class="image image--desktop"
        v-for="imageURL in projects[this.currentIndex].imagesDesktop"
        :key="imageURL.index"
      >
        <img :src="imageURL" />
      </div>
      <div class="project__content-mobile-container">
        <div
          class="image image--mobile"
          v-for="imageURL in projects[this.currentIndex].imagesMobile"
          :key="imageURL.index"
        >
          <img :src="imageURL" />
        </div>
      </div>
    </section>
    <ProjectFooter
      :image="nextProjImage"
      :title="nextProjTitle"
      :touchDevice="touchDevice"
      @projectClicked="
        () => {
          this.$emit('projectClicked');
        }
      "
      @updateIndex="
        () => {
          this.$emit('updateIndex', this.index + 1);
        }
      "
    />
  </main>
</template>
<script>
import gsap from 'gsap';
import observe from '@/utilities/observe.js';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectFooter from '@/components/ProjectFooter';
import vhCheck from 'vh-check';
import projectData from '../data/projectData';

export default {
  name: 'Project',
  components: {
    ProjectHeader,
    ProjectDescription,
    ProjectFooter,
  },

  props: {
    index: Number,
    projectImage: Array,
    projectTitle: String,
    nextProjectTitle: String,
    nextProjectImage: Array,
    touchDevice: Boolean,
  },

  data: () => ({
    projects: projectData,
    currentProjImage: null,
    currentProjTitle: null,
    nextProjImage: null,
    nextProjTitle: null,
    currentIndex: null,
  }),

  created() {
    this.currentIndex = this.index;
    this.currentProjImage = this.projectImage;
    this.currentProjTitle = this.projectTitle;
    this.nextProjTitle = this.nextProjectTitle;
    this.nextProjImage = this.nextProjectImage;
  },

  watch: {
    index: function() {
      this.updateProjects();
    },
  },

  mounted() {
    vhCheck();
    observe('.image', this.fadeIn, 0.3);
  },

  methods: {
    fadeIn(el) {
      gsap.fromTo(el, 0.6, { scale: 0.9 }, { scale: 1, ease: 'power3.out' });
    },

    updateProjects() {
      this.currentProjImage = this.projectImage;
      this.currentProjTitle = this.projectTitle;

      setTimeout(() => {
        vhCheck({ force: true });
        window.scroll(0, 0);
      }, 300);

      setTimeout(() => {
        this.currentIndex = this.index;
        this.nextProjImage = this.nextProjectImage;
        this.nextProjTitle = this.nextProjectTitle;
        this.$nextTick(() => observe('.image', this.fadeIn, 0.3));
      }, 350);
    },
  },
};
</script>
