<template>
  <div id="loginview" style="width: 100%">
    <canvas id="login_canvas"></canvas>
    <div id="login_wrap">
      <div id="content">
        <h3 style="color: white">住这儿</h3>以社区公共权益而生
      </div>
      <div id="form">
        <canvas id="login_logo" width="200" height="200"></canvas>
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
import LogoParticle from '@/client/directive/particle'
import { setInterval } from 'timers'

const logImg = require('../../assets/logo.png')

export default Vue.extend({
  mounted() {
    let loginbg = new Loginbg('login_canvas', window.innerWidth, window.innerHeight)
    let particle = new LogoParticle('login_logo', logImg)
    particle.show()
    function animation() {
      loginbg.show(window.innerWidth, window.innerHeight)
      window.requestAnimationFrame(animation)
    }
    function particleAnimation() {
      particle.animal()
    }
    window.requestAnimationFrame(animation)
    setInterval(particleAnimation, 90)
  }
})
</script>

<style>
  #login_canvas { position: absolute; top:0px; left:0px; z-index:-1; }
  
  @media screen and (min-width: 760px) {
    #login_footer { color: black; position:absolute; bottom: 10%; left: 100px }
    #content { color: white; position:absolute; top: 30%; left: 20%;font-size: 1.3em }
    #zzr_btn_0 {
      position:absolute;
      top: 50%;
      right: 30%;
      display: block;
      background-color:white;
      color: #80b692;
      text-align:center;
      height: 40px;
      line-height: 40px;
      width: 200px;
      border-radius: 5px;
    }
    #login_logo {
      background:rgba(255,255,255,0);
      z-index: 9999;
      position: absolute;
      right: 30%;
      top: 13%;
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
      background-color:white;
      color: #80b692;
      bottom: 40%;
      height: 40px;
      line-height: 40px;
      width: 200px;
      left: 50%;
      margin-left: -100px;
      border-radius: 5px;
    }
    #login_logo {
      background:rgba(255,255,255,0);
      position: absolute;
      width: 200px;
      left: 50%;
      margin-left: -100px;
      right: 30%;
      top: 13%;
    }
  }
</style>


