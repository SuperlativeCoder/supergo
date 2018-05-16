<template>
  <a class="vs-avatar" @click="HandleMouseClick" @mouseover="HandleMouseOver">
      <Icon v-if="!!icon && !src" :type="icon"></Icon>
      <img v-if="!src && !icon" :class="classes"
        src="../../../assets/default_avatar.png"/>
      <img v-else-if="!!src" :class="classes"
        :src="src"/>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '../../Icon'
import Utils from '../../../utils/Utils'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon
  }
})
export default class Avatar extends Vue {
  name: string = 'Avatar'

  @Prop({ type: String })
  icon: string | undefined

  @Prop({type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['square', 'circle'])
  }})
  shape: string | undefined

  @Prop({type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['small', 'normal', 'large'])
  }})
  size: string | undefined
  
  @Prop({ type: String })
  src: string | undefined

  HandleMouseClick() {
    this.$emit('click')
  }

  HandleMouseOver() {
    this.$emit('mouseover')
  }

  get classes() {
    return [
      {
        [`vs-avatar-size-${this.size}`]: !!this.size,
        [`vs-avatar-shape-${this.shape}`]: !!this.shape
      },
    ]
  }
}
</script>

