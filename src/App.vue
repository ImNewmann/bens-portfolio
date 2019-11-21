// ACTIONS
// THROTTLE INTERNET AND PERFORMANCE IN BROWSER
<template>
  <div id="app" :class="{'about-overlay': aboutView}">
    <About v-if="aboutView" @toggleAboutView="toggleAboutView" :touchDevice="touchDevice" :aboutImageURL="aboutImage"/>
    <CustomCursor v-if="!touchDevice" :onLink="isOnLink" ref="Cursor"/>
    <NavLinks v-if="showNav" @aboutClicked="toggleAboutView" ref="navLinks" :aboutView="aboutView" :touchDevice="touchDevice"/>
    <Intro @introFinished="introFinished = true" :touchDevice="touchDevice" ref="Intro"/>
    <ProjectsList
      :touchDevice="touchDevice"
      v-if="listView"
      @projectClicked="loadProjectView"
      :projectTitle="projectTitles"
      :projectImage="projectImages"
      ref="projectsList"
    />
    <Project
      :touchDevice="touchDevice"
      v-if="projectView"
      @projectClicked="loadProjectView"
      :currentIndex="currentIndex"
      :projectImage="projectImages[currentIndex]"
      :projectTitle="projectTitles[currentIndex]"
      :nextProjectImage="projectImages[currentIndex === this.projectTitles.length - 1 ? 0 : currentIndex + 1]"
      :nextProjectTitle="projectTitles[currentIndex === this.projectTitles.length - 1 ? 0 : currentIndex + 1]"
      ref="project"
    />
  </div>
</template>

<script>
import CustomCursor from "./components/Cursor";
import NavLinks from './components/NavLinks';
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import Project from "./components/Project";
import About from "./components/About";
import projectData from './data/projectData';
import vhCheck from 'vh-check';

export default {
  name: "app",
  components: {
    CustomCursor,
    NavLinks,
    Intro,
    ProjectsList,
    Project,
    About
  },

  data: () => ({
    touchDevice: false,
    showNav: false,
    isOnLink: false,
    introFinished: false,
    projectView: false,
    listView: true,
    aboutView: false,
    currentIndex: 0,
    aboutImage: require('./assets/images/portrait.png'),
    projectImages: projectData.map(i => i.projectImage),
    projectTitles: projectData.map(i => i.projectTitle)
  }),

  created() {
    this.touchDevice = this.isTouchDevice();
  },

  mounted() {
    const imagesToLoad = this.projectImages.concat(this.aboutImage).reduce((acc, val) => acc.concat(val), []);
    Promise.all(imagesToLoad.map(this.preloadImages)).then(() => {
      this.loadProjectListView();
    });
  },

  updated() {
    this.$nextTick(() => {
      this.handleLinkAnimations();
    });
  },

  methods: {
    preloadImages(path) {
      return new Promise(resolve => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve({ path, status: "ok" });
      });
    },
    loadProjectListView() {
      const interval = setInterval(() => {
        if (this.introFinished) {
          this.$refs.Intro.fadeOut();
          clearInterval(interval);
          this.$refs.projectsList.animateContent("in");
          this.showNav = true;
        }
      }, 50);
    },
    loadProjectView(val) {
      this.isOnLink = false;
      this.handleNavAnimations(this.listView ? 400 : 200, this.listView ? 2200 : 2000)
      setTimeout(() => {
        this.currentIndex = val === this.projectTitles.length ? 0 : val;
        window.scrollTo(0, 0);
      }, 1800)
      setTimeout(() => {
        this.projectView = true;
      }, 2000)
      setTimeout(() => {
        this.$refs.project.$el.style.opacity = '1'
        this.$refs.project.$el.style.visibility = 'visible'
        this.listView = false;
      }, 2400)
    },
    toggleAboutView() {
      if (this.aboutView === false) {
        vhCheck({force: true})
        this.handleNavAnimations(0, 2200);
        this.isOnLink = false;
        this.aboutView = true
      } else if (this.aboutView === true) {
          this.isOnLink = false;
          this.handleNavAnimations(200, 2400);
          setTimeout(() => this.aboutView = false, 2400)
      }
    },
    handleLinkAnimations() {
      const links = document.querySelectorAll(".link");
      links.forEach(link => {
        link.addEventListener("mouseenter", () => {
          this.isOnLink = true;
        });
        link.addEventListener("mouseleave", () => {
          this.isOnLink = false;
        });
      });
    },
    handleNavAnimations(fadeOutDelay, fadeInDelay) {
      setTimeout(() => {
        this.$refs.navLinks.animOut(0);
      }, fadeOutDelay)

      setTimeout(() => {
        this.$refs.navLinks.animIn();
      }, fadeInDelay)
    },
    isTouchDevice() {
      window.addEventListener('touchstart', () => { this.touchDevice = true })
      window.addEventListener('mousemove', () => { this.touchDevice = false })
    },
  }
}
</script>