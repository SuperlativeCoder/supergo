<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Menu extends Vue {
  get classes() {
    return [
      `vs-menu`
    ]
  }
}
</script>

