<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Breadcrumb extends Vue {
  @Prop({ type: String, default: '/' })
  separator: string | undefined

  @Watch('separator')
  onSeparatorChanged() {
    this.updateChildren()
  }

  updateChildren() {
    this.$children.forEach((child) => {
      (child as any).separator = this.separator
    });
  }

  get classes() {
    return [
      `vs-breadcrumb`
    ]
  }

  mounted() {
    this.updateChildren()
  }

  updated() {
    this.$nextTick(() => {
      this.updateChildren()
    });
  }
}
</script>

