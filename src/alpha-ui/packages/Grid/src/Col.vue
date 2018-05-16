<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Utils from '../../../utils/Utils'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class Col extends Vue {
  @Prop({ type: Number })
  offset: number | undefined

  @Prop({ type: Number })
  order: number | undefined

  @Prop({ type: Number })
  pull: number | undefined

  @Prop({ type: Number })
  push: number | undefined

  @Prop({ type: Number })
  span: number | undefined

  @Prop({ type: Number })
  xs: number | undefined

  @Prop({ type: Number })
  md: number | undefined

  @Prop({ type: Number })
  lg: number | undefined

  @Prop({ type: Number })
  xl: number | undefined

  @Prop({ type: Number })
  xxl: number | undefined

  gutter: number = 0

  get classes() {
    let classList = [
      `vs-col`,
      {
        [`vs-col-span-${this.span}`]: !!this.span,
        [`vs-col-order-${this.order}`]: !!this.order,
        [`vs-col-offset-${this.offset}`]: !!this.offset,
        [`vs-col-push-${this.push}`]: !!this.push,
        [`vs-col-pull-${this.pull}`]: !!this.pull,
      }
    ]
    return classList
  }

  get styles() {
    let style = {}
    if (this.gutter !== 0) {
      style = {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
    return style
  }
}
</script>

