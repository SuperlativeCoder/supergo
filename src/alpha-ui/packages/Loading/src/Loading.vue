<template>
  <div class="vs-loading" v-if="loading">
    <ul>
      <li><i class="vs-loading-item vs-loading-item-1"></i></li>
      <li><i class="vs-loading-item vs-loading-item-2"></i></li>
      <li><i class="vs-loading-item vs-loading-item-3"></i></li>
      <li><i class="vs-loading-item vs-loading-item-4"></i></li>
    </ul>
    <div class="vs-loading-mask" v-if="global"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop({ type: Boolean, default: false })
  loading: boolean | undefined

  @Prop({ type: Boolean, default: false })
  global: boolean | undefined
}
</script>


