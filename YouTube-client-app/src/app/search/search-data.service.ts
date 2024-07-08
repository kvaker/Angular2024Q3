import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { SearchResponse } from "./search-response.model";

@Injectable({
    providedIn: "root",
})
export class SearchDataService {
    static getMockSearchResults(): Observable<SearchResponse> {
        const mockData: SearchResponse = {
            kind: "youtube#videoListResponse",
            etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\"",
            pageInfo: {
                totalResults: 10,
                resultsPerPage: 10,
            },
            items: [
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\"",
                    id: "YN8zNnV0sK8",
                    snippet: {
                        publishedAt: "2024-06-11T12:42:19.000Z",
                        channelId: "UCg8ss4xW9jASrqWGP30jXiw",
                        title: "Introduction to Angular - Learning Angular",
                        description: "In this series, learn how to build your first Angular application...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Angular",
                        tags: [
                            "angular",
                            "angular 8",
                            "angularjs",
                            "js",
                            "javascript",
                            "rxjs",
                            "angular 60 минут",
                            "angular 1 час",
                            "angular 8 1 час",
                            "владилен минин",
                            "уроки javascript",
                            "angular 2",
                            "angular 4",
                            "angular уроки",
                            "курс angular",
                            "основы angular",
                            "angular фреймворк",
                            "angular уроки для начинающих",
                            "уроки angular",
                            "angular практика",
                            "ангуляр",
                            "angular изучение",
                            "angular курс",
                            "ангуляр 4 уроки",
                            "angular уроки на русском",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Introduction to Angular - Learning Angular",
                            description: "In this series, learn how to build your first Angular application...",
                        },
                        defaultAudioLanguage: "en-US",
                    },
                    statistics: {
                        viewCount: "33265",
                        likeCount: "1173",
                        dislikeCount: "26",
                        favoriteCount: "0",
                        commentCount: "170",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ\"",
                    id: "Fdf5aTYRW0E",
                    snippet: {
                        publishedAt: "2024-05-30T17:46:58.000Z",
                        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
                        title: "Angular Crash Course",
                        description:
              "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, "
              + "looking at most of the fundamental concepts like components, services, modules, etc",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Traversy Media",
                        tags: ["angular", "angular 7", "angular tutorial", "angularjs"],
                        categoryId: "28",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Angular Crash Course",
                            description:
                ` In this video we will talk about what Angular is and then jump in and build a small app
                    With Angular 7, looking at most of the fundamental concepts like components, services,
                    modules, etc`,
                        },
                        defaultAudioLanguage: "en",
                    },
                    statistics: {
                        viewCount: "456979",
                        likeCount: "8213",
                        dislikeCount: "131",
                        favoriteCount: "0",
                        commentCount: "555",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A\"",
                    id: "k5E2AVpwsko",
                    snippet: {
                        publishedAt: "2024-03-05T16:48:15.000Z",
                        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
                        title: "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
                        description: "🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME)",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Programming with Mosh",
                        tags: [
                            "learn angular 4",
                            "learn angular 4 from scratch",
                            "angular4",
                            "learn angular",
                            "angular tutorial",
                            "angular 4",
                            "Angular",
                            "angular 5",
                            "angular 5 course",
                            "angular course",
                            "angular.js",
                            "angularjs",
                            "angular 2",
                            "angular2",
                            "angular 4 tutorial",
                            "angular 4 tutorial for beginners",
                            "angular tutorial for beginners",
                            "angular 4 crash course",
                            "angular 4 in 60 minutes",
                            "angularjs 4",
                            "angular 4 tutorial for beginners step by step",
                            "angular js",
                            "angularjs tutorial for beginners",
                            "angular 6",
                            "angular 7",
                        ],
                        categoryId: "22",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
                            description:
                `🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/ "
                + "This Angular tutorial teaches you the fundamentals of Angular and TypeScript. " +
                "\n\nSUBSCRIBE FOR MORE VIDEOS! "
                + "\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT "
                + "\n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n`,
                        },
                        defaultAudioLanguage: "en-US",
                    },
                    statistics: {
                        viewCount: "1266085",
                        likeCount: "18342",
                        dislikeCount: "473",
                        favoriteCount: "0",
                        commentCount: "1255",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY\"",
                    id: "Rf54BH35yrY",
                    snippet: {
                        publishedAt: "2024-04-04T15:00:12.000Z",
                        channelId: "UCg8ss4xW9jASrqWGP30jXiw",
                        title: "Angular 8 Основы. Полный Курс для начинающих",
                        description: "Полный курс по Angular 8+",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Владилен Минин",
                        tags: [
                            "angular",
                            "angularjs",
                            "js",
                            "javascript",
                            "уроки angular",
                            "angular уроки",
                            "angular 8",
                            "курс angular",
                            "angular основы",
                            "владилен",
                            "владилен минин",
                            "минин",
                            "основы angular",
                            "ангуляр",
                            "angular 6",
                            "angular js",
                            "angular уроки для начинающих",
                            "angular фреймворк",
                            "angular практика",
                            "что такое angular",
                            "angular cli",
                            "angular уроки на русском",
                            "курсы программирования",
                            "angular tutorial",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Angular 8 Основы. Полный Курс для начинающих",
                            description:
                "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня Урок для Новичков",
                        },
                        defaultAudioLanguage: "en-US",
                    },
                    statistics: {
                        viewCount: "14544",
                        likeCount: "573",
                        dislikeCount: "11",
                        favoriteCount: "0",
                        commentCount: "88",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY\"",
                    id: "m0yGx2MGZWg",
                    snippet: {
                        publishedAt: "2024-06-25T07:44:08.000Z",
                        channelId: "UCe_H8hzx9WV7Ca7Ps5gt72Q",
                        title: "Что такое Angular. Обзор возможностей",
                        description:
              `В этом видео речь пойдет про javascript фреймворк Angular. "
              + "Я расскажу что такое Angular, где и когда его применяют, " +
              "а также сделаю небольшой обзор его возможностей.`,
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Web Developer Blog",
                        tags: [
                            "angular",
                            "ангуляр",
                            "angular js",
                            "уроки angular",
                            "angular уроки",
                            "angular tutorial",
                            "что такое angular",
                            "angular обзор",
                            "angular фреймворк",
                            "js",
                            "javascript",
                            "web development",
                            "angular 6",
                            "angular примеры",
                            "angular практика",
                            "стоит ли учить angular",
                            "angular учить",
                            "программирование",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Что такое Angular. Обзор возможностей",
                            description:
                `В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, "
                + "где и когда его применяют, а так же сделаю небольшой обзор " +
                "его возможностей. Расскажу чем фреймворк `,
                        },
                        defaultAudioLanguage: "ru",
                    },
                    statistics: {
                        viewCount: "43470",
                        likeCount: "1047",
                        dislikeCount: "198",
                        favoriteCount: "0",
                        commentCount: "96",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4\"",
                    id: "VAkio68d51A",
                    snippet: {
                        publishedAt: "2019-02-25T00:09:23.000Z",
                        channelId: "UCZ9qFEC82qM6Pk-54Q4TVWA",
                        title: "What is Angular? (Explained for Beginners)",
                        description: "When you're just starting out you are probably wondering...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/VAkio68d51A/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Andy Sterkowitz",
                        tags: [
                            "angular",
                            "angular 7",
                            "angularjs",
                            "learn angular",
                            "angular.js",
                            "angular tutorial for beginners",
                            "angular for beginners",
                            "angular for dummies",
                            "what is angular",
                            "what is angular 7",
                            "angular2",
                            "angular 2",
                            "javascript",
                            "front end framework",
                            "web development",
                            "web development 2019",
                            "front end framework 2019",
                            "what is a front end framework",
                            "software development",
                            "programming",
                            "front end software developer",
                            "web developer",
                        ],
                        categoryId: "28",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "What is Angular? (Explained for Beginners)",
                            description:
                `When you're just starting out you are probably wondering "What is Angular exactly? "
                + "When you ask that question it leads to a lot of concepts " + 
                "that are over your head and don't make sense. "
                + "https://andysterkowitz.com/report`,
                        },
                        defaultAudioLanguage: "en",
                    },
                    statistics: {
                        viewCount: "57997",
                        likeCount: "1662",
                        dislikeCount: "34",
                        favoriteCount: "0",
                        commentCount: "114",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg\"",
                    id: "u1VCxpvDgsk",
                    snippet: {
                        publishedAt: "2018-12-01T15:00:05.000Z",
                        channelId: "UCvuY904el7JvBlPbdqbfguw",
                        title: "Уроки Angular для начинающих / #1 - Введение в Angular",
                        description:
              "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт "
              + "и научимся всем основным концепциям библиотеки Angular.",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Гоша Дударь",
                        tags: [
                            "angular",
                            "angular 6",
                            "angular уроки",
                            "angular node js",
                            "angularjs",
                            "angularjs уроки",
                            "для начинающих",
                            "angular уроки на русском",
                            "Введение в Angular",
                            "что такое angular",
                            "установка angular",
                            "#GoshaDudar",
                            "#goshaAngular",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Уроки Angular для начинающих / #1 - Введение в Angular",
                            description:
                "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт "
                + "и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, "
                        },
                        defaultAudioLanguage: "ru",
                    },
                    statistics: {
                        viewCount: "33896",
                        likeCount: "612",
                        dislikeCount: "37",
                        favoriteCount: "0",
                        commentCount: "50",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME\"",
                    id: "4KBVkQ7b6yk",
                    snippet: {
                        publishedAt: "2024-02-22T15:00:14.000Z",
                        channelId: "UCg8ss4xW9jASrqWGP30jXiw",
                        title: "Top 50 Angular Interview Questions",
                        description: "Angular Interview Masterclass",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Interview Happy",
                        tags: [
                            "angular",
                            "angularjs",
                            "js",
                            "javascript",
                            "уроки angular",
                            "angular уроки",
                            "angular 8",
                            "курс angular",
                            "angular основы",
                            "владилен",
                            "владилен минин",
                            "минин",
                            "основы angular",
                            "angular вопросы",
                            "angular интервью",
                            "собеседование",
                            "angular собеседование",
                            "вопросы на собеседование",
                            "angular 6",
                            "angular для начинающих",
                            "angular уроки на русском",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Top 50 Angular Interview Questions",
                            description: "Angular Interview Masterclass",
                        },
                        defaultAudioLanguage: "en-US",
                    },
                    statistics: {
                        viewCount: "6824",
                        likeCount: "595",
                        dislikeCount: "10",
                        favoriteCount: "0",
                        commentCount: "126",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg\"",
                    id: "xGgwQvza0Ns",
                    snippet: {
                        publishedAt: "2023-07-31T16:06:13.000Z",
                        channelId: "UCg8ss4xW9jASrqWGP30jXiw",
                        title: "RxJs In Practice Course",
                        description:
              `In this lessons we will start learning RxJs at the beginning: " +
              "we are going to start with the most fundamental "
              + "RxJs concept which is the Stream of Values.`,
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Angular University",
                        tags: [
                            "angular",
                            "angular 8",
                            "vladilen",
                            "владилен",
                            "владилен минин",
                            "angularjs",
                            "angular практика",
                            "уроки angular",
                            "rxjs",
                            "rxjs уроки",
                            "momentjs",
                            "js",
                            "javascript",
                            "web",
                            "frontend",
                            "ангуляр",
                            "angular уроки",
                            "angular уроки для начинающих",
                            "создание приложения на angular 4",
                            "angular 60 минут",
                            "изучение angular",
                            "angular 6",
                            "ангуляр 7 уроки",
                            "реактивное программирование",
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "RxJs In Practice Course",
                            description:
                "In this lessons we will start learning RxJs at the beginning: we are going to start with the most "
                + "fundamental RxJs concept which is the Stream of Values.",
                        },
                        defaultAudioLanguage: "en-US",
                    },
                    statistics: {
                        viewCount: "12128",
                        likeCount: "665",
                        dislikeCount: "11",
                        favoriteCount: "0",
                        commentCount: "156",
                    },
                },
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o\"",
                    id: "G0bBLvWXBvc",
                    snippet: {
                        publishedAt: "2023-09-16T16:53:41.000Z",
                        channelId: "UCsBjURrPoezykLs9EqgamOA",
                        title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
                        description:
              "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg",
                                width: 640,
                                height: 480,
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",
                                width: 1280,
                                height: 720,
                            },
                        },
                        channelTitle: "Fireship",
                        tags: [
                            "webdev",
                            "app development",
                            "lesson",
                            "tutorial",
                            "beginners",
                            "beginner",
                            "basic",
                            "angular tutorial",
                            "angular basics",
                            "angular for beginners",
                            "angular 8",
                            "angular components",
                            "learn angular",
                        ],
                        categoryId: "28",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
                            description:
                "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch... "
                + "Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉 "
                + "https://fireship.io/courses/angular/\n\nFull Source Code: ",
                        },
                        defaultAudioLanguage: "en",
                    },
                    statistics: {
                        viewCount: "56657",
                        likeCount: "2092",
                        dislikeCount: "36",
                        favoriteCount: "0",
                        commentCount: "128",
                    },
                },
            ],
        };
        return of(mockData);
    }
}
