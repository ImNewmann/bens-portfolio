<template>
    <div class="cursor" :class="{'cursor--show': isActive, 'cursor--moving': isMoving, 'cursor--link': onLink}">
        <div class="cursor__inner" :style="{'left': mouseX + 'px', 'top': mouseY + 'px'}" ></div>
        <div class="cursor__outer" :style="{'left': cssLeft + 'px', 'top': cssTop + 'px'}"></div>
    </div>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax'

export default {
  name: 'CustomCursor',
  props: {
    onLink: Boolean,
  },

  data: () => ({
    isActive: false,
    isMoving: false,
    timeout: null,
    posX: 0,
    posY: 0,
    mouseX: 0,
    mouseY: 0,
    cssLeft: 0,
    cssTop: 0,
  }),

  mounted () {
    this.initializeCursor();
    this.animateCursor();
  },

  methods: {
    initializeCursor () {
      document.addEventListener('mousemove', e => {
        this.isActive = true;
        this.isMoving = true;
        this.mouseX = e.pageX;
        this.mouseY = e.pageY;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.isMoving = false;
        }, 200)
      })
    },

    animateCursor () {
      TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: () => {
          this.posX += (this.mouseX - this.posX) / 9;
          this.posY += (this.mouseY - this.posY) / 9;
          this.cssLeft = this.posX
          this.cssTop = this.posY
        }
      });
    }
  }
}
</script>
