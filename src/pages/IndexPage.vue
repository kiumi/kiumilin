<script lang="ts" setup>
import { ref, unref } from 'vue';
import { data } from '@/router/structure';
import { RouterLink } from 'vue-router';

const filterData = data.filter((row) => row.notInIndex !== true);
const nav = ref<HTMLInputElement>();

function jumpTo(to: string) {
  const n = unref(nav);
  n && (n.checked = false);

  window.location.href = to;
}

</script>

<template>
  <div class="wrapper">
    <navigation class="site-nav animate__animated animate__fadeIn animate__delay-08s">
      <div class="years">2019-2023</div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li><a class="scrollto" href="#experience">EXPERIENCE</a></li>
        <li><a class="scrollto" href="#skill">SKILL</a></li>
        <li><a class="scrollto" href="#project">PORTFOLIO</a></li>
        <li><a class="scrollto" href="#contact">CONTACT</a></li>
      </ul>
    </navigation>

    <!-- 手機版選單 -->
    <input ref="nav" id="toggle" type="checkbox"/>
    <label class="hamburger" for="toggle">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>
    <div class="mobile-nav">
      <div class="nav-wrapper">
        <nav>
          <a @click="jumpTo('#')">HOME</a>
          <a @click="jumpTo('#experience')">EXPERIENCE</a>
          <a @click="jumpTo('#skill')">SKILL</a>
          <a @click="jumpTo('#project')">PORTFOLIO</a>
          <a @click="jumpTo('#contact')">CONTACT</a>
        </nav>
      </div>
    </div>
    <div class="su-main">
      <div class="index " id="index">
        <div class="su-grandparent">
          <div class="su-parent">
            <div class="su-child-left">
              <div class="su-text-content">
                <div class="txt-lg animate__animated animate__fadeIn animate__delay-12s">作品集</div>
                <div class="txt-md animate__animated animate__fadeIn animate__delay-14s">Design Portfolio</div>
                <div class="content-btn animate__animated animate__fadeIn animate__delay-17s">
                  <ul>
                    <li>WEB</li>
                    <li>UI/UX</li>
                    <li>BANNER</li>
                  </ul>
                  <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>JQUERY</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="su-child-right">
              <div class="su-image-content">
              </div>
            </div>
            <div class="bottom-txt  animate__animated animate__fadeIn animate__delay-12s">
              <span>網頁設計</span>
              <span>平面視覺</span>
            </div>
          </div>
        </div>


        <a class="arrow-down" href="#experience"><img src="/images/arrow-down.svg"></a>


      </div>
      <div class="experience" id="experience" >
        <div class="main-title animate__animated animate__delay-06s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
          <div class="title-en">Experience</div>
          <span></span>
          <div class="title-tw">工作經歷</div>
        </div>

        <div class="flex">
          <div class="exp-content">
            <div class="time-line-group animate__animated animate__delay-08s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">Freelancer 2023</span>
                  <span>前端設計師</span>
                </div>
                <div class="info-introduction">簡介: 主要為網站UI、UX視覺設計 / 前端切版 </div>
                <div class="info-bottom">
                  <ul>
                    <li>負責規劃、設計網頁UI視覺 </li>
                    <li>使用Ｈtml、css完成RWD響應式網頁切版</li>
                    <li>負責製作Banner/ 彈窗廣告/ GIF廣告 </li>
                    <li>優化平台功能視覺 </li>
                    <li>與產品經理溝通需求內容, 針對需求進行分析並給予建議 </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="time-line-group animate__animated animate__delay-08s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">宏唯科技有限公司 2022 - 2022</span>
                  <span>UI視覺設計師</span>
                </div>
                <div class="info-introduction">簡介: 產品主營為歐美市場(巴西、南美)，為體育愛好者打造更好的體育平台</div>
                <div class="info-bottom">
                  <ul>
                    <li>與專案經理、業務、工程師等相關人員配合, 協同執行專案</li>
                    <li>協同設計師使用figma進行網站視覺製作, 共同定義UI設計規範與整合組件 <div class="txt-sm">(色彩/ 模組間距大小/ 字型/ 文字大小, 等等...)</div>
                    </li>
                    <li>製作平台Banner</li>
                    <li>使用Tailwindcss協助前端工程師進行切版</li>
                    <li>Git版本控管</li>
                  </ul>
                </div>

              </div>
            </div>
            <!-- <div class="time-line-group animate__animated animate__delay-12s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">新視野多媒體行銷有限公司 2023</span>
                  <span>前端設計師</span>
                </div>
                <div class="info-introduction">簡介: 負責形象網站主視覺設計/ 前端切版, 上線網站約30-50站 (接案)</div>
                <div class="info-bottom">
                  <ul>
                    <li>網頁主視覺設計，依造客戶需求，設計符合公司形象的網站視覺</li>
                    <li>使用Ｈtml、css完成網頁切端切版, 含響應式裝置</li>
                  </ul>
                </div>
              </div>
            </div> -->
            <!-- <div class="time-line-group animate__animated animate__delay-16s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">有樂生活有限公司 2023</span>
                  <span>前端設計師</span>
                </div>
                <div class="info-introduction">簡介: 主要負責響應式網站前端切版 (接案)</div>
                <div class="info-bottom">
                  <ul>
                    <li>與產品經理. 設計師/ 工程師配合, 協同執行專案</li>
                    <li>依平台需求, 提供多面向建議與優化方案</li>
                    <li>依據設計師網頁設計稿(電腦版) 做響應式延伸, 進行前端切版, 加入小動畫增添操作豐富度與體感</li>
                  </ul>
                </div>

              </div>
            </div> -->
            <!-- <div class="time-line-group animate__animated animate__delay-17s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">1111人力銀行 2022</span>
                  <span>前端切版</span>
                </div>
                <div class="info-introduction">簡介: 協同多前端位切版師, 進行新版的響應式網站前端切版 (接案)</div>
                <div class="info-bottom">
                  <ul>
                    <li>與專案經理、前端設計人員配合, 依據設計稿共同執行切版作業</li>
                    <li>依溝通與確認，共同定義切版規範案</li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
          <div class="exp-content ">

            <div class="time-line-group animate__animated animate__delay-12s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">雋上科技有限公司 2018 - 2022</span>
                  <span>網頁前端設計師</span>
                </div>
                <div class="info-introduction">簡介: 主要為多樣版網頁開發 / 模組化功能型平台/ UI、UX視覺設計/ 前端切版 </div>
                <div class="info-bottom">
                  <ul>
                    <li>設計網站視覺, 製作符合平台調性的視覺風格</li>
                    <li>平面視覺活動圖，包括Banner/ 彈窗廣告/ GIF廣告/ 企業LOGO</li>
                    <li>優化與維護平台UI、UX</li>
                    <li>使用Vuetify、Html、Scss完成網頁切端切版, 含響應式裝置</li>
                    <li>與專案經理、業務、工程師等相關人員配合, 協同執行專案, 並掌握專案時程</li>
                    <li>Git版本控管</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="time-line-group animate__animated animate__delay-16s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
              <div class="col-sm-1">
                <div class="time-line-section">
                  <div class="time-dot"></div>
                  <div class="time-line"></div>
                </div>
              </div>
              <div class="col-sm-11">
                <div class="info-top">
                  <span class="job-title">亮鈞行銷廣告 2015-2016</span>
                  <span>網頁前端設計師</span>
                </div>
                <div class="info-introduction">簡介: 形象網站視覺設計 / 響應式網頁切版</div>
                <div class="info-bottom">
                  <ul>
                    <li>負責製作EDM/ Banner， 將文字內容轉化為達意、富有創意和美感兼具的高品質成品</li>
                    <li>設計平台網頁視覺</li>
                    <li>使用Bootstrap執行網頁的切版, 以及JQuery特效增加頁面操作的體驗度</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skill -->
      <div class="skills" id="skill">
        <div class="main-title animate__animated animate__delay-06s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 400 }">
          <div class="title-en">Skills</div>
          <span></span>
          <div class="title-tw">工作技能</div>
        </div>
        <div class="flex skills-content">
          <div class="skill-items animate__animated animate__delay-12s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 400 }">
            <div class="info-top">
              <div class="title">前端開發</div>
              <span>Front-End Development</span>
            </div>
            <div class="info-bottom">
              <ul>
                <li>HTML、CSS、Scss、Sass</li>
                <li>Bootstrap、Tailwindcss、Vuetify</li>
                <li>JQuery</li>
                <li>RWD</li>
                <li>Git</li>
              </ul>
            </div>
          </div>

          <div class="skill-items animate__animated animate__delay-16s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 400 }">
            <div class="info-top">
              <div class="title">使用者介面</div>
              <span>UI/UX Designt</span>
            </div>
            <div class="info-bottom">
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>UI Flow</li>
                <li>Wireframe</li>
                <li>Mockup、Prototype</li>
                <li>RWD</li>
              </ul>
            </div>
          </div>

          <div class="skill-items animate__animated animate__delay-17s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 400 }">
            <div class="info-top">
              <div class="title">視覺設計</div>
              <span>Visual Design</span>
            </div>
            <div class="info-bottom">
              <ul>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--Project -->
      <div class="project" id="project">
        <div class="main-title animate__animated animate__delay-06s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 300 }">
          <div class="title-en">Project</div>
          <span></span>
          <div class="title-tw">專案介紹</div>
        </div>
        <div class="flex project-content">
          <RouterLink v-for="row in filterData" :key="row.id" :to="{ name: row.id }" class="project-items animate__animated animate__delay-12s" v-scroll-over="{ class: 'animate__fadeIn', offsetY: 500 }">
            <div class="project-img">
              <img :src="row.image" alt="">
            </div>
            <div class="info-top">
              <div class="title">{{ row.title }}</div>
            </div>
            <div class="info-bottom">{{ row.summary }}</div>
            <div class="more-btn">完整介紹<span><img src="/images/more-btn.svg" alt=""></span></div>
          </RouterLink>


        </div>
      </div>

      <!-- CONTACT -->
      <div class="contact" id="contact">
        <div class="contact-info">更多資訊 歡迎聯繫</div>
        <div class="contact-mail">kiumiaiyu@gmail.com</div>
        <a href="#" class="bottm-hand"><img src="/images/bottom-hand.png" alt=""></a>
      </div>

    </div>
  </div>
  <div>
    <nav>
      <!-- <div><RouterLink to="/">Index</RouterLink></div> -->
      <!-- <div><RouterLink to="/list">List</RouterLink></div>
      <div><RouterLink to="/gallery">Gallery</RouterLink></div> -->
    </nav>
  </div>
</template>
