<template>
    <div id="app" ref="app" :class="{ 'about-overlay': aboutView }">
        <About
            v-if="aboutView"
            @toggleAboutView="toggleAboutView"
            :touchDevice="touchDevice"
            :aboutImageURL="aboutImage"
        />
        <CustomCursor v-if="!touchDevice" ref="Cursor" />
        <NavLinks
            v-if="showNav"
            @aboutClicked="toggleAboutView"
            ref="navLinks"
            :aboutView="aboutView"
            :touchDevice="touchDevice"
        />
        <Intro
            v-if="showIntro"
            @introFinished="introFinished = true"
            :touchDevice="touchDevice"
            ref="Intro"
        />
        <ProjectsList
            v-if="listView"
            ref="projectsList"
            :touchDevice="touchDevice"
            @projectClicked="loadProjectView"
            :projectTitle="projectTitles"
            :projectImage="projectImages"
        />
        <Project
            v-if="projectView"
            ref="project"
            :touchDevice="touchDevice"
            @updateIndex="updateIndexFromProj"
            @projectClicked="
                () => {
                    this.$refs.navLinks.handleNavAnimations(200, 1800);
                }
            "
            :index="currentIndex"
            :projectImage="projectImages[currentIndex]"
            :projectTitle="projectTitles[currentIndex]"
            :nextProjectImage="
                projectImages[currentIndex === this.projectTitles.length - 1 ? 0 : currentIndex + 1]
            "
            :nextProjectTitle="
                projectTitles[currentIndex === this.projectTitles.length - 1 ? 0 : currentIndex + 1]
            "
        />
    </div>
</template>

<script>
import CustomCursor from '@/components/Cursor';
import NavLinks from '@/components/NavLinks';
import Intro from '@/components/Intro';
import ProjectsList from '@/templates/ProjectsList';
import Project from '@/templates/Project';
import About from '@/components/About';
import projectData from '@/data/projectData';
import vhCheck from 'vh-check';

export default {
    name: 'app',
    components: {
        CustomCursor,
        NavLinks,
        Intro,
        ProjectsList,
        Project,
        About,
    },

    data: () => ({
        touchDevice: false,
        showIntro: true,
        showNav: false,
        introFinished: false,
        projectView: false,
        listView: true,
        aboutView: false,
        currentIndex: 0,
        aboutImage: require('./assets/images/portrait.png'),
        projectImages: projectData.map((i) => i.projectImage),
        projectTitles: projectData.map((i) => i.projectTitle),
    }),

    mounted() {
        const imagesToLoad = this.projectImages
            .concat(this.aboutImage)
            .reduce((acc, val) => acc.concat(val), []);
        const initialImages = imagesToLoad.slice(0, 2);

        imagesToLoad.map(this.preloadImages); // load all images on site.

        this.isTouchDevice();

        Promise.all(initialImages.map(this.preloadImages)).then(() => {
            this.loadProjectListView();
        });
    },

    updated() {
        this.$nextTick(() => {
            if (!this.touchDevice) this.$refs.Cursor.handleLinkAnimations();
        });
    },

    methods: {
        preloadImages(path) {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve({ path, status: 'ok' });
            });
        },

        loadProjectListView() {
            this.$watch(
                'introFinished',
                (newVal) => {
                    if (newVal) {
                        this.$refs.Intro.fadeOut();
                        this.$refs.projectsList.animateContent('in');
                        this.showNav = true;

                        setTimeout(() => {
                            this.showIntro = false;
                        }, 1000);
                    }
                },
                { immediate: true }
            );
        },

        loadProjectView(val) {
            this.$refs.navLinks.handleNavAnimations(400, 2200);
            this.updateIndexFromProj(val);

            setTimeout(() => {
                this.projectView = true;
            }, 2000);

            setTimeout(() => {
                this.$refs.project.$el.style.opacity = '1';
                this.$refs.project.$el.style.visibility = 'visible';
                this.listView = false;
            }, 2400);
        },

        toggleAboutView() {
            if (!this.aboutView) {
                vhCheck({ force: true });
                this.$refs.navLinks.handleNavAnimations(0, 1800);
                this.aboutView = true;
            } else if (this.aboutView) {
                this.$refs.navLinks.handleNavAnimations(200, 2000);
                setTimeout(() => (this.aboutView = false), 1900);
            }
        },

        updateIndexFromProj(val) {
            this.currentIndex = val === this.projectTitles.length ? 0 : val;
        },

        isTouchDevice() {
            window.addEventListener('touchstart', () => {
                this.touchDevice = true;
            });
            window.addEventListener('mousemove', () => {
                this.touchDevice = false;
            });
        },
    },
};
</script>
