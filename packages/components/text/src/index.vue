<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { clPrefixName } from '@admin-cl/constants';
export default defineComponent({
  name: clPrefixName + 'Text'
});
</script>
<script lang="ts" setup></script>
<style></style>
