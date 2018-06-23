<template>
  <div class="vs-top">
    <div class="vs-top-main">
      <div class="vs-top-left">
        <slot name="left">
          <label v-if="!!version">版本号：{{ version }}</label>&nbsp;&nbsp;&nbsp;
          <label v-if="!!star">系统评分：{{ star }}</label>
        </slot>
      </div>
      <div class="vs-top-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Top extends Vue{
  @Prop({ type: String, default: '0.0.0'})
  version: string | undefined
  @Prop({ type: [String, Number]})
  star: string | number | undefined
}
</script>

