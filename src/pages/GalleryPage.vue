<script setup lang="ts">
import type { ListData } from '@/router/structure';


const props = defineProps<{ lists: ListData[] }>();


</script>


<template>
  <div class="gallery">
    <div class="web-company">
      <div class="main-title">
        <div class="title-en">Web Design</div>
        <span></span>
        <div class="title-tw">網頁設計</div>
      </div>

      <!-- 切換頁籤 -->
      <div class="tab-list">
        <div class="tab active">形象網站</div>
        <div class="tab">遊戲娛樂</div>
      </div>

      <div class="web-content">
        <template v-for="row in props.lists" :key="row.id">
          <RouterLink :to="{ name: row.id }" class="items">
            <img :src="row.image" alt="">
          </RouterLink>
        </template>
        <!-- <a href="#" class="items"><img src="/images/web_company/web_001.jpg" alt=""></a>
        <a href="#" class="items"><img src="/images/web_company/web_002.jpg" alt=""></a>
        <a href="#" class="items"><img src="/images/web_company/web_003.jpg" alt=""></a>
        <a href="#" class="items"><img src="/images/web_company/web_004.jpg" alt=""></a>
        <a href="#" class="items"><img src="/images/web_company/web_005.jpg" alt=""></a>
        <a href="#" class="items"><img src="/images/web_company/web_006.jpg" alt=""></a> -->
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

<style lang="scss">

</style>