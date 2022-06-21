<template>
  <button class="cl-button">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { clPrefixName } from '@admin-cl/constants';
export default defineComponent({
  name: clPrefixName + 'Button'
});
</script>
<script lang="ts" setup>
import type { PropType } from 'vue';

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
