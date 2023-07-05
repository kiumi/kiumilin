export interface BaseData {
  id: string,
  sort: number,
  image: string,
  title?: string,
  summary?: string,
}

export interface ListData extends BaseData {
  type: "list",
  images: string[],
  url?: string,
  myWork?: string,
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
    image: "/images/project_001.jpg",
    title: "Slot Game Web & Mobile UI/UX Design",
    summary: "Slot Game是以電子為產品為主的娛樂服務平台。以響應式裝置方式開發, 特別的是在手機裝置下,\
    是以手遊APP概念做為開發理念, 將手機端以橫向的設計來達到用戶玩手遊感的真實感。 \
    \
    我在專案裡負責網站的UIUX設計, 在視覺上採用暗色系, 搭配元素繽紛的色調, 試圖營造輕鬆、\
    釋放壓力、愉快的氛圍, 讓使用者能沈靜在娛樂的情境之中。",
    images: [
      "/images/project_001/project_001_1.webp",
      "/images/project_001/project_001_2.webp",
      "/images/project_001/project_001_3.webp",
      "/images/project_001/project_001_4.webp",
      "/images/project_001/project_001_5.webp",
      "/images/project_001/project_001_6.webp",
      "/images/project_001/project_001_7.webp",
      "/images/project_001/project_001_8.webp",
      "/images/project_001/project_001_9.webp",
      "/images/project_001/project_001_10.webp",
      "/images/project_001/project_001_11.webp",
      "/images/project_001/project_001_12.webp",
      "/images/project_001/project_001_13.webp",
      "/images/project_001/project_001_14.webp",
      "/images/project_001/project_001_15.webp",
    ]
  },
  {
    type: "list",
    id: "project_002",
    sort: 0,
    image: "/images/project_002.jpg",
    title: "Module Mobile UI Design 模組化平台",
    summary: "以模組化開發的娛樂型平台，讓您快速選擇元件模組建立一個平台為開發理念。統整平台功能與制定完整的流程架構, 梳理各項功能後, 將各功能做成不同視覺的元件。 \
    \
    建立平台畫面時, 能任意選擇元件組成或者顏色的替換, 達到不同風格的視覺享受。",
    images: [
      "/images/project_002/project_002_1.webp",
      "/images/project_002/project_002_2.webp",
      "/images/project_002/project_002_3.webp",
      "/images/project_002/project_002_4.webp",
      "/images/project_002/project_002_5.webp",
    ]
  },
  {
    type: "list",
    id: "project_003",
    sort: 0,
    image: "/images/project_003/project_003_1.webp",
    title: "BUS SPORT",
    summary: "產品主營為歐美市場(巴西、南美)，為體育愛好者打造更好的體育平台。 \
    \
    視覺採用沈穩、低飽暗色調, 營造舒服輕鬆的情緒。在設計UI時也著重於資訊的呈現, 以簡單乾淨、扁平化的方式作為設計要點。我在專案主要負責UIUX的設計,另外協同中國方設計師合作, 共同定義UI設計規範與整合模組組件。",
    images: [
      "/images/project_003/project_003_1.webp",
      "/images/project_003/project_003_2.webp",
      "/images/project_003/project_003_3.webp",
      "/images/project_003/project_003_4.webp",
      "/images/project_003/project_003_5.webp",
      "/images/project_003/project_003_6.webp",
      "/images/project_003/project_003_7.webp",
      "/images/project_003/project_003_8.webp",
      "/images/project_003/project_003_9.webp",
      "/images/project_003/project_003_10.webp",
      "/images/project_003/project_003_11.webp",
      "/images/project_003/project_003_12.webp",
      "/images/project_003/project_003_13.webp",
      "/images/project_003/project_003_14.webp",
      "/images/project_003/project_003_15.webp",
      "/images/project_003/project_003_16.webp",
      "/images/project_003/project_003_17.webp",
      "/images/project_003/project_003_19.webp",
      "/images/project_003/project_003_20.webp",
      "/images/project_003/project_003_21.webp",
    ]
  },
  {
    type: "gallery",
    id: "gallery_001",
    sort: 0,
    image: "/images/web_company/web_company_cover.jpg",
    title: "形象網站",
    summary: "主要為形象網站的網頁主視覺設計，依造客戶需求，設計符合公司形象的網站視覺。工作範疇包括視覺設計/ Banner圖製作與前端切版。",
    navigation: [
      {
        title: "形象網站",
        jumpToId: "gallery_001"
      },
      // {
      //   title: "遊戲娛樂",
      //   jumpToId: "gallery_002"
      // }
    ],
    lists: [
      {
        type: "list",
        id: "web_001",
        sort: 0,
        image: "/images/web_company/web_001.jpg",
        summary: "這裡是描述",
        url: "www.google.com",
        myWork: "吃飯睡覺像小豬",
        images: [
          "/images/web_company/web_001.jpg",
          "/images/web_company/web_001_2.jpg",
        ]
      },
      {
        type: "list",
        id: "web_002",
        sort: 0,
        image: "/images/web_company/web_007.jpg",
        images: [
          "/images/web_company/web_007.jpg",
        ]
      },
      {
        type: "list",
        id: "web_003",
        sort: 0,
        image: "/images/web_company/web_003.jpg",
        images: [
          "/images/project_001/project_001_1.webp",
          "/images/project_001/project_001_2.webp",
          "/images/project_001/project_001_3.webp",
          "/images/project_001/project_001_4.webp",
          "/images/project_001/project_001_5.webp",
          "/images/project_001/project_001_6.webp",
          "/images/project_001/project_001_7.webp",
          "/images/project_001/project_001_8.webp",
          "/images/project_001/project_001_9.webp",
          "/images/project_001/project_001_10.webp",
          "/images/project_001/project_001_11.webp",
          "/images/project_001/project_001_12.webp",
          "/images/project_001/project_001_13.webp",
          "/images/project_001/project_001_14.webp",
          "/images/project_001/project_001_15.webp",
        ]
      },
      {
        type: "list",
        id: "web_004",
        sort: 0,
        image: "/images/web_company/web_004.jpg",
        images: [
          "/images/project_001/project_001_1.webp",
          "/images/project_001/project_001_2.webp",
          "/images/project_001/project_001_3.webp",
          "/images/project_001/project_001_4.webp",
          "/images/project_001/project_001_5.webp",
          "/images/project_001/project_001_6.webp",
          "/images/project_001/project_001_7.webp",
          "/images/project_001/project_001_8.webp",
          "/images/project_001/project_001_9.webp",
          "/images/project_001/project_001_10.webp",
          "/images/project_001/project_001_11.webp",
          "/images/project_001/project_001_12.webp",
          "/images/project_001/project_001_13.webp",
          "/images/project_001/project_001_14.webp",
          "/images/project_001/project_001_15.webp",
        ]
      },
      {
        type: "list",
        id: "web_005",
        sort: 0,
        image: "/images/web_company/web_005.jpg",
        images: [
          "/images/project_001/project_001_1.webp",
          "/images/project_001/project_001_2.webp",
          "/images/project_001/project_001_3.webp",
          "/images/project_001/project_001_4.webp",
          "/images/project_001/project_001_5.webp",
          "/images/project_001/project_001_6.webp",
          "/images/project_001/project_001_7.webp",
          "/images/project_001/project_001_8.webp",
          "/images/project_001/project_001_9.webp",
          "/images/project_001/project_001_10.webp",
          "/images/project_001/project_001_11.webp",
          "/images/project_001/project_001_12.webp",
          "/images/project_001/project_001_13.webp",
          "/images/project_001/project_001_14.webp",
          "/images/project_001/project_001_15.webp",
        ]
      },
      {
        type: "list",
        id: "web_006",
        sort: 0,
        image: "/images/web_company/web_006.jpg",
        images: [
          "/images/project_001/project_001_1.webp",
          "/images/project_001/project_001_2.webp",
          "/images/project_001/project_001_3.webp",
          "/images/project_001/project_001_4.webp",
          "/images/project_001/project_001_5.webp",
          "/images/project_001/project_001_6.webp",
          "/images/project_001/project_001_7.webp",
          "/images/project_001/project_001_8.webp",
          "/images/project_001/project_001_9.webp",
          "/images/project_001/project_001_10.webp",
          "/images/project_001/project_001_11.webp",
          "/images/project_001/project_001_12.webp",
          "/images/project_001/project_001_13.webp",
          "/images/project_001/project_001_14.webp",
          "/images/project_001/project_001_15.webp",
        ]
      }
    ]
  },

]