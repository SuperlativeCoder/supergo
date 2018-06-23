<template>
  <transition name="slide-fade">
    <div :class="classes" 
      v-if="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <div class="vs-message-left">
        <vs-Icon :type="icons" v-if="!!iconable && iconable"></vs-Icon>
      </div>
      <div class="vs-message-left">
        <label v-if="!$slots.default">{{message}}</label>
        <label v-else><slot></slot></label>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Utils from '@/alpha-ui/utils/Utils'
import { clearTimeout, setTimeout } from 'timers'

@Component
export default class Message extends Vue {
  message: string | undefined
  type: string | undefined
  icon: string | undefined 
  duration: number = 3000
  center: boolean = false
  iconable: boolean = false
  visible: boolean = true
  timer: any = null
  closed: boolean = false
  onClose: any = null

  @Watch('closed')
  onClosedChanged(val: boolean) {
    if(val) {
      this.visible = false
      this.$el.removeEventListener('transitionend', this.destroyElement);
    }
  }

  close() {
    this.closed = true
    if (typeof this.onClose === 'function') {
      this.onClose((this as any).id);
    }
  }

  clearTimer() {
    clearTimeout(this.timer)
  }

  startTimer() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if(!this.closed) {
          this.close()
        }
      }, this.duration)
    }
  }

  get classes() {
    return [
      `vs-message`,
      {
        [`vs-message-type-${this.type}`]: !!this.type,
        [`vs-message-align-center`]: !!this.center && this.center
      }
    ]
  }

  get icons() {
    switch(this.type) {
      case 'success': return 'checkmark-circled'
      case 'info': return 'information-circled'
      case 'warning': return 'android-warning'
      case 'error': return 'close-circled'
      default: return 'information-circled'
    }
  }

  destroyElement() {
    this.$el.removeEventListener('transitionend', this.destroyElement)
    this.$destroy()
    if (!!this.$el.parentNode)
      this.$el.parentNode.removeChild(this.$el)
  }

  keydown(e: any) {
    if (e.keyCode === 27) { // esc关闭消息
      if (!this.closed) {
        this.close();
      }
    }
  }

  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown);
  }

  beforeDestory() {
    document.removeEventListener('keydown', this.keydown);
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>


