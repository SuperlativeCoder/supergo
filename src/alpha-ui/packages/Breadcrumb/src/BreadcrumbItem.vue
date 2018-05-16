<template>
  <span>
    <a v-if="href" :class="linkclasses">
      <Icon :type="icon" v-if="icon"></Icon>
      <span><slot></slot></span>
    </a>
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
import { Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    Icon,
  }
})
export default class BreadcrumbItem extends Vue {
  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: String })
  href: string | undefined

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