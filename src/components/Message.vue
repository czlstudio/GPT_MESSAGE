<template>
  <div>
    <div
      class="ai-message w-full py-4 text-xl px-6 overflow-auto"
      :class="type == 'assistant' ? ' bg-[black]' : ''"
      v-highlight
      v-html="res"></div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import '../assets/github-markdown.css'
const props = defineProps<{ content: any; type: 'assistant' | 'user' }>()

const md = new MarkdownIt()
const res = md.render(props.content)
</script>

<style scoped lang="scss"></style>
