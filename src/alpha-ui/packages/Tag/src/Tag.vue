<template>
  <div :class="classes" :style="{ color: colorText, backgroundColor: color,borderStyle: borderStyle }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import Utils from '@/alpha-ui/utils/Utils';

@Component
export default class Tag extends Vue {
  @Prop({ type: String, validator: function(value){
    return Utils.oneOfProp(value, ['primary', 'success', 'info', 'warning', 'error'])
  }})
  type: string | undefined

  @Prop({ type: String, default: 'mini', validator: function(value){
    return Utils.oneOfProp(value, ['large', 'normal', 'small', 'mini'])
  }})
  size: string | undefined

  @Prop({ type: String })
  color: string | undefined
 
  @Prop({ type: String })
  colorText: string | undefined

  @Prop({ type: Boolean, default: false })
  border: boolean | undefined

  @Prop({ type: String, validator: function(value){
    return Utils.oneOfProp(value, ['solid', 'dotted', 'dashed', 'double'])
  }})
  borderStyle: string | undefined

  @Prop({ type: Boolean, default: false })
  closable: boolean | undefined

  get classes() {
    return [
      `vs-tag`,
      {
        [`vs-tag-type-${this.type}`]: !!this.type,
        [`vs-tag-size-${this.size}`]: !!this.size,
        [`vs-tag-no-border`]: !this.border,
      }
    ]
  }
}
</script>

