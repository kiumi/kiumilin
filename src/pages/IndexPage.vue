<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="index">
    <div>Index Page</div>
    <nav >
      <div><RouterLink to="/">Index</RouterLink></div>
      <div><RouterLink to="/list">List</RouterLink></div>
      <div><RouterLink to="/gallery">Gallery</RouterLink></div>
    </nav>
  </div>
</template>

<style lang="scss">
.index {
  color: red;
}
</style>