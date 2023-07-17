<script setup lang="ts">
import { useRouter } from 'vue-router';


const props = defineProps<{ images: string[], url?: string, myWork?: string, pageTitle?: string, pageTitleEn?: string, description?: string }>();

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
  <div class="list">
    <!-- 作品詳細 -->
    <div class="project-detail">
      <div class="main-title">
        <div class="title-en">{{ props.pageTitleEn ?? "Project Detail" }}</div>
        <span></span>
        <div class="title-tw">{{ props.pageTitle ?? "網頁平台" }}</div>
      </div>
      <div class="describe" v-if="props.url || props.myWork">
        <div class="company_url" v-if="props.url">網址: <a :href="props.url" target="_blank">{{ props.url }}</a></div>
        <div class="mywork" v-if="props.myWork">開發: <span>{{ props.myWork }}</span></div>
      </div>
      <div v-if="props.description" class="inner-page-describe">
        <span class="describle-content">{{ props.description }}</span>
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

      <a @click="backToPreviousOrIndex" class="back-btn">
        <span class="back-btn-icon"><img src="/images/back-btn.svg" alt=""></span>
          Back to Index
      </a>

      <a href="#" class="bottm-hand"><img src="/images/bottom-hand.png" alt=""></a>
    </div>



    <!-- <nav >
      <div><RouterLink to="/">Index</RouterLink></div>
      <div><RouterLink to="/list">List</RouterLink></div>
      <div><RouterLink to="/gallery">Gallery</RouterLink></div>
    </nav> -->
  </div>
</template>