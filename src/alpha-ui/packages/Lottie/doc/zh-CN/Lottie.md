<script>
  import * as animationData from '../assets/pinjump.json';

  export default {
    name: 'app',
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      stop: function () {
        this.anim.stop();
      },

      play: function () {
        this.anim.play();
      },

      pause: function () {
        this.anim.pause();
      },

      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
## Lottie动画

> From Airbnb
----------

## 使用范例
> 基础用法
:::demo
```html
<template>
  <div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="3" step="0.5"
              v-on:change="onSpeedChange" v-model="animationSpeed">
  </div>
  <button v-on:click="stop">stop</button>
  <button v-on:click="pause">pause</button>
  <button v-on:click="play">play</button>
  <vs-Lottie :options="defaultOptions" :height="100" :width="100" v-on:animCreated="handleAnimation"/>
</template>
<script>
  import * as animationData from '../assets/pinjump.json';

  export default {
    name: 'app',
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      stop: function () {
        this.anim.stop();
      },

      play: function () {
        this.anim.play();
      },

      pause: function () {
        this.anim.pause();
      },

      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
  }
</script>
```
:::