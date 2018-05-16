<template>
  <div :class="classes">   
    <slot>&nbsp;</slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '../../Icon'
import { Component, Prop } from 'vue-property-decorator'
import Utils from '@/alpha-ui/utils/Utils'

@Component({
  components: {
    Icon
  }
})
export default class Sider extends Vue {
  @Prop({ type: String, validator(val) {
    return Utils.oneOfProp(val, ['left', 'right'])
  }})
  align: string | undefined

  get classes() {
    return [
      'vs-sider',
      {
        [`vs-sider-${this.align}`]: !!this.align 
      }
    ]
  }
}
</script>

