<template>
  <div class="project">
    <div ref="projectHeader" class="project__header">
      <ProjectBackground :backgroundURL="projectImage" />
      <Title showBase :text="projectTitle" />
      <div class="height-block"></div>
    </div>
    <div class="project__content">
      <div class="about-project">
        <div class="about-project__item">
          <ul>
            <li>Year</li>
            <li
              class="list__item"
            >{{this.projects[currentIndex].year}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li>Role</li>
            <li
              class="list__item"
            >{{this.projects[currentIndex].role}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li>Technology</li>
            <li
              class="list__item"
              v-for="item in projects[currentIndex].technology"
              :key="item.index"
            >{{item}}</li>
          </ul>
        </div>
        <div class="about-project__item">
          <ul>
            <li
              class="list__item"
            >{{this.projects[currentIndex].description}}</li>
          </ul>
        </div>
        <a
          :href="this.projects[currentIndex].link"
          class="about-project__visit-link link"
          target="_blank"
        >Visit Project</a>
      </div>
      <div class="project__content-logo-container">
        <div class="image image--logo"
          v-for="imageURL in projects[currentIndex].logo"
          :key="imageURL.index">
          <img :src="imageURL" />
        </div>
      </div>
      <div class="image image--desktop"
        v-for="imageURL in projects[currentIndex].imagesDesktop"
        :key="imageURL.index">
        <img :src="imageURL" />
      </div>
      <div class="project__content-mobile-container">
        <div
          class="image image--mobile"
          v-for="imageURL in projects[currentIndex].imagesMobile"
          :key="imageURL.index">
          <img :src="imageURL" />
        </div>
      </div>
    </div>
    <div ref="projectFooter" class="project__footer">
      <Title showBase :text="nextProjectTitle" />
      <ProjectBackground :backgroundURL="nextProjectImage" />
      <ArrowLink 
      :touchDevice="touchDevice" 
      @hover="(val) => { handleNextHover(this.$refs, val) }" 
      @clicked="() => { this.animateOut(this.$refs) }"
      ref="nextLink"
      text="VIEW PROJECT"
      />
      <div ref="heightBlock" class="height-block"></div>
    </div>
  </div>
</template>
<script>
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
    currentIndex: Number,
    projectImage: Array,
    projectTitle: String,
    nextProjectTitle: String,
    nextProjectImage: Array,
    touchDevice: Boolean
  },

  data: () => ({
    animationActive: false,
    projects: projectData,
  }),

  updated() {
    this.resetNextProjectStyles(this.$refs)
    this.initObserver('.image', this.fadeIn, 200, 0.25)
    this.initObserver('.about-project ul', this.fadeIn, 200, 1)
  },

  mounted () {
    vhCheck()
    this.initObserver('.image', this.fadeIn, 200, 0.25)
    this.initObserver('.about-project ul', this.fadeIn, 200, 1)
  },

  methods: {
    initObserver(targetElements, cb, y, t) {
      const targets = document.querySelectorAll(targetElements)
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: t,
      }
      targets.forEach(target => {
        const observer = new IntersectionObserver((entries, observer) => {
          if (entries[0].intersectionRatio < options.threshold) return
          cb(target, y)
          observer.disconnect();
        }, options); 
        observer.observe(target)
      })
    },

    fadeIn(el, y) {
      TweenMax.fromTo(el, 1.4,
          { autoAlpha: 0, y: y },
          { autoAlpha: 1, y: 0, ease: Power3.easeOut })
    },

    resetNextProjectStyles(components) {
      const { projectFooter } = components;
      const nextProjectTitle = projectFooter.childNodes[0].childNodes[0];
      const nextProjectBG = projectFooter.childNodes[1];
      const nextProjectBGScale = nextProjectBG.childNodes[0];
      const nextLink = projectFooter.childNodes[2];
      const heightBlock = components.heightBlock;
      const images = document.querySelectorAll('.image')
      const listItems = document.querySelectorAll('.about-project ul')

      TweenMax.set(nextProjectBGScale, { scale: 2, autoAlpha: 0 });
      TweenMax.set(nextProjectBG, { autoAlpha: 0.6, height: "100vh" });
      TweenMax.set(nextProjectTitle, { autoAlpha: 0 });
      TweenMax.set(nextLink, { autoAlpha: 1, xPercent: 0 });
      TweenMax.set(heightBlock, { transform: 'translateY(100%)' });

      images.forEach(image => {
        TweenMax.set(image, { autoAlpha: 0 });
      })

      listItems.forEach(item => {
        TweenMax.set(item, { autoAlpha: 0 });
      })
    },

    animateOut(components) {
      const html = document.querySelector('html')
      const { projectFooter } = components;
      const nextProjectTitle = projectFooter.childNodes[0].childNodes[0];
      const nextProjectBG = projectFooter.childNodes[1];
      const nextProjectBGScale = nextProjectBG.childNodes[0];
      const heightBlock = components.heightBlock;
      const scrollPlugin = ScrollToPlugin;

      const tl = new TimelineMax();
      vhCheck({force: true})
      this.animationActive = true;
      this.$emit("projectClicked", this.currentIndex + 1);

      tl.to(window, 5, {scrollTo: document.body.scrollHeight}, 0)
        .set(html, {overflow: 'hidden'}, 0.2)
        .to(nextProjectBGScale, 1.4, { scale: 1, autoAlpha: 1, rotation: 0, ease: Power3.easeOut }, 0.2)
        .to(nextProjectBG, 1.4, { autoAlpha: 0.9, ease: Power3.easeOut }, 0.2)
        .to(nextProjectTitle, 1, { autoAlpha: 1, ease: Power3.easeOut }, 0.8)
        .to(heightBlock, 0.6, { transform: 'translateY(1px)', ease: Power3.easeOut }, 1.2) // HEIGHT
        .eventCallback("onComplete", () => {
          this.animationActive = false;
          html.style.overflow = 'inherit'
        });
    },

    handleNextHover(components, action) {
      const { projectFooter } = components;
      const nextProjectTitle = projectFooter.childNodes[0].childNodes[0];
      const nextProjectBGScale = projectFooter.childNodes[1].childNodes[0];

      if (action === "over" && !this.animationActive) {
        TweenMax.to(nextProjectBGScale, 0.8, { rotation: 7, scale: 2.2, autoAlpha: 1, ease: Power3.easeOut }, 0);
        TweenMax.to(nextProjectTitle, 1, { autoAlpha: 1, ease: Power3.easeOut }, 0);
      } else if (action === "leave" && !this.animationActive) {
        TweenMax.to(nextProjectBGScale, 0.8, { rotation: 0, scale: 2, autoAlpha: 0, ease: Power3.easeOut }, 0);
        TweenMax.to(nextProjectTitle, 1, { autoAlpha: 0, ease: Power3.easeOut }, 0);
      }
    }
  }
};
</script>