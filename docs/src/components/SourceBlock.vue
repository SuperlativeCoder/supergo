<template>
  <div class="source_block">
    <nav>
      <a :class="showclass" @click="ChangeShowBlockStat(false)">展示</a>
      <a :class="sourclass" @click="ChangeShowBlockStat(true)">源码</a>
    </nav>
    <div class="source source_html" v-show="!isShowSource">
      <slot></slot>
    </div>
    <div class="source source_code" v-show="isShowSource">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class SourceBlock extends Vue {
  isShowSource: boolean = false

  get showclass() {
    return [
      'btn',
      { [`active`]: !this.isShowSource }
    ]
  }

  get sourclass() {
    return [
      'btn',
      { [`active`]: this.isShowSource }
    ]
  }
  ChangeShowBlockStat(flag: boolean) {
    this.isShowSource = flag
  }
}
</script>

<style lang="scss" scoped>
  .source_block {
    width: 90%;
    margin: auto;
    min-height: 90px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    nav {
      width: 100%;
      height: 30px;
      line-height: 30px;

      .btn {
        display: block;
        height: 30px;
        width: 100px;
        line-height: 30px;
        float: left;
        text-align: center;
        color: #aaaaaa; 
        border-right: solid 1px #aaaaaa;
        font-size: 14px;
        
        &:hover {
          color: #1abc9c;
        }
      }

      .active {
        color: #1abc9c;
      }
    }

    .source {
      padding: 5px;
      border-top: solid 1px rgba(0, 0, 0, 0.15);
    }
    
    .source_html {
      text-align: center;
    }

    .source_code {
      overflow: hidden;
      overflow-y: hidden;
      overflow-x: scroll;
    }
  }
</style>


