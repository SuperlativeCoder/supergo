<template>
  <div :class="classes" v-if="visible">
    <div class="vs-alert-left">
      <vs-Icon :type="icons" v-if="!!iconable && iconable"></vs-Icon>
    </div>
    <div class="vs-alert-left">
      <label>{{ title }}</label>
      <span>{{ description }}</span>
    </div>
    <a class="vs-alert-right" @click="handlerClose" v-if="!!closable && closable">
      <vs-Icon type="android-close" v-if="!closeText || closeText.trim() == ''"></vs-Icon>
      <span v-else>{{ closeText }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import Utils from '@/alpha-ui/utils/Utils';

@Component
export default class Alert extends Vue {
  @Prop({ type: String })
  title: string | undefined

  @Prop({ type: String, validator: function(value){
    return Utils.oneOfProp(value, ['success', 'info', 'warning', 'error'])
  }})
  type: string | undefined

  @Prop({ type: String })
  description: string | undefined

  @Prop({ type: String })
  closeText: string | undefined

  @Prop({ type: Boolean, default: false })
  closable: boolean | undefined

  @Prop({ type: Boolean, default: false })
  center: boolean | undefined

  @Prop({ type: Boolean, default: false })
  iconable: boolean | undefined

  visible: boolean = true

  get icons() {
    switch(this.type) {
      case 'success': return 'checkmark-circled';
      case 'info': return 'information-circled';
      case 'warning': return 'android-warning';
      case 'error': return 'close-circled';
      default: return 'information-circled';
    }
  }

  get classes() {
    return [
      `vs-alert`,
      {
        [`vs-alert-type-${this.type}`]: !!this.type,
        [`vs-alert-icon`]: !!this.iconable && this.iconable,
        [`vs-alert-align-center`]: !!this.center && this.center
      }
    ]
  }

  handlerClose(event: any) {
    this.visible = false
    this.$emit('on-close', event)
  }
}
</script>

