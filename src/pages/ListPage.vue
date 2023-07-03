<script setup lang="ts">

const props = defineProps<{ images: string[] }>();


</script>

<template>
  <div class="list">
    <!-- 作品詳細 -->
    <div class="project-detail">
      <div class="main-title">
        <div class="title-en">Project Details</div>
        <span></span>
        <div class="title-tw">娛樂平台</div>
      </div>
      <div class="detail-content">
        <template v-for="(image, index) in props.images" :key="index">
          <img :src="image" alt="">
        </template>
        <!-- <img src="/images/project_001/project_001_2.webp" alt="">
        <img src="/images/project_001/project_001_3.webp" alt="">
        <img src="/images/project_001/project_001_4.webp" alt="">
        <img src="/images/project_001/project_001_5.webp" alt="">
        <img src="/images/project_001/project_001_6.webp" alt="">
        <img src="/images/project_001/project_001_7.webp" alt="">
        <img src="/images/project_001/project_001_8.webp" alt="">
        <img src="/images/project_001/project_001_9.webp" alt="">
        <img src="/images/project_001/project_001_10.webp" alt="">
        <img src="/images/project_001/project_001_11.webp" alt="">
        <img src="/images/project_001/project_001_12.webp" alt="">
        <img src="/images/project_001/project_001_13.webp" alt="">
        <img src="/images/project_001/project_001_14.webp" alt="">
        <img src="/images/project_001/project_001_15.webp" alt=""> -->
      </div>

      <a href="/" class="back-btn">
        <span class="back-btn-icon"><img src="/images/back-btn.svg" alt=""></span>
          Back to Index
      </a>
    </div>

    <!-- <nav >
      <div><RouterLink to="/">Index</RouterLink></div>
      <div><RouterLink to="/list">List</RouterLink></div>
      <div><RouterLink to="/gallery">Gallery</RouterLink></div>
    </nav> -->
  </div>
</template>