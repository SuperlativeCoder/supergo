<template>
  <vs-Sider style="border-right: solid 1px #1abc9c;padding: 10px;">
    <ul>
      <router-link :to="{ path: '/zh-CN' }" style="color: #aaaaaa;font-weight: bolder;">首页</router-link>
      <li><h4>Basic</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'basic'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
      <li><h4>Show</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'show'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
      <li><h4>Form</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'form'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
      <li><h4>Notice</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'notice'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
      <li><h4>Navigation</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'navigation'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
      <li><h4>Others</h4></li>
      <ul>
        <li 
          v-for="(item, index) in $router.options.routes[2].children"
          :key="index"
          v-if="item.meta === 'others'">
          <router-link :to="item">{{ item.name }}</router-link>
        </li>
      </ul>
    </ul>
    <br/>
  </vs-Sider>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class Sider extends Vue {
  
}
</script>

<style lang="scss" scoped>
  ul {
    padding-left: 20px;
  }

  ul li{
    margin-top: 10px;
    font-size: 17px;
  }

  ul ul li {
    font-size: 14px;
  }

  ul li a {
    color: #aaaaaa;
    font-weight: bolder;

    &:hover {
      color: #1abc9c;
    }

    &:active {
      color: #1abc9c;
    }
  }
</style>



