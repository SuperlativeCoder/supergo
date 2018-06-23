<template>
  <div class="vs-layout" :style="{ height: viewHeight + 'px' }">
      <slot>&nbsp;</slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Watch, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  
  viewHeight: number = screen.height

  mounted() {
    let self = this
    window.onresize = function() {
      if (screen.width < 576) {
        self.viewHeight = 800
      } else if (screen.width >= 576 && screen.width < 768) {
        self.viewHeight = 800
      } else if (screen.width >= 768 && screen.width < 992) {
        self.viewHeight = 800
      } else if (screen.width >= 992 && screen.width < 1200) {
        self.viewHeight = 800
      } else if (screen.width >= 1200 && screen.width < 1600) {
        self.viewHeight = 1024
      } else if (screen.width > 1600) {
        self.viewHeight = 1024
      }
    }
  }
}
</script>

