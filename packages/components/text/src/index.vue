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
<style></style>
