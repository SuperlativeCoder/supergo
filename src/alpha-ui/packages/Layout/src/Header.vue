<template>
  <header class="vs-header">
    <div class="vs-header-main">
      <div class="vs-header-logo">
        <slot name="logo">
          <img src="../../../assets/logo.png" width="40" height="40px" style="margin-top: 10px;float: left"/>
        </slot>
        <span style="float: left;margin-left: 10px;font-size: 18px;">{{ name }}</span>
      </div>
      <div class="vs-header-right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop({ type: String, default: 'default value' })
  logo: string | undefined
  @Prop({ type: String, default: '管理后台' })
  name: string | undefined
}
</script>


