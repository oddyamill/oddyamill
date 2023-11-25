<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Сделать кофе')

const makeCoffee = async (click: MouseEvent) => {
  const response = await fetch('/make-coffee', { method: 'BREW' })

  if (click.target !== null) {
    // wtf
    ;(click.target as HTMLButtonElement).disabled = true
  }

  switch (response.status) {
    case 530:
      message.value = 'Кофеварка не работает'
      break

    case 418:
      message.value = 'У меня только чайник'
      break

    default:
      message.value = 'Что-то сломалось'
      break
  }
}
</script>

<template>
  <h1>всем пис</h1>
  <p>в будущем на данной странице будут размещены различные приколы</p>
  <button class="button" style="cursor: pointer" @click="makeCoffee">
    {{ message }}
  </button>
</template>
