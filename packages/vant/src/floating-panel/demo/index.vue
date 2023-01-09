<script setup lang="ts">
import { FloatingPanel as VanFloatingPanel } from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({});
</script>

<template>
  <demo-block :title="t('basic-usage')">
    <Van-floating-panel />
  </demo-block>
</template>

<style lang="scss" scoped></style>
