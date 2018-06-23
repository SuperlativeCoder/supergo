<template>
  <button
    :class="classes"
    @click="handleClick"
    :disabled="disabled"
    :type="type">
      <vs-Icon :type="icon" v-if="!!icon && !loading"></vs-Icon>
      <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Utils from '../../../utils/Utils'
import { Component, Prop } from 'vue-property-decorator'
import { EventEmitter } from 'events'

@Component
export default class Button extends Vue {

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['small', 'large', 'default', 'mini'])
  }})
  size: string | undefined

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['primary', 'ghost', 'text', 'info', 'success', 'warning', 'error', 'default'])
  }})
  type: string | undefined

  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: String })
  nativeType: string | undefined

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['circle', 'round'])
  }})
  shape: string | undefined

  @Prop({ type: Boolean, default: false })
  disabled: boolean | undefined

  @Prop({ type: Boolean, default: false })
  loading: boolean | undefined
  
  @Prop({ type: Boolean, default: false })
  plain: boolean | undefined

  @Prop({ type: Boolean, default: false })
  long: boolean | undefined

  get classes() {
    return [
      `vs-button`,
      {
        [`vs-button-size-${this.size}`]: !!this.size,
        [`vs-button-shape-${this.shape}`]: !!this.shape,
        [`vs-button-type-${this.type}`]: !!this.type,
        [`vs-button-long`]: !!this.long && this.long,
        [`vs-button-loading`]: !!this.loading && this.loading,
        [`vs-button-icon-only`]: !!this.icon || this.loading,
        [`vs-button-disabled`]: !!this.disabled && this.disabled,
      }
    ]
  }

  handleClick(event: any) {
    this.$emit('click', event)
  }
}
</script>

