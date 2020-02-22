<template>
  <div class="project">
    <div ref="projectHeader" class="project__header">
      <ProjectBackground :backgroundURL="currentProjImage" />
      <Title showBase :text="currentProjTitle" />
      <div class="height-block"></div>
    </div>
    <div class="project__content">
      <div class="about-project">
        <div class="about-project__item">
          <ul>
            <li>Year</li>
            <li
              class="list__item"
            >{{this.projects[this.currentIndex].year}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li>Role</li>
            <li
              class="list__item"
            >{{this.projects[this.currentIndex].role}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li>Technology</li>
            <li
              class="list__item"
              v-for="item in projects[this.currentIndex].technology"
              :key="item.index"
            >{{item}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li
              class="list__item"
            >{{this.projects[this.currentIndex].description}}</li>
          </ul>
        </div>
        <a
          :href="this.projects[this.currentIndex].link"
          class="about-project__visit-link link"
          target="_blank"
        >Visit Project</a>
      </div>
      <div class="project__content-logo-container">
        <div class="image image--logo"
          v-for="imageURL in projects[this.currentIndex].logo"
          :key="imageURL.index">
          <img :src="imageURL" />
        </div>
      </div>
      <div class="image image--desktop"
        v-for="imageURL in projects[this.currentIndex].imagesDesktop"
        :key="imageURL.index">
        <img :src="imageURL" />
      </div>
      <div class="project__content-mobile-container">
        <div
          class="image image--mobile"
          v-for="imageURL in projects[this.currentIndex].imagesMobile"
          :key="imageURL.index">
          <img :src="imageURL" />
        </div>
      </div>
    </div>
    <div ref="projectFooter" class="project__footer">
      <Title showBase :text="nextProjTitle" />
      <ProjectBackground :backgroundURL="nextProjImage" />
      <ArrowLink 
      :touchDevice="touchDevice" 
      @hover="(val) => { handleNextHover(this.animElems, val) }" 
      @clicked="() => { this.animateOut(this.animElems) }"
      ref="nextLink"
      text="VIEW PROJECT"
      />
      <div ref="heightBlock" class="height-block"></div>
    </div>
  </div>
</template>
<script>
import { TweenMax, TimelineMax, Power3 } from "gsap";
import 'intersection-observer' //Polyfill
import ProjectBackground from "./ProjectBackground";
import Title from "./Title";
import ArrowLink from './ArrowLink'
import vhCheck from 'vh-check'
import projectData from '../data/projectData'

export default {
  name: "Project",
  components: {
    ProjectBackground,
    Title,
    ArrowLink
  },

  props: {
    index: Number,
    projectImage: Array,
    projectTitle: String,
    nextProjectTitle: String,
    nextProjectImage: Array,
    touchDevice: Boolean
  },

  data: () => ({
    animationActive: false,
    projects: projectData,
    currentProjImage: null,
    currentProjTitle: null,
    nextProjImage: null,
    nextProjTitle: null,
    currentIndex: null,
    animElems: {},
  }),

  created() {
    this.currentIndex = this.index
    this.currentProjImage = this.projectImage
    this.currentProjTitle = this.projectTitle
    this.nextProjTitle = this.nextProjectTitle
    this.nextProjImage = this.nextProjectImage
  },

  watch: {
    index: function() {
      this.updateProjects()
    }
  },

  mounted () {
    vhCheck()
    this.animElems = this.getAnimatableElements(this.$refs)
    this.initObserver('.image', this.fadeIn, 200, 0.25, false)
    this.initObserver('.about-project ul', this.fadeIn, 200, 1, true)
    this.initObserver('.about-project__visit-link', this.fadeIn, 200, 1, true)
  },

  methods: {
    getAnimatableElements (refs) {
      const body = document.querySelector('body')
      const { projectFooter } = refs;
      const nextProjectTitle = projectFooter.childNodes[0].childNodes[0];
      const nextProjectBG = projectFooter.childNodes[1];
      const nextProjectBGScale = nextProjectBG.childNodes[0];
      const nextLink = projectFooter.childNodes[2];
      const heightBlock = refs.heightBlock;

      return {
        body,
        nextProjectTitle,
        nextProjectBG,
        nextProjectBGScale,
        nextLink,
        heightBlock
      }
    },

    initObserver(targetElements, cb, y, t, isText) {
      const targets = document.querySelectorAll(targetElements)
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: t,
      }
      targets.forEach(target => {
        const observer = new IntersectionObserver((entries, observer) => {
          if (entries[0].intersectionRatio < options.threshold) return
          cb(target, y, isText)
          observer.disconnect();
        }, options); 
        observer.observe(target)
      })
    },

    fadeIn(el, y, isText) {
      TweenMax.fromTo(el, 1.4,
          { autoAlpha: 0, y: y, scaleY: isText ? 1.5 : 1 },
          { autoAlpha: 1, y: 0, scaleY: 1, ease: Power3.easeOut })
          .eventCallback('onComplete', () => {
            el.style.willChange = 'auto'
          })
    },

    resetNextProjectStyles(components) {
      const images = document.querySelectorAll('.image')
      const listItems = document.querySelectorAll('.about-project ul')
      
      TweenMax.set(components.nextProjectBGScale, { scale: 2, autoAlpha: 0 });
      TweenMax.set(components.nextProjectBG, { autoAlpha: 0.6, height: "100vh" });
      TweenMax.set(components.nextProjectTitle, { autoAlpha: 0 });
      TweenMax.set(components.nextLink, { autoAlpha: 1, xPercent: 0 });
      TweenMax.set(components.heightBlock, { transform: 'translateY(100%)' });

      images.forEach(image => {
        TweenMax.set(image, { autoAlpha: 0 });
      })

      listItems.forEach(item => {
        TweenMax.set(item, { autoAlpha: 0 });
      })
    },

    animateOut(components) {
      const tl = new TimelineMax();

      this.animationActive = true;
      this.$emit("projectClicked");
      window.scroll(0, document.body.scrollHeight)
      tl
        .set(components.body, {overflow: 'hidden'}, 0.2)
        .to(components.nextProjectBGScale, 1.4, { scale: 1, autoAlpha: 1, rotation: 0, ease: Power3.easeOut }, 0.2)
        .to(components.nextProjectBG, 1.4, { autoAlpha: 0.9, ease: Power3.easeOut }, 0.2)
        .to(components.nextProjectTitle, 1, { autoAlpha: 1, ease: Power3.easeOut }, 0.8)
        .to(components.heightBlock, 0.6, { transform: 'translateY(1px)', ease: Power3.easeOut }, 1.2) // HEIGHT

        setTimeout(() => {
          this.$emit("updateIndex", this.index + 1);
        }, 1800)
    },

    handleNextHover(components, action) {
      const tl = new TimelineMax();
      if (action === "over" && !this.animationActive) {
        tl.to(components.nextProjectBGScale, 0.8, { rotation: 7, scale: 2.2, autoAlpha: 1, ease: Power3.easeOut }, 0)
          .to(components.nextProjectTitle, 1, { autoAlpha: 1, ease: Power3.easeOut }, 0);
      } else if (action === "leave" && !this.animationActive) {
        tl.to(components.nextProjectBGScale, 0.8, { rotation: 0, scale: 2, autoAlpha: 0, ease: Power3.easeOut }, 0)
          .to(components.nextProjectTitle, 1, { autoAlpha: 0, ease: Power3.easeOut }, 0);
      }
    },

    updateProjects() {
      this.currentProjImage = this.projectImage
      this.currentProjTitle = this.projectTitle

      setTimeout(() => {
        vhCheck({force: true})
        window.scroll(0, 0)
      }, 300)

      setTimeout(() => {
        this.currentIndex = this.index
        this.nextProjImage = this.nextProjectImage
        this.nextProjTitle = this.nextProjectTitle
        this.resetNextProjectStyles(this.animElems);
        this.$nextTick(() => {
          this.initObserver('.image', this.fadeIn, 200, 0.25, false)
          this.initObserver('.about-project ul', this.fadeIn, 200, 1, true)
          this.initObserver('.about-project__visit-link', this.fadeIn, 200, 1, true)
          this.animationActive = false;
          this.animElems.body.style.overflow = 'inherit'
        })
      }, 350)
    }
  }
};
</script>
