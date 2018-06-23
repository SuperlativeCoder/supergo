<template>
  <div :class="classes" 
    v-show="visable"
    :style="{ color: colorText, backgroundColor: color,borderStyle: borderStyle }">
    <slot></slot>
    <a @click="handleClose"
      v-show="closable"
      style="margin-left: 5px; cursor: pointer; color: rgba(0,0,0, 0.3)">
      <vs-Icon type="android-close" size="14px"></vs-Icon>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Icon from '../../Icon'
import Utils from '@/alpha-ui/utils/Utils'

@Component({
  components: {
    Icon,
  }
})
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

  visable: boolean = true

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

  handleClose(event: any) {
    this.visable = false
    this.$emit('click', event)
  }
}
</script>

