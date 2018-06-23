<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class FormItem extends Vue {
  get classes() {
    return []
  }
}
</script>

