<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Utils from '../../../utils/Utils'
import { Prop, Watch, Component } from 'vue-property-decorator'

@Component
export default class Row extends Vue {
  @Prop({ type: Number, default: 0 })
  gutter: number = 0

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['flex'])
  }})
  type: string | undefined

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['start', 'end', 'center', 'space-around', 'space-between'])
  }})
  justify: string | undefined

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['top', 'middle', 'bottom'])
  }})
  align: string | undefined

  @Watch('gutter')
  onGutterChanged(val: number) {
    this.updateGutter(val)
  }

  get classes() {
    return [
      {
        [`vs-row`]: !this.type,
        [`vs-row-${this.type}`]: !!this.type,
        [`vs-row-${this.type}-align-${this.align}`]: !!this.align,
        [`vs-row-${this.type}-justify-${this.justify}`]: !!this.justify
      }
    ]
  }

  get styles() {
    let style = {}
    if (this.gutter !== 0) {
      style = {
        marginLeft: this.gutter / -2 + 'px',
        marginRight: this.gutter / -2 + 'px'
      }
    }
    return style
  }

  updateGutter(val: number) {
    this.$children.forEach(child => {
      if (val !== 0) {
        (child as any).gutter = val
      }
    })
  }

  ready() {
    this.updateGutter(this.gutter)
  }
}
</script>

