<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{ id: string, images: string[], url?: string, myWork?: string, pageTitle?: string, pageTitleEn?: string, description?: string }>();

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
  <div class="list" :id="props.id">
    <!-- 作品詳細 -->
    <div class="project-detail">
      <div class="inner-page-title animate__animated animate__fadeIn animate__delay-08s">
        <div class="title">
          <div class="title-en">{{ props.pageTitleEn ?? "Project Detail" }}</div>
          <span></span>
          <div class="title-tw">{{ props.pageTitle ?? "網頁平台" }}</div>
          <div class="company_url" v-if="props.url">
          <a :href="props.url" target="_blank">
            連結
          </a>
        </div>
        </div>
        <a @click="backToPreviousOrIndex" class="back-index-btn">Back</a>
      </div>
      <div class="describe" v-if="props.url || props.myWork">
        <!-- <div class="company_url" v-if="props.url">
          <a :href="props.url" target="_blank">
            前往連結
          </a>
        </div> -->
        <div class="mywork" v-if="props.myWork">開發: <span>{{ props.myWork }}</span></div>
      </div>
      <div v-if="props.description" class="inner-page-describe">
        <span class="describle-content">{{ props.description }}</span>
      </div>
      <div class="detail-content animate__animated animate__fadeIn animate__delay-12s">

        <template v-for="(row, index) in props.images" :key="index">
          <div class="nest-image" :class="Array.isArray(row) ? 'nest-image--multiple' : 'nest-image--single'">
            <template v-if="Array.isArray(row)">
              <template v-for="(subRow, subIndex) in row" :key="subIndex">
                <div className="nest-image--child ">
                  <img :src="subRow" alt="">
                </div>
              </template>
            </template>
            <template v-else>
              <div className="nest-image--child">
                <img :src="row" alt="">
              </div>
            </template>
          </div>
        </template>
      </div>

      <a @click="backToPreviousOrIndex" class="back-btn">
        <span class="back-btn-icon"><img src="/images/back-btn.svg" alt=""></span>
          Back to Index
      </a>

      <a href="#" class="bottm-hand"><img src="/images/bottom-hand.png" alt=""></a>
    </div>
  </div>
</template>