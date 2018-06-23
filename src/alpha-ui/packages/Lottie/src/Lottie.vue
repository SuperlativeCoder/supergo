<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

const lottie = require('lottie-web');

@Component
export default class Lottie extends Vue {
  @Prop({ type: Object })
  options: object | undefined

  @Prop({ type: Number })
  height: number | undefined

  @Prop({ type: Number })
  width: number | undefined

  mounted() {
    (this as any).anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: (this.options as any).loop !== false,
        autoplay: (this.options as any).autoplay !== false,
        animationData: (this.options as any).animationData,
        rendererSettings: (this.options as any).rendererSettings
      }
    )
    this.$emit('animCreated', (this as any).anim)
  }

  get style() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  }
}
</script>


