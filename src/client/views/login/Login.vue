<template>
  <div id="loginview" style="width: 100%">
    <canvas id="login_canvas"></canvas>
    <div id="login_wrap">
      <div id="content">
        屏幕有多大，雪就有多大
      </div>
      <div id="form">
        <canvas id="login_logo"></canvas>
        <a id="zzr_btn_0" href="#">助这儿登录</a>
      </div>
    </div>
      <div id="login_footer">
        <p>&copy; XXX工作室</p>
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
      loginbg.show(window.innerWidth, window.innerHeight)
      window.requestAnimationFrame(animation)
    }
    window.requestAnimationFrame(animation)
  }
})
</script>

<style>
  #login_canvas { position: absolute; top:0px; left:0px; z-index:-1; }
  a { text-decoration: none }
  @media screen and (min-width: 760px) {
    #login_footer { color: black; position:absolute; bottom: 10%; left: 100px }
    #content { color: white; position:absolute; top: 30%; left: 20%;font-size: 1.3em }
    #zzr_btn_0 {
      position:absolute;
      top: 50%;
      right: 30%;
      display: block;
      background-color: #80b692;
      color: white;
      text-align:center;
      height: 30px;
      line-height: 30px;
      width: 200px;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 760px) {
    #login_footer {
      position:absolute;
      display: block;
      text-align: center;
      color: black;
      bottom: 10%;
      width: 250px;
      left: 50%;
      margin-left: -125px;
    }
    #content { display: none }
    #zzr_btn_0 {
      position:absolute;
      display: block;
      text-align: center;
      background-color: #80b692;
      color: white;
      bottom: 40%;
      height: 30px;
      line-height: 30px;
      width: 200px;
      left: 50%;
      margin-left: -100px;
      border-radius: 5px;
    }
  }
</style>


