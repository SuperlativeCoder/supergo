<template>
  <div class="vs-image" :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }">
    <img :src="src" :width="imageWidth" :height="imageHeight"
        :style="{ transform: 'rotate('+rotateVal+'deg)' }"/>
    <div class="vs-image-btn-area"
      v-if="!!scaleable || !!rotaeable || !!previewable || scaleable || rotaeable || previewable">
      <ButtonGroup>
        <Button v-if="!!scaleable && scaleable" 
          :type="type" icon="android-add" size="mini"
          @click="scale(0.05)"></Button>
        <Button v-if="!!scaleable && scaleable" 
          :type="type" icon="android-remove" size="mini"
          @click="scale(-0.05)"></Button>
        <Button v-if="!!rotaeable && rotaeable" 
          :type="type" icon="android-sync" size="mini"
          @click="rotate(90)"></Button>
        <Button v-if="!!previewable && previewable" 
          :type="type" icon="arrow-expand" size="mini"
          @click="preview()"></Button>
        <Button
          :type="type" icon="arrow-return-left" size="mini"
          @click="defaults()"></Button>
      </ButtonGroup>
    </div>
    <transition name="fade">
      <div class="vs-image-mask" v-show="isPreview" @click="preview()">
        <img :src="src" :style="{ transform: 'rotate('+rotateVal+'deg)' }"/>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Icon from '../../Icon'
import { Button, ButtonGroup } from '../../Button'
import { Component, Prop } from 'vue-property-decorator'
import Utils from '@/alpha-ui/utils/Utils';

@Component({
  components: {
    Icon, Button, ButtonGroup
  }
})
export default class Images extends Vue {
  @Prop({ type: String })
  src: string | undefined

  @Prop({ type: Number })
  width: number | undefined

  @Prop({ type: Number})
  height: number | undefined

  @Prop({ type: String, validator: function(value) {
    return Utils.oneOfProp(value, ['primary', 'ghost', 'text', 'info', 'success', 'warning', 'error', 'default'])
  }})
  type: string | undefined

  @Prop({ type: Boolean, default: false })
  scaleable: boolean | undefined

  @Prop({ type: Boolean, default: false })
  rotaeable: boolean | undefined

  @Prop({ type: Boolean, default: false })
  previewable: boolean | undefined

  scaleVal: number = -1
  rotateVal: number = 0
  isPreview: boolean = false;

  get imageWidth() {
    if (!!this.width) {
      return this.width + this.width * (1 + this.scaleVal)
    }
    return 0
  }

  get imageHeight() {
    if (!!this.height) {
      return this.height + this.height * (1 + this.scaleVal)
    }
    return 0
  }

  scale(val: number) {
    this.scaleVal = this.scaleVal == -1 ? val : this.scaleVal + val
  }

  rotate(val: number) {
    this.rotateVal = this.rotateVal == 0 ? val : this.rotateVal + val
  }

  preview() {
    this.isPreview = !this.isPreview
  }

  defaults() {
    this.scaleVal = -1
    this.rotateVal = 0
  }
}
</script>

