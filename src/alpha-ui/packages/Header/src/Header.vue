<template>
  <header>
    <div class="icon">
      
    </div>
    <div class="profile">
      <div class="profile-icon"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  data() {
    return {
      height: '60px'
    }
  }

  @Prop({ default: '60px' }) uheight:string = '60px'

}
</script>

<style>
  
</style>


