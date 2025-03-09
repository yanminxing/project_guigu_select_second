<template>
  <div>
    <el-button type="primary" :icon="Edit" circle />
    <indesx></indesx>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import indesx from '@/components/indesx.vue';
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
