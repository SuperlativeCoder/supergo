<template>
  <vs-Header :name="name" style="margin-bottom: 5px;"></vs-Header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  name: string = 'Mantle文档中心'
}
</script>

