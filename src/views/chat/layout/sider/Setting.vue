<script setup lang='ts'>
import { defineAsyncComponent, reactive } from 'vue'
import { HoverButton, SvgIcon } from '@/components/common'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const state = reactive({ show: false })
</script>

<template>
  <footer class="flex items-center justify-between min-w-0 overflow-hidden border-t dark:border-neutral-800">
    <HoverButton @click="state.show = true">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:settings-4-line" />
      </span>
    </HoverButton>
    <Setting v-if="state.show" v-model:visible="state.show" />
  </footer>
</template>
