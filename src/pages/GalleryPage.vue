<script setup lang="ts">
import type { ListData, GalleryData } from '@/router/structure';
import { useRouter } from 'vue-router';

const props = defineProps<{ lists: ListData[], navigation: GalleryData['navigation'], pageTitle?: string, pageTitleEn?: string }>();
const $router = useRouter();

function backToPreviousOrIndex() {
  if (history.length > 2) {
    $router.go(-1)
  } else {
    $router.push('/')
  }
}


</script>


<template>
  <div class="gallery">
    <div class="web-company">
      <div class="inner-page-title animate__animated animate__fadeIn animate__delay-08s">
        <div class="title">
          <div class="title-en">{{ props.pageTitleEn ?? "Web Design" }}</div>
          <span></span>
          <div class="title-tw">{{ props.pageTitle ?? "網頁平台" }}</div>
        </div>
        <a @click="backToPreviousOrIndex" class="back-index-btn">Back to Index</a>
      </div>

      <template v-if="props.navigation && props.navigation.length">
        <!-- 切換頁籤 -->
        <div class="tab-list">
          <template v-for="(row, index) in props.navigation" :key="index">
            <RouterLink :to="{ name: row.jumpToId }" class="tab" active-class="active">
              {{ row.title }}
            </RouterLink>
          </template>
        </div>
      </template>

      <div class="web-content animate__animated animate__fadeIn animate__delay-08s">
        <template v-for="row in props.lists" :key="row.id">
          <RouterLink :to="{ name: row.id }" class="items" target="_blank">
            <img :src="row.image" alt="">
          </RouterLink>
        </template>
      </div>

      <a @click="backToPreviousOrIndex" class="back-btn">
        <span class="back-btn-icon"><img src="/images/back-btn.svg" alt=""></span>
          Back to Index
      </a>
    </div>
    <a href="#" class="bottm-hand"><img src="/images/bottom-hand.png" alt=""></a>
  </div>
</template>

<style lang="scss">

</style>