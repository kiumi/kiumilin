<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router'

function listenScroll() {
  if (window.scrollY > 300) {
    document.body.classList.add("scroll-over-point");
  } else {
    document.body.classList.remove("scroll-over-point");
  }
}

onMounted(() => {
  window.addEventListener("scroll", listenScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", listenScroll)
})
</script>

<template>
  <RouterView />
</template>
