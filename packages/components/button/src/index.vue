<template>
  <button class="ha-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { prefix } from '@halo/constants';

defineOptions({
  name: `${prefix}Button`
});

defineProps({
  type: {
    type: String as PropType<
      'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
    >,
    default: 'default'
  },
  success: {
    type: Boolean,
    default: false
  },
  warning: {
    type: Boolean,
    default: false
  },
  info: {
    type: Boolean,
    default: false
  }
});
</script>
<style></style>
