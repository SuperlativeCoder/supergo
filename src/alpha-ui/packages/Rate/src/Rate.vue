<template>
  <div class="vs-rate"
    role="slider"
    :aria-valuenow="currentValue"
    :aria-valuetext="text"
    aria-valuemin="0"
    :aria-valuemax="max"
    tabindex="0">
    <span class="vs-rate-item"
      :key="index"
      v-for="(item, index) in max"
      @mousemove="SetCurrentValue(item, $event)"
      @mouseleave="ResetCurrentValue"
      @click="SelectValue(item)"
      :style="{ cusor: rateDisabled ? 'auto' : 'pointer' }">
      <i style="font-size: 22px;margin-right: 3px;" 
       class="vs-icon vs-icon-android-star-outline">
        <i ></i>
      </i>
    </span>
    <span class="vs-rate-text"
      :style="{color: textColor}"
      v-if="showText || showScore">
      {{ text }}
    </span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Utils from '@/alpha-ui/utils/Utils'

@Component
export default class Rate extends Vue {
  @Prop({ type: Number })
  value: number | undefined

  @Prop({ type: Number, default: 2})
  lowThreshold: number | undefined

  @Prop({ type: Number, default: 4})
  highThreshold: number | undefined

  @Prop({ type: Number, default: 5})
  max: number | undefined

  @Prop({ type: String, validator(value) {
    return Utils.oneOfProp(value, ['large', 'normal', 'small'])
  }})
  size: string | undefined

  @Prop({ type: Array, default(){
    return ['#F7BA2A', '#F7BA2A', '#F7BA2A'] 
  }})
  colors: string[] | undefined

  @Prop({ type: String, default: '#C6D1DE'})
  voidColor: string | undefined

  @Prop({ type: String, default: '#EFF2F7'})
  disabledVoidColor: string | undefined

  @Prop({ type: String, default: ''})
  voidIconClass: string | undefined

  @Prop({ type: String, default: ''})
  disabledVoidIconClass: string | undefined

  @Prop({ type: Boolean, default: false})
  disabled: boolean | undefined

  @Prop({ type: Boolean, default: false})
  allowHalf: boolean | undefined
  
  @Prop({ type: Boolean, default: false})
  showText: boolean | undefined

  @Prop({ type: Boolean, default: false})
  showScore: Boolean | undefined

  @Prop({ type: String, default: '#1F2D3D'})
  textColor: string | undefined

  @Prop({ type: Array, default() {
    return ['极差', '失望', '一般', '满意', '惊喜']
  }})
  texts: string[] | undefined

  @Prop({ type: String, default: '{value}'})
  scoreTemplate: string | undefined
  
  pointerAtLeftHalf: boolean = true
  currentValue: number = this.value as number
  hoverIndex: number = -1

  SetCurrentValue(value: number, event: any) {
    if (this.rateDisabled) {
      return
    }
  
    if (this.allowHalf) {

    } else {
      this.currentValue = value
    }
  }

  ResetCurrentValue() {

  }

  SelectValue(value: number) {
    if (this.rateDisabled) {
      return
    }
    if (this.allowHalf && this.pointerAtLeftHalf) {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    } else {
      this.$emit('input', value);
      this.$emit('change', value);
    }
  }
  
  get text() {
    let result = ''
    if (this.showScore) {
      result = (this.scoreTemplate as string).replace(/\{\s*value\s*\}/,
        this.rateDisabled ? this.value + '' : this.currentValue + '')
    }
    if (this.showText) {
      result = (this.texts as string[])[Math.ceil(this.currentValue) - 1]
    }
    return result
  }

  get rateDisabled() {
    return 0
  }
}
</script>

