<template>
  <div class="projects-list" ref="projectList">
    <ProjectBackground ref="backgroundImage1" :backgroundURL="backgroundImages.image1" />
    <ProjectBackground ref="backgroundImage2" :backgroundURL="backgroundImages.image2" />
    <Title ref="titlePrev" :text="prevProjectTitle" classModifier="title--prev" />
    <div
      class="projects-list__link link"
      @click="() => { animateContent('out') }"
      v-on="!touchDevice ? { 
                mouseover: () => { handleHover(this.$refs, 'over')},
                mouseleave: () => { handleHover(this.$refs, 'leave')}
            } : {}"
    >
      <Title ref="currentTitle" showBase :text="currentProjectTitle" />
      <ProjectThumbnail ref="currentProjectImage" :src="currentImageUrl" />
    </div>
    <ProjectCounter
      ref="counter"
      :currentNum="'0' + (currentIndex + 1)"
      :maximumNum="projectTitle.length.toString()"
    />
    <Title ref="titleNext" :text="nextProjectTitle" classModifier="title--next" />
    <div ref="heightBlock" class="height-block"></div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Power3 } from "gsap";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectBackground from "./ProjectBackground";
import Title from "./Title";
import ProjectCounter from "./ProjectCounter";
import vhCheck from 'vh-check'

export default {
  name: "ProjectsList",
  components: {
    ProjectThumbnail,
    ProjectBackground,
    Title,
    ProjectCounter
  },

  props: {
    projectTitle: Array,
    projectImage: Array,
    touchDevice: Boolean
  },

  data() {
    return {
      next: false,
      prev: false,
      currentImageUrl: null,
      currentProjectTitle: null,
      prevProjectTitle: null,
      nextProjectTitle: null,
      currentIndex: 0,
      hoverActive: false,
      projectTitles: this.projectTitle,
      projectImages: this.projectImage,
      backgroundImages: {
        image1: this.projectImage[0],
        image1Active: true,
        image2: this.projectImage[1],
        image2Active: false
      },
      touchStartVal: 0
    };
  },

  mounted() {
    this.updateProject();
    vhCheck();
  },

  methods: {
    updateProject() {
      if (this.next === true) {
        this.handleBackgrounds("down");
        this.animateProjectTitles(this.$refs, "down");
        this.animateProjectImage(this.$refs, "down");
        this.currentIndex += 1;
      } else if (this.prev === true) {
        this.handleBackgrounds("up");
        this.animateProjectTitles(this.$refs, "up");
        this.animateProjectImage(this.$refs, "up");
        this.currentIndex -= 1;
      }

      this.currentIndex = this.getIndex(
        this.currentIndex,
        this.projectTitles.length
      );
      this.currentProjectTitle = this.projectTitles[this.currentIndex];
      this.prevProjectTitle =
        this.currentIndex === 0
          ? this.projectTitles[this.projectTitles.length - 1]
          : this.projectTitles[this.currentIndex - 1];
      this.nextProjectTitle =
        this.currentIndex === this.projectTitles.length - 1
          ? this.projectTitles[0]
          : this.projectTitles[this.currentIndex + 1];
      setTimeout(() => {
        this.currentImageUrl = this.projectImages[this.currentIndex][0];
      }, 500);
    },

    getIndex(currentIndex, projectsLength) {
      return currentIndex === projectsLength
        ? 0
        : currentIndex < 0
        ? projectsLength - 1
        : currentIndex;
    },

    scroll() {
      document.addEventListener("wheel", this.handleScroll, true);
      document.addEventListener("touchstart", (e) => { this.touchStartVal = e.changedTouches[0].clientY })
      document.addEventListener("touchmove", this.handleScroll, true)
    },

    removeScroll () {
      document.removeEventListener("wheel", this.handleScroll, true);
      document.removeEventListener("touchmove", this.handleScroll, true);
    },

    handleScroll(e) {
      if (e.deltaY) {
        if (e.deltaY > 0 && this.next === false && this.prev === false) {
          this.next = true;
          this.prev = false;
          this.updateProject();
        } else if (e.deltaY < 0 && this.prev === false && this.next === false) {
          this.next = false;
          this.prev = true;
          this.updateProject();
        }
      } else if (e.changedTouches) {
        if (e.changedTouches[0].clientY < this.touchStartVal && this.next === false && this.prev === false) {
          this.next = true;
          this.prev = false;
          this.updateProject();
        } else if (e.changedTouches[0].clientY > this.touchStartVal && this.prev === false && this.prev === false) {
          this.next = false;
          this.prev = true;
          this.updateProject();
        }
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.next = false;
        this.prev = false;
      }, 200);
    },

    handleBackgrounds(scrollDirection) {
      let backgroundActive = this.backgroundImages.image1Active ? "image2" : "image1";
      if (scrollDirection === "down") {
        this.backgroundImages[backgroundActive] =
          this.currentIndex === this.projectImages.length - 1
            ? this.projectImages[0]
            : this.projectImages[this.currentIndex + 1];
      } else if (scrollDirection === "up") {
        this.backgroundImages[backgroundActive] =
          this.currentIndex === 0
            ? this.projectImages[this.projectImages.length - 1]
            : this.projectImages[this.currentIndex - 1];
      }
      this.backgroundImages.image1Active = !this.backgroundImages.image1Active;
      this.backgroundImages.image2Active = !this.backgroundImages.image2Active;
      this.animateBackground(this.$refs);
    },

    handleHover(components, action) {
      const currentTitleBase = components.currentTitle.$el.children[0];
      const currentTitleOutline = components.currentTitle.$el.children[1];
      const currentProjectImage = components.currentProjectImage.$el;
      const prevTitle = components.titlePrev.$el.children[0];
      const nextTitle = components.titleNext.$el.children[0];
      const backgroundImage = this.backgroundImages.image1Active
        ? components.backgroundImage1.$el.childNodes[1]
        : components.backgroundImage2.$el.childNodes[1];
      const hoverTL = new TimelineMax();

      if (!this.hoverActive && action === "over") {
        this.hoverActive = true;
        hoverTL
          .to(currentTitleBase, 0.4, { scale: 1.1, ease: Power3.easeOut }, 0)
          .to(currentTitleOutline, 0.4, { scale: 1.1, ease: Power3.easeOut }, 0)
          .to(currentProjectImage, 0.8, { scale: 1.1, ease: Power3.easeOut }, 0)
          .to(prevTitle, 0.4, { yPercent: -50, autoAlpha: 0, ease: Power3.easeOut }, 0)
          .to(nextTitle, 0.4, { yPercent: 50, autoAlpha: 0, ease: Power3.easeOut }, 0)
          .to(backgroundImage, 0.4, { filter: "grayscale(0.7)" }, 0);
      } else if (this.hoverActive && action === "leave") {
        this.hoverActive = false;
        hoverTL
          .to(currentTitleBase, 0.4, { scale: 1, ease: Power3.easeOut }, 0)
          .to(currentTitleOutline, 0.4, { scale: 1, ease: Power3.easeOut }, 0)
          .to(currentProjectImage, 0.8, { scale: 1, ease: Power3.easeOut }, 0)
          .to(prevTitle, 0.4, { yPercent: 0, autoAlpha: 0.3, ease: Power3.easeOut }, 0)
          .to(nextTitle, 0.4, { yPercent: 0, autoAlpha: 0.3, ease: Power3.easeOut }, 0)
          .to(backgroundImage, 0.4, { filter: "grayscale(0)" }, 0);
      }
    },

    animateContent(action) { // being called from app.vue so couldn't pass refs as param
      const currentTitleBase = this.$refs.currentTitle.$el.children[0];
      const currentTitleOutline = this.$refs.currentTitle.$el.children[1];
      const currentProjectImage = this.$refs.currentProjectImage.$el;
      const prevTitle = this.$refs.titlePrev.$el.children[0];
      const nextTitle = this.$refs.titleNext.$el.children[0];
      const backgroundImage = this.backgroundImages.image1Active ? this.$refs.backgroundImage1.$el : this.$refs.backgroundImage2.$el;
      const heightBlock = this.$refs.heightBlock
      const counter = this.$refs.counter.$el;
      const projectList = this.$refs.projectList;
      const animateTL = new TimelineMax();

      if (action === "out") {
        prevTitle.style.display = "none";
        nextTitle.style.display = "none";
        projectList.style.pointerEvents = "none";

        this.removeScroll();
        setTimeout(() => { this.handleHover(this.$refs, "leave") }, 200)
        this.$emit("projectClicked", this.currentIndex);

        const speed = 1
        const delay = 0.2
        animateTL
        .to(currentProjectImage, 0.6 * speed, { autoAlpha: 0, xPercent: 10, ease: Power3.easeOut }, 0 + delay)
        .to(currentTitleBase, 0.4 * speed, { autoAlpha: 0, ease: Power3.easeOut }, 0.2 + delay)
        .to(backgroundImage, 1.8 * speed, { scale: 1, autoAlpha: 0.9, ease: Power3.easeOut }, 0.2 + delay) // BG SCALE
        .to(backgroundImage.childNodes[0], 1.2 * speed, { autoAlpha: 1, ease: Power3.easeOut}, 0.2 + delay) //BLUR OUT
        .to(counter, 0.4 * speed, { autoAlpha: 0, ease: Power3.easeOut }, 0.2 + delay)
        .to(currentTitleBase, 1.2 * speed, { autoAlpha: 1, ease: Power3.easeOut }, 1.2 + delay) // TITLE FILL
        .to(heightBlock, 0.6 * speed, { transform: 'translateY(1px)', ease: Power3.easeOut }, 1.6 + delay) // HEIGHT

      } else if (action === "in") {
        const speed = 1;
        const delay = 1.5;
        animateTL
        .fromTo(currentTitleBase, 0.4 * speed,
            { autoAlpha: 0.001, yPercent: -50, xPercent: -10},
            { autoAlpha: 1, yPercent: -50, xPercent: 0, ease: Power3.easeOut }, 0.1 + delay)
        .fromTo(currentTitleOutline, 0.4 * speed,
            { autoAlpha: 0.001, yPercent: -50, xPercent: -10},
            { autoAlpha: 1, yPercent: -50, xPercent: 0, ease: Power3.easeOut }, 0.1 + delay)
        .fromTo(currentProjectImage, 0.4 * speed, 
            { autoAlpha: 0.001, yPercent: -50, xPercent: `${this.touchDevice ? 15 : 20}`, skewX: -12}, 
            { autoAlpha: 1, yPercent: -50, xPercent: 0, skewX: 0, ease: Power3.easeOut }, 0.3 + delay)
        .fromTo(prevTitle, 0.4 * speed,
            { autoAlpha: 0.001, yPercent: -100, skewX: -20, skewY: -20 },
            { autoAlpha: 0.3, yPercent: 0, skewX: 0, skewY: 0, ease: Power3.easeOut }, 0.5 + delay)
        .fromTo(nextTitle, 0.4 * speed,
            { autoAlpha: 0.001, yPercent: 100, skewX: -20, skewY: 20 },
            { autoAlpha: 0.3, yPercent: 0, skewX: 0, skewY: 0, ease: Power3.easeOut }, 0.5 + delay)
        .fromTo(counter, 0.4 * speed,
            { autoAlpha: 0.001, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, ease: Power3.easeOut }, 0.5 + delay)
        .fromTo(backgroundImage, 1 * speed,
            { autoAlpha: 0.001 },
            { autoAlpha: 0.7 }, 0.9 + delay)
        setTimeout(() => {
          projectList.style.pointerEvents = "all";
          this.scroll();
        }, 2500)
      }
    },

    animateBackground(components) {
      const backgroundImage1 = components.backgroundImage1.$el;
      const backgroundImage2 = components.backgroundImage2.$el;
      const startingPointBG = this.backgroundImages.image1Active ? backgroundImage2 : backgroundImage1;
      const endingPointBG = this.backgroundImages.image1Active ? backgroundImage1 : backgroundImage2;
      
      TweenMax.to(startingPointBG, 1, { autoAlpha: 0, delay: 0.7 })
      TweenMax.to(endingPointBG, 1, { autoAlpha: 0.7, delay: 0.7 });
    },

    animateProjectTitles(components, direction) {
      const currentTitleBase = components.currentTitle.$el.children[0];
      const currentTitleOutline = components.currentTitle.$el.children[1];
      const prevTitle = components.titlePrev.$el.children[0];
      const nextTitle = components.titleNext.$el.children[0];

      TweenMax.from(currentTitleBase, 0.4, {
        autoAlpha: 0,
        yPercent: `${direction === "down" ? "50vh" : "-50vh"}`,
        ease: Power3.easeOut
      });
      TweenMax.from(currentTitleOutline, 0.4, {
        autoAlpha: 0,
        yPercent: `${direction === "down" ? "50vh" : "-50vh"}`,
        ease: Power3.easeOut
      });
      TweenMax.from(prevTitle, 0.4, {
        autoAlpha: 0,
        yPercent: `${direction === "down" ? "50vh" : "-50vh"}`,
        ease: Power3.easeOut
      });
      TweenMax.from(nextTitle, 0.4, {
        autoAlpha: 0,
        yPercent: `${direction === "down" ? "50vh" : "-50vh"}`,
        ease: Power3.easeOut
      });
    },

    animateProjectImage(components) {
      const currentProjectImage = components.currentProjectImage.$el;
      const featuredImageTL = new TimelineMax({paused: true});
      const projectList = components.projectList

      TweenMax.set(projectList, {pointerEvents: 'none'})
      TweenMax.set(projectList, {pointerEvents: 'all', delay: 1.4})

      featuredImageTL.to(currentProjectImage, 0.5,
          {
            autoAlpha: 0.01,
            xPercent: `${this.touchDevice ? 15 : 20}`,
            skewX: -12,
            ease: Power3.easeOut
          }, 0)
        .to(currentProjectImage, 0.6,
          {
            autoAlpha: 1,
            xPercent: 0,
            skewX: 0,
            ease: Power3.easeOut
          }, 0.7);
        featuredImageTL.progress(1).progress(0).play()
    },
  }
};
</script>
