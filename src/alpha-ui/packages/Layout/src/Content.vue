<template>
  <div class="vs-content" style="min-height: 680px; height: 100%">
    <slot>&nbsp;</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Content extends Vue {

}
</script>

