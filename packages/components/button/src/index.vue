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
<script lang="ts" setup></script>
<style></style>
