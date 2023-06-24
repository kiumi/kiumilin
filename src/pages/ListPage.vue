<template>
  <div class="list">
    <div>List Page</div>
    <nav >
      <div><RouterLink to="/">Index</RouterLink></div>
      <div><RouterLink to="/list">List</RouterLink></div>
      <div><RouterLink to="/gallery">Gallery</RouterLink></div>
    </nav>
  </div>
</template>

<style lang="scss">
.list {
  color: green;
}
</style>