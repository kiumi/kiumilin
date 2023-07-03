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
}

export interface GalleryData extends BaseData {
  type: "gallery",
  lists: DiverseData,
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
    是以手遊APP概念做為開發理念, 將手機端以橫向的設計來達到用戶玩手遊感的真實感。 <br /><br />\
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
    type: "gallery",
    id: "gallery_001",
    sort: 0,
    image: "/images/project_002.jpg",
    title: "Slot Game Web & Mobile UI/UX Design",
    summary: "Slot Game是以電子為產品為主的娛樂服務平台。以響應式裝置方式開發, 特別的是在手機裝置下,\
    是以手遊APP概念做為開發理念, 將手機端以橫向的設計來達到用戶玩手遊感的真實感。 <br /><br />\
    \
    我在專案裡負責網站的UIUX設計, 在視覺上採用暗色系, 搭配元素繽紛的色調, 試圖營造輕鬆、\
    釋放壓力、愉快的氛圍, 讓使用者能沈靜在娛樂的情境之中。",
    lists: [
      {
        type: "list",
        id: "web_001",
        sort: 0,
        image: "/images/web_company/web_001.jpg",
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
        id: "web_002",
        sort: 0,
        image: "/images/web_company/web_002.jpg",
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