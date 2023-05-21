<template>
  <NConfigProvider :theme="darkTheme">
    <p class="title text-center font-bold text-gray py-6 m-0">CHATGPT (BATE)</p>
    <div class="message-list">
      <div class="message-list flex flex-col gap-2 pb-18">
        <Message
          v-for="message in messageList"
          :key="message.created"
          :content="message.choices[0].message.content"
          :type="message.choices[0].message.role" />
      </div>
    </div>
    <NMessageProvider>
      <SendBar @send="send" :disabledSend="disabledSend" />
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { NConfigProvider, darkTheme, NMessageProvider } from 'naive-ui'
import Message from './components/Message.vue'
import SendBar from './components/SendBar.vue'
import { sendMessage } from './api/index'
const disabledSend = ref<boolean>(false)
const messageList = ref<any[]>([])
function send(v: string) {
  disabledSend.value = true
  scrollToBottom()
  addUserMessage(v)
  const message = sendMessage(v)
  message.then(
    (res) => {
      const data = res.data
      messageList.value.push(data)
      disabledSend.value = false
      scrollToBottom()
    },
    () => {
      window.$message.error(v)
      disabledSend.value = false
    },
  )
}

function addUserMessage(v: string): void {
  messageList.value.push({
    created: Date.now(),
    choices: [
      {
        message: {
          role: 'user',
          content: v,
        },
      },
    ],
  })
}

function scrollToBottom() {
  nextTick(() => {
    window.scroll({
      top: document.body.clientHeight,
      behavior: 'smooth',
    })
  })
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid black;
}
</style>
