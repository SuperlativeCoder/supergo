<template>
  <i :class="classes" :style="styles"></i>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

const prefixCls = 'vs-icon'

@Component
export default class Icon extends Vue {
  @Prop({ type: String })
  type: string | undefined
  @Prop({ type: [String, Number]})
  size: number | string | undefined
  @Prop({ type: String })
  color: string | undefined
  @Prop({ type: [String, Number] })
  spin: string | number | undefined

  get styles() {
    let style:any = {}

    if (this.size) {
      style['font-size'] = `${this.size}`
    }

    if (this.color) {
      style['color'] = `${this.color}`
    }

    if (this.spin) {
      style['transform'] = `rotate(${this.spin}deg)`
      style['-moz-transform'] = `rotate(${this.spin}deg)`
      style['-ms-transform'] = `rotate(${this.spin}deg)`
      style['-webkit-transform'] = `rotate(${this.spin}deg)`
    }
    return style
  }

  get classes() {
    return `${prefixCls} ${prefixCls}-${this.type}`
  }
}
</script>


