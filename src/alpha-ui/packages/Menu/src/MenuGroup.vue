<template>
  <li :class="classes">
    <div class="vs-menu-group-title"
      @click="handleClick">
      <slot name="title"></slot>
      <Icon type="ios-arrow-down" class="vs-sub-menu-title-icon"></Icon>
    </div>
    <transition name="">
      <ul>
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class MenuGroup extends Vue {
  get classes() {
    return [
      `vs-menu-group`
    ]
  }
}
</script>

