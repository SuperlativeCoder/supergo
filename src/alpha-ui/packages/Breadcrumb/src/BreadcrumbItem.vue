<template>
  <span>
    <router-link v-if="!!to" :class="linkclasses" :to="to">
      <Icon :type="icon" v-if="icon"></Icon>
      <span><slot></slot></span>
    </router-link>
    <span v-else :class="linkclasses">
      <Icon :type="icon" v-if="icon"></Icon>
      <span><slot></slot></span>
    </span>
    <span :class="separatorclasses" v-if="!showSeparator">{{ separator }}</span>
    <span :class="separatorclasses" v-else>
      <slot name="separator"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '../../Icon'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon,
  }
})
export default class BreadcrumbItem extends Vue {
  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: Object })
  to: object | undefined

  showSeparator: boolean = false
  separator: string = ''

  get linkclasses() {
    return 'vs-breadcrumb-link'
  }

  get separatorclasses() {
    return 'vs-breadcrumb-separator'
  }
}
</script>