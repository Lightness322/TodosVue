<script setup lang="ts">
defineOptions({
  name: 'ModalUI',
  inheritAttrs: false
})

defineProps<{
  isShow: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <div class="container" v-if="isShow" @click="$emit('close')">
    <div class="content" @click.stop v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.327);

  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  padding: 20px;
  border-radius: 20px;
  background-color: white;
}
</style>
