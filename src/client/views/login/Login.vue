<template>
  <div id="loginview" style="width: 100%">
    <canvas id="login_canvas"></canvas>
    <div id="login_wrap" style="width: 1024px;margin-left,margin-right: auto;">
      <div id="content" style="color: white;margin-top: 220px; margin-left: 90px;font-size: 21px">
        屏幕有多大，雪就有多大
      </div>
    </div>
    <div id="login_footer" style="color: black; position:absolute; bottom: 80px; left: 100px">
      &copy; XXX工作室
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loginbg from '@/client/directive/loginbg'

export default Vue.extend({
  mounted() {
    let loginbg = new Loginbg('login_canvas', window.innerWidth, window.innerHeight)
    function animation() {
      loginbg.scenewidth = window.innerWidth
      loginbg.sceneheight = window.innerHeight
      loginbg.show()
      window.requestAnimationFrame(animation)
    }
    window.requestAnimationFrame(animation)
  }
})
</script>

<style lang="sass" scoped>
  #login_canvas { position: absolute; top:0px; left:0px; z-index:-1; }
  // foot > 768
  // foot < 768
</style>


