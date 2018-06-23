<template>
  <footer class="vs-footer">
      <slot></slot>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue{

}
</script>

