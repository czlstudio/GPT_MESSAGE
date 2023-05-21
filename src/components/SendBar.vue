<template>
  <div class="send-bar w-full p-5 flex justify-center items-center gap-2">
    <NInput
      size="large"
      type="text"
      @keydown.enter="send"
      v-model:value="message" />
    <NButton
      :loading="disabledSend"
      :disabled="disabledSend"
      @click="send"
      class="bg-[#ff8906] text-[#fffffe] font-bold"
      size="large"
      >SEND</NButton
    >
  </div>
</template>

<script setup lang="ts">
import { NInput, NButton, useMessage } from 'naive-ui'
import { ref } from 'vue'
const props = defineProps<{ disabledSend: boolean }>()
const message = ref<string>('')
const emit = defineEmits(['send'])
window.$message = useMessage()
function send() {
  if (!props.disabledSend && message.value.trim()) {
    emit('send', message.value.trim())
    message.value = ''
  }
}
</script>

<style scoped>
.send-bar {
  z-index: 999;
  background: #0f0e17;
  position: fixed;
  bottom: 0;
  border-top: 2px solid black;
}
</style>
