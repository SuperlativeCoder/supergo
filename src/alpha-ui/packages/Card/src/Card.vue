<template>
  <div class="vs-card">
    <div class="vs-card-header" v-if="$slots.header || title">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="vs-card-cover" v-if="$slots.cover || cover">
      <slot name="cover">
        <div class="vs-card-cover-mask">
          <img class="vs-card-cover-img" :src="cover"/>
        </div>
      </slot>
    </div>
    <div class="vs-card-body">
      <slot></slot>
    </div>
    <div class="vs-card-action" v-if="$slots.action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue{
  /**
   * 标题
   * @augments title */
  @Prop({ type: String })
  title: string | undefined

  /**
   * 封面链接
   * @augments cover */
  @Prop({ type: String })
  cover: string | undefined

  /**
   * 标题附属按钮
   * @augments cover */
  @Prop({ type: String })
  extra: string | undefined

  /**
   * 是否有边框
   * @augments bordered @default true */
  @Prop({ type: Boolean, default: true })
  bordered: boolean | undefined

  /**
   * 是否存在阴影
   * @augments shadow @default true */
  @Prop({ type: Boolean, default: true })
  shadow: boolean | undefined

  /**
   * 是否存在悬停浮动
   * @augments shadow @default false */
  @Prop({ type: Boolean, default: false })
  hoverable: boolean | undefined

  /**
   * 是否存在加载动画
   * @augments shadow @default false */
  @Prop({ type: Boolean, default: false })
  loading: boolean | undefined
}
</script>


