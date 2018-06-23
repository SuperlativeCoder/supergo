<template>
  <li :class="classes">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {

  @Prop({ type: Boolean, default: false })
  disabled: boolean | undefined

  get classes() {
    return [
      `vs-menu-item`,
      {
        [`vs-menu-item-disabled`]: !!this.disabled && this.disabled
      }
    ]
  }
}
</script>

