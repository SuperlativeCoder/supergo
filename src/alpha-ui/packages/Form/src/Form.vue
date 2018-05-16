<template>
  <div class="vs-form">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Form extends Vue {

}
</script>

