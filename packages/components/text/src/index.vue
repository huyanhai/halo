<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { prefix } from '@admin-cl/constants';
export default defineComponent({
  name: prefix + 'Text'
});
</script>
<script lang="ts" setup></script>
<style></style>
