<template>
  <vs-Layout>
    <router-view name="top"></router-view>
    <router-view name="header"></router-view>
    <vs-Content style="width: 1300px;margin:auto;box-shadow: 0 6px 20px rgba(26,188,156, 0.15);">
      <router-view name="menu" style="overflow-y:auto;overflow-x:hidden;"></router-view>
      <router-view style="width:1050px;padding: 10px;overflow-y:auto;overflow-x:hidden;"></router-view>
    </vs-Content>
    <router-view name="footer"></router-view>
  </vs-Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  name: string = 'Mantle文档中心'
}
</script>

<style lang="scss">
  // 文档页面整体架构scss，不再另开
  body { min-width: 1300px; }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>