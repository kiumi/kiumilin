function resolveImageUrl(path: string) {
  return `${import.meta.env.BASE_URL}/${path.replace(/^\//, "")}`;
}

export interface BaseData {
  id: string,
  sort: number,
  image: string,
  title?: string,
  summary?: string,
  notInIndex?: boolean,
  pageTitle?: string,
  pageTitleEn?: string,
}

export interface ListData extends BaseData {
  type: "list",
  images: (string | string[])[],
  url?: string,
  myWork?: string,
  description?: string
}

export interface GalleryData extends BaseData {
  type: "gallery",
  lists: DiverseData,
  navigation?: { title: string, jumpToId: string }[]
}

type DiverseData = (ListData | GalleryData)[];

export const data: DiverseData = [
  {
    type: "list",
    id: "project_001",
    sort: 0,
    image: resolveImageUrl("/images/project_001/project_001_1.webp"),
    title: "Slot Game Web & Mobile UI/UX Design",
    pageTitle: "電子遊戲娛樂平台",
    summary:"Slot Game是以電子為產品為主的娛樂服務平台。以響應式裝置方式開發, 特別的是在手機裝置下,是以手遊APP概念做為開發理念, 將手機端以橫向的設計來達到用戶玩手遊感的真實感。 \
    我在專案裡負責網站的UIUX設計, 在視覺上採用暗色系, 搭配元素繽紛的色調, 試圖營造輕鬆、 釋放壓力、愉快的氛圍, 讓使用者能沈靜在娛樂的情境之中。",

    images: [
      resolveImageUrl("/images/project_001/project_001_1.webp"),
      resolveImageUrl("/images/project_001/project_001_2.webp"),
      resolveImageUrl("/images/project_001/project_001_3.webp"),
      resolveImageUrl("/images/project_001/project_001_4.webp"),
      resolveImageUrl("/images/project_001/project_001_5.webp"),
      resolveImageUrl("/images/project_001/project_001_6.webp"),
      resolveImageUrl("/images/project_001/project_001_7.webp"),
      resolveImageUrl("/images/project_001/project_001_8.webp"),
      resolveImageUrl("/images/project_001/project_001_9.webp"),
      resolveImageUrl("/images/project_001/project_001_10.webp"),
      resolveImageUrl("/images/project_001/project_001_11.webp"),
      resolveImageUrl("/images/project_001/project_001_12.webp"),
      resolveImageUrl("/images/project_001/project_001_13.webp"),
      resolveImageUrl("/images/project_001/project_001_14.webp"),
      resolveImageUrl("/images/project_001/project_001_15.webp"),
    ]
  },
  {
    type: "list",
    id: "project_002",
    sort: 0,
    image: resolveImageUrl("/images/project_002/project_002_1.webp"),
    title: "Module Mobile UI Design 模組化平台",
    pageTitle: "手機版-模組化UI設計",
    summary:"以模組化開發的娛樂型平台，讓您快速選擇元件模組建立一個平台為開發理念。統整平台功能與制定完整的流程架構, 梳理各項功能後, 將各功能做成不同視覺的元件。 \
    建立平台畫面時, 能任意選擇元件組成或者顏色的替換, 達到不同風格的視覺享受。",
    images: [
      resolveImageUrl("/images/project_002/project_002_1.webp"),
      resolveImageUrl("/images/project_002/project_002_2.webp"),
      resolveImageUrl("/images/project_002/project_002_3.webp"),
      resolveImageUrl("/images/project_002/project_002_4.webp"),
      resolveImageUrl("/images/project_002/project_002_5.webp"),
      resolveImageUrl("/images/project_002/project_002_6.webp")
    ]
  },
  {
    type: "list",
    id: "project_003",
    sort: 0,
    image: resolveImageUrl("/images/project_003/project_003_1.webp"),
    title: "BUS SPORT",
    pageTitle: "BUS SPORT體育娛樂平台",
    summary:"產品主營為歐美市場(巴西、南美)，為體育愛好者打造更好的體育平台。\
    視覺採用沈穩、低飽暗色調, 營造舒服輕鬆的情緒。在設計UI時也著重於資訊的呈現, 以簡單乾淨、扁平化的方式作為設計要點。我在專案主要負責UIUX的設計,另外協同中國方設計師合作, 共同定義UI設計規範與整合模組組件。",
    images: [
      resolveImageUrl("/images/project_003/project_003_1.webp"),
      resolveImageUrl("/images/project_003/project_003_2.webp"),
      resolveImageUrl("/images/project_003/project_003_3.webp"),
      resolveImageUrl("/images/project_003/project_003_4.webp"),
      resolveImageUrl("/images/project_003/project_003_5.webp"),
      resolveImageUrl("/images/project_003/project_003_6.webp"),
      resolveImageUrl("/images/project_003/project_003_7.webp"),
      resolveImageUrl("/images/project_003/project_003_8.webp"),
      resolveImageUrl("/images/project_003/project_003_9.webp"),
      resolveImageUrl("/images/project_003/project_003_10.webp"),
      resolveImageUrl("/images/project_003/project_003_11.webp"),
      resolveImageUrl("/images/project_003/project_003_12.webp"),
      resolveImageUrl("/images/project_003/project_003_13.webp"),
      resolveImageUrl("/images/project_003/project_003_14.webp"),
      resolveImageUrl("/images/project_003/project_003_15.webp"),
      resolveImageUrl("/images/project_003/project_003_16.webp"),
      resolveImageUrl("/images/project_003/project_003_17.webp"),
      resolveImageUrl("/images/project_003/project_003_19.webp"),
      resolveImageUrl("/images/project_003/project_003_20.webp"),
      resolveImageUrl("/images/project_003/project_003_21.webp"),
    ]
  },
  {
    type: "list",
    id: "web_029",
    sort: 0,
    pageTitle:"1111人力銀行",
    summary:"提供求職服務的1111人力銀行，此視覺為平台新版面。\
    主要工作範疇為前端切版，在版面模組有不同的排列方式，\
    以及移動端的呈現，故在切版執行時這都是重要的考量因素。",
    image: resolveImageUrl("/images/web_company/web_029.webp"),
    url: "https://www.1111.com.tw",
    images: [
      resolveImageUrl("/images/web_company/web_029.webp"),
      resolveImageUrl("/images/web_company/web_029_1.webp"),
      resolveImageUrl("/images/web_company/web_029_2.webp"),
      resolveImageUrl("/images/web_company/web_029_3.webp"),
    ]
  },
  // 網頁設計作品
  {
    type: "gallery",
    id: "gallery_001",
    sort: 0,
    image: resolveImageUrl("/images/web_company/web_company_cover.webp"),
    pageTitle: "網頁設計",
    title: "形象網站",
    summary: "主要為形象網站的網頁主視覺設計，依造客戶需求，設計符合公司形象的網站視覺。工作範疇包括視覺設計/ Banner圖製作與前端切版。",
    navigation: [
      {
        title: "形象網站",
        jumpToId: "gallery_001"
      },
      {
        title: "遊戲娛樂",
        jumpToId: "gallery_002"
      }
    ],
    lists: [
      {
        type: "list",
        id: "web_029",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_029.webp"),
        pageTitle:"1111人力銀行",
        url: "https://www.1111.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_029.webp"),
          resolveImageUrl("/images/web_company/web_029_1.webp"),
          resolveImageUrl("/images/web_company/web_029_2.webp"),
          resolveImageUrl("/images/web_company/web_029_3.webp"),
        ]
      },
      {
        type: "list",
        id: "web_001",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_001.webp"),
        pageTitle:"螢火蟲原創有限公司",
        url: "https://www.lbo.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_001.webp"),
          resolveImageUrl("/images/web_company/web_001_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_002.webp"),
        pageTitle:"清水溪書店有限公司",
        url: "https://www.cbookstore.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_002.webp"),
          resolveImageUrl("/images/web_company/web_002_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_010",
        sort: 0,
        pageTitle:"台中劉麵包廠",
        image: resolveImageUrl("/images/web_company/web_023.webp"),
        url: "http://www.nutricom.com.tw/index.html",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_023.webp"),
          resolveImageUrl("/images/web_company/web_023_2.webp"),
          resolveImageUrl("/images/web_company/web_023_3.webp"),
          resolveImageUrl("/images/web_company/web_023_4.webp"),
          resolveImageUrl("/images/web_company/web_023_5.webp"),
          resolveImageUrl("/images/web_company/web_023_6.webp"),
          resolveImageUrl("/images/web_company/web_023_7.webp"),
          resolveImageUrl("/images/web_company/web_023_8.webp"),
        ]
      },
      {
        type: "list",
        id: "web_003",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_003.webp"),
        pageTitle:"谷神科技有限公司",
        url: "https://www.gu-shen.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_003.webp"),
          resolveImageUrl("/images/web_company/web_003_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_004",
        sort: 0,
        pageTitle:"大漢中醫醫療聯盟網",
        image: resolveImageUrl("/images/web_company/web_004.webp"),
        images: [
          resolveImageUrl("/images/web_company/web_004.webp"),
          resolveImageUrl("/images/web_company/web_004_2.webp"),
        ]
      },

      {
        type: "list",
        id: "web_005",
        sort: 0,
        pageTitle:"內湖101健康管理診所",
        image: resolveImageUrl("/images/web_company/web_008.webp"),
        url: "https://www.neihu101.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_008.webp"),
          resolveImageUrl("/images/web_company/web_008_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_006",
        sort: 0,
        pageTitle:"ARTASTY雅聖烘培坊",
        image: resolveImageUrl("/images/web_company/web_005.webp"),
        images: [
          resolveImageUrl("/images/web_company/web_005.webp"),
        ]
      },
      {
        type: "list",
        id: "web_007",
        sort: 0,
        pageTitle:"群義科技有限公司",
        image: resolveImageUrl("/images/web_company/web_006.webp"),
        images: [
          resolveImageUrl("/images/web_company/web_006.webp"),
          resolveImageUrl("/images/web_company/web_006_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_008",
        sort: 0,
        pageTitle:"華綺資訊股份有限公司",
        image: resolveImageUrl("/images/web_company/web_007.webp"),
        url: "https://www.logerp.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_007.webp"),
          resolveImageUrl("/images/web_company/web_007_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_023",
        sort: 0,
        pageTitle:"TKLAB",
        image: resolveImageUrl("/images/web_company/web_025.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_025.webp"),
        ]
      },
      {
        type: "list",
        id: "web_009",
        sort: 0,
        pageTitle:"翔郁整合行銷有限公司",
        image: resolveImageUrl("/images/web_company/web_011.webp"),
        url: "https://www.xyu.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_011.webp"),
          resolveImageUrl("/images/web_company/web_011_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_011",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_014.webp"),
        pageTitle:"中央大學 化學工程與材料工程學系",
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_014.webp"),
        ]
      },
      {
        type: "list",
        id: "web_012",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_018.webp"),
        pageTitle:"涵萃生物科技",
        url: "https://www.herbterra.com.tw/",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_018.webp"),
          resolveImageUrl("/images/web_company/web_018_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_013",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_017.webp"),
        pageTitle:"CALL ME 防霉貼片",
        url: "https://tw.cleanmold.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_017.webp"),
          resolveImageUrl("/images/web_company/web_017_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_014",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_019.webp"),
        pageTitle:"WICOM 抗噪耳機",
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_019.webp"),
          resolveImageUrl("/images/web_company/web_019_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_015",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_027.webp"),
        pageTitle:"聖元創新整合股份有限公司",
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_027.webp"),
          resolveImageUrl("/images/web_company/web_027_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_016",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_020.webp"),
        pageTitle:"御珍寶國際有限公司",
        url: "https://www.0800698198.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_020.webp"),
        ]
      },
      {
        type: "list",
        id: "web_017",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_021.webp"),
        pageTitle:"億新科技有限公司",
        url: "https://www.etc-s.com",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_021.webp"),
          resolveImageUrl("/images/web_company/web_021_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_018",
        sort: 0,
        pageTitle:"桶一天下現滷網",
        image: resolveImageUrl("/images/web_company/web_022.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_022.webp"),
          resolveImageUrl("/images/web_company/web_022_3.webp"),
          resolveImageUrl("/images/web_company/web_022_4.webp"),
          resolveImageUrl("/images/web_company/web_022_5.webp"),
        ]
      },
      {
        type: "list",
        id: "web_019",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_024.webp"),
        pageTitle:"雋上科技有限公司",
        url: "https://www.js-tech.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_024.webp"),
          resolveImageUrl("/images/web_company/web_024_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_021",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_028.webp"),
        pageTitle:"名一生物科技股份有限公司",
        url: "https://www.yofa-tech.com",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_028.webp"),
          resolveImageUrl("/images/web_company/web_028_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_020",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_026.webp"),
        pageTitle:"豐洲企業股份有限公司",
        url: "https://www.fongchow.com.tw",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_026.webp"),
          resolveImageUrl("/images/web_company/web_026_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_022",
        sort: 0,
        image: resolveImageUrl("/images/web_company/web_012.webp"),
        pageTitle:"光點石材",
        url: "https://www.lightstone.com.tw/",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_company/web_012.webp"),
          resolveImageUrl("/images/web_company/web_012_2.webp"),
        ]
      },
    ]
  },
  {
    type: "gallery",
    id: "gallery_002",
    notInIndex: false,
    sort: 0,
    image: resolveImageUrl("/images/web_game/web_game_cover.webp"),
    title: "遊戲平台",
    summary: "主要為形象網站的網頁主視覺設計，依造客戶需求，設計符合公司形象的網站視覺。工作範疇包括視覺設計/ Banner圖製作與前端切版。",
    navigation: [
      {
        title: "形象網站",
        jumpToId: "gallery_001"
      },
      {
        title:"遊戲娛樂",
        jumpToId: "gallery_002"
      }
    ],
    lists: [
      {
        type: "list",
        id: "web_002_07",
        sort: 0,
        image: resolveImageUrl("/images/project_001/project_001_1.webp"),
        url: "",
        myWork: "",
        pageTitle: "電子遊戲娛樂平台",
        description:"Slot Game是以電子為產品為主的娛樂服務平台。以響應式裝置方式開發, 特別的是在手機裝置下,是以手遊APP概念做為開發理念, 將手機端以橫向的設計來達到用戶玩手遊感的真實感。 \
        我在專案裡負責網站的UIUX設計, 在視覺上採用暗色系, 搭配元素繽紛的色調, 試圖營造輕鬆、 釋放壓力、愉快的氛圍, 讓使用者能沈靜在娛樂的情境之中。",
        images: [
          resolveImageUrl("/images/project_001/project_001_1.webp"),
          resolveImageUrl("/images/project_001/project_001_2.webp"),
          resolveImageUrl("/images/project_001/project_001_3.webp"),
          resolveImageUrl("/images/project_001/project_001_4.webp"),
          resolveImageUrl("/images/project_001/project_001_5.webp"),
          resolveImageUrl("/images/project_001/project_001_6.webp"),
          resolveImageUrl("/images/project_001/project_001_7.webp"),
          resolveImageUrl("/images/project_001/project_001_8.webp"),
          resolveImageUrl("/images/project_001/project_001_9.webp"),
          resolveImageUrl("/images/project_001/project_001_10.webp"),
          resolveImageUrl("/images/project_001/project_001_11.webp"),
          resolveImageUrl("/images/project_001/project_001_12.webp"),
          resolveImageUrl("/images/project_001/project_001_13.webp"),
          resolveImageUrl("/images/project_001/project_001_14.webp"),
          resolveImageUrl("/images/project_001/project_001_15.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_09",
        sort: 0,
        image: resolveImageUrl("/images/project_002/project_002_1.webp"),
        pageTitle: "手機版-模組化UI設計",
        description:"以模組化開發的娛樂型平台，讓您快速選擇元件模組建立一個平台為開發理念。統整平台功能與制定完整的流程架構, 梳理各項功能後, 將各功能做成不同視覺的元件。 建立平台畫面時, 能任意選擇元件組成或者顏色的替換, 達到不同風格的視覺享受。",
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/project_002/project_002_1.webp"),
          resolveImageUrl("/images/project_002/project_002_2.webp"),
          resolveImageUrl("/images/project_002/project_002_3.webp"),
          resolveImageUrl("/images/project_002/project_002_4.webp"),
          resolveImageUrl("/images/project_002/project_002_5.webp"),
          resolveImageUrl("/images/project_002/project_002_6.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_08",
        sort: 0,
        pageTitle: "BUS SPORT體育娛樂平台",
        description:"產品主營為歐美市場(巴西、南美)，為體育愛好者打造更好的體育平台。 視覺採用沈穩、低飽暗色調, 營造舒服輕鬆的情緒。在設計UI時也著重於資訊的呈現, 以簡單乾淨、扁平化的方式作為設計要點。我在專案主要負責UIUX的設計,另外協同中國方設計師合作, 共同定義UI設計規範與整合模組組件。",
        image: resolveImageUrl("/images/project_003/project_003_1.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/project_003/project_003_1.webp"),
          resolveImageUrl("/images/project_003/project_003_2.webp"),
          resolveImageUrl("/images/project_003/project_003_3.webp"),
          resolveImageUrl("/images/project_003/project_003_4.webp"),
          resolveImageUrl("/images/project_003/project_003_5.webp"),
          resolveImageUrl("/images/project_003/project_003_6.webp"),
          resolveImageUrl("/images/project_003/project_003_7.webp"),
          resolveImageUrl("/images/project_003/project_003_8.webp"),
          resolveImageUrl("/images/project_003/project_003_9.webp"),
          resolveImageUrl("/images/project_003/project_003_10.webp"),
          resolveImageUrl("/images/project_003/project_003_11.webp"),
          resolveImageUrl("/images/project_003/project_003_12.webp"),
          resolveImageUrl("/images/project_003/project_003_13.webp"),
          resolveImageUrl("/images/project_003/project_003_14.webp"),
          resolveImageUrl("/images/project_003/project_003_15.webp"),
          resolveImageUrl("/images/project_003/project_003_16.webp"),
          resolveImageUrl("/images/project_003/project_003_17.webp"),
          resolveImageUrl("/images/project_003/project_003_19.webp"),
          resolveImageUrl("/images/project_003/project_003_20.webp"),
          resolveImageUrl("/images/project_003/project_003_21.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_10",
        sort: 0,
        pageTitle: "BET SPORTS前導頁面設計",
        description:" 產品主營為歐美市場(巴西、南美)，此平台為Bet Sport前導頁面,\
        在設計上保留Bet Sport的主色系, 整體走明亮清爽的風格,\
        頁面資訊主要為市場分佈、體育促銷活動推廣以及平台相關資訊。 ",
        image: resolveImageUrl("/images/web_game/project_004/project_004_1.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/project_004/project_004_2.webp"),
          resolveImageUrl("/images/web_game/project_004/project_004_3.webp"),
          resolveImageUrl("/images/web_game/project_004/project_004_4.webp"),
        ]
      },

      {
        type: "list",
        id: "web_002_02",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:" ",
        image: resolveImageUrl("/images/web_game/game_002/game_002_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_002/game_002_2.webp"),
          resolveImageUrl("/images/web_game/game_002/game_002_1.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_03",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:" ",
        image: resolveImageUrl("/images/web_game/game_003/game_003_cover.webp"),
        summary: "這裡是描述",
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_003/game_003_1.webp"),
          resolveImageUrl("/images/web_game/game_003/game_003_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_01",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:"",
        image: resolveImageUrl("/images/web_game/game_001/game_001_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_001/game_001_1.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_2.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_3.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_4.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_5.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_6.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_7.webp"),
          resolveImageUrl("/images/web_game/game_001/game_001_8.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_11",
        sort: 0,
        pageTitle: "體育平台版面設計",
        description:"視覺主要走可愛Q版的風格",
        image: resolveImageUrl("/images/web_game/game_007/game_007_1.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_007/game_007_1.webp"),
          resolveImageUrl("/images/web_game/game_007/game_007_2.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_04",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:" ",
        image: resolveImageUrl("/images/web_game/game_005.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_005.webp"),
        ]
      },

      {
        type: "list",
        id: "web_002_05",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:" ",
        image: resolveImageUrl("/images/web_game/game_004.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_004.webp"),
        ]
      },
      {
        type: "list",
        id: "web_002_06",
        sort: 0,
        pageTitle: "娛樂平台版面設計",
        description:" ",
        image: resolveImageUrl("/images/web_game/game_006.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/web_game/game_006.webp"),
        ]
      },
    ]
  },
  //廣告設計圖 - banner
  {
    type: "gallery",
    id: "gallery_003",
    notInIndex: false,
    sort: 0,
    image: resolveImageUrl("/images/banner_design/banner_cover.webp"),
    title: "活動圖設計",
    summary: "各種產業的活動視覺貼圖, 將文字內容轉化為達意、富有創意和美感兼具的高品質成品。",
    navigation: [
      {
        title: "Banner",
        jumpToId: "gallery_003"
      },
      {
        title:"Graphic",
        jumpToId: "gallery_004"
      }
    ],
    lists: [

      {
        type: "list",
        id: "banner_001_03",
        sort: 0,
        pageTitle: "USDT活動圖",
        image: resolveImageUrl("/images/banner_design/banner_003/banner_003_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_003/banner_003_1.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_08",
        sort: 0,
        pageTitle: "POP-UP彈窗廣告",
        image: resolveImageUrl("/images/banner_design/banner_008/banner_008_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_008/banner_008_1.webp"),
          resolveImageUrl("/images/banner_design/banner_008/banner_008_2.webp"),
          resolveImageUrl("/images/banner_design/banner_008/banner_008_3.webp"),
          resolveImageUrl("/images/banner_design/banner_008/banner_008_4.webp"),
          resolveImageUrl("/images/banner_design/gif/gif-title.png"),
          [
            resolveImageUrl("/images/banner_design/gif/ad_001.gif"),
            resolveImageUrl("/images/banner_design/gif/ad_002.gif"),
            resolveImageUrl("/images/banner_design/gif/ad_003.gif"),
            resolveImageUrl("/images/banner_design/gif/ad_004.gif"),
          ],
        ]
      },
      {
        type: "list",
        id: "banner_001_04",
        sort: 0,
        pageTitle: "促銷累活動圖",
        image: resolveImageUrl("/images/banner_design/banner_004/banner_004_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_004/banner_004_1.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_07",
        sort: 0,
        pageTitle: "真人遊戲類 活動圖",
        image: resolveImageUrl("/images/banner_design/banner_007/banner_007_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_007/banner_007_1.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_06",
        sort: 0,
        pageTitle: "電子類 活動圖",
        image: resolveImageUrl("/images/banner_design/banner_006/banner_006_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_006/banner_006_1.webp"),
        ]
      },

      {
        type: "list",
        id: "banner_001_02",
        sort: 0,
        pageTitle: "新年活動圖",
        image: resolveImageUrl("/images/banner_design/banner_002/banner_002_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_002/banner_002_1.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_05",
        sort: 0,
        pageTitle: "體育類 活動圖",
        image: resolveImageUrl("/images/banner_design/banner_005/banner_005_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_005/banner_005_1.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_01",
        sort: 0,
        pageTitle: "尾牙場佈-看板設計",
        image: resolveImageUrl("/images/banner_design/banner_001/banner_001_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_001/banner_001_cover.webp"),
          resolveImageUrl("/images/banner_design/banner_001/banner_001_1.webp"),
          resolveImageUrl("/images/banner_design/banner_001/banner_001_2.webp"),
        ]
      },
      {
        type: "list",
        id: "banner_001_09",
        sort: 0,
        pageTitle: "形象網站Banner視覺設計",
        image: resolveImageUrl("/images/banner_design/banner_009/banner_009_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/banner_design/banner_009/banner_009_1.webp"),
          resolveImageUrl("/images/banner_design/banner_009/banner_009_2.webp"),
          resolveImageUrl("/images/banner_design/banner_009/banner_009_3.webp"),
        ]
      },
    ]
  },
  //廣告設計圖 - EDM & 明面設計
  {
    type: "gallery",
    id: "gallery_004",
    notInIndex: false,
    sort: 0,
    image: resolveImageUrl("/images/graphic/graphic_cover.jpg"),
    title: "活動圖設計",
    summary: "電子商城的EDM廣告及文宣海報設計, 將文字內容轉化為達意、富有創意和美感兼具的高品質成品。",
    navigation: [
      {
        title: "Banner",
        jumpToId: "gallery_003"
      },
      {
        title:"Graphic",
        jumpToId: "gallery_004"
      }
    ],
    lists: [
      {
        type: "list",
        id: "graphic_001_01",
        sort: 0,
        pageTitle: "社區營造 - 海報/文宣製作 (2012年)",
        image: resolveImageUrl("/images/graphic/graphic_001/graphic_001_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/graphic_001/graphic_001_1.webp"),
          resolveImageUrl("/images/graphic/graphic_001/graphic_001_2.webp"),
        ]
      },
      {
        type: "list",
        id: "graphic_001_02",
        sort: 0,
        pageTitle: "樟湖社區植物染 - 海報/文宣製作 (2012年)",
        image: resolveImageUrl("/images/graphic/graphic_002/graphic_002_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/graphic_002/graphic_002_cover.webp"),
          resolveImageUrl("/images/graphic/graphic_002/graphic_002_1.webp"),
          resolveImageUrl("/images/graphic/graphic_002/graphic_002_2.webp"),
          resolveImageUrl("/images/graphic/graphic_002/graphic_002_3.webp"),
        ]
      },
      {
        type: "list",
        id: "graphic_001_03",
        sort: 0,
        pageTitle: "五分植物工作坊 - 文宣製作 (2015年)",
        image: resolveImageUrl("/images/graphic/graphic_003/graphic_003_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/graphic_003/graphic_003_1.webp"),
          resolveImageUrl("/images/graphic/graphic_003/graphic_003_2.webp"),
          resolveImageUrl("/images/graphic/graphic_003/graphic_003_3.webp"),
          resolveImageUrl("/images/graphic/graphic_003/graphic_003_4.webp"),
        ]
      },
      {
        type: "list",
        id: "edm_001_03",
        sort: 0,
        pageTitle: "私密青春潔浴露 (2013年)",
        image: resolveImageUrl("/images/graphic/edm/edm_003/edm_003_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/edm/edm_003/edm_003_1.webp"),
        ]
      },
      {
        type: "list",
        id: "edm_001_02",
        sort: 0,
        pageTitle: "E2C寶寶身體乳 (2013年)",
        image: resolveImageUrl("/images/graphic/edm/edm_002/edm_002_cover.jpg"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/edm/edm_002/edm_002_1.png"),
        ]
      },
      {
        type: "list",
        id: "edm_001_04",
        sort: 0,
        pageTitle: "美腿神器 隱形絲襪噴霧 (2013年)",
        image: resolveImageUrl("/images/graphic/edm/edm_004/edm_004_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/edm/edm_004/edm_004_1.webp"),
        ]
      },
      {
        type: "list",
        id: "edm_001_01",
        sort: 0,
        pageTitle: "天然橄欖油護膚嬰兒油 (2013年)",
        image: resolveImageUrl("/images/graphic/edm/edm_001/edm_001_cover.webp"),
        url: "",
        myWork: "",
        images: [
          resolveImageUrl("/images/graphic/edm/edm_001/edm_001_1.webp"),
        ]
      },
    ]
  },
]