<template>
  <li :class="classes">
    <div :class="['vs-sub-menu-title', { 
        [`vs-sub-menu-title-disabled`]: !!disabled && disabled,
        [`vs-sub-menu-title-opened`]: !!this.opened && this.opened && this.opened
      }]"
      @click="handleClick">
      <slot name="title"></slot>
      <Icon type="ios-arrow-down" class="vs-sub-menu-title-icon"></Icon>
    </div>
    <transition name="collapse-transition">
      <ul v-if="opened">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '../../Icon'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    Icon
  }
})
export default class SubMenu extends Vue {
  @Prop({ type: Boolean, default: false })
  disabled: boolean | undefined

  opened: boolean = false

  handleClick() {
    if(this.disabled) return
    const opened = this.opened
    this.opened = !opened
  }
  get classes() {
    return [
      `vs-sub-menu`,
      {
        [`vs-sub-menu-opened`]: !!this.opened && this.opened
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.collapse-transition-enter-active {
  transition: all .3s ease;
}
.collapse-transition-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.collapse-transition-enter, .collapse-transition-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>


