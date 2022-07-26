<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { prefix } from '@admin-cl/constants';

defineOptions({
  name: `${prefix}Text`
});
</script>
<style></style>
