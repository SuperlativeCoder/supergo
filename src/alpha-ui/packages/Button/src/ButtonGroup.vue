<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ButtonGroup extends Vue {
  get classes() {
    return [
      `vs-button-group`
    ]
  }
}
</script>

