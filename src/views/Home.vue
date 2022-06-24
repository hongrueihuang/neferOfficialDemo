<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import Wrapper from '@/components/Wrapper.vue';
    import Navbar from '@/components/Navbar.vue';
    const router = useRouter();
    const wrapperRef = ref(null);
    const block = ref(0);
    const needs = ref([
        {
            id: 'option1',
            title: '報價諮詢'
        },
        {
            id: 'option2',
            title: '尋找合作夥伴'
        },
        {
            id: 'option3',
            title: '其他'
        }
    ]);
    const chooseNeed = ref('option1');
    const navbarList = ref([
        {
            title: '關於我們',
            enTitle: 'ABOUT',
            sort: 1,
            isRouter: false,
            anchor: 1
        },
        {
            title: '服務項目',
            enTitle: 'SERVICE',
            sort: 2,
            isRouter: false,
            anchor: 2
        },
        {
            title: '產品項目',
            enTitle: 'PRODUCTS',
            sort: 3,
            isRouter: false,
            anchor: 3
        },
        {
            title: '聯絡我們',
            enTitle: 'CONTACT',
            sort: 4,
            isRouter: false,
            anchor: 4
        },
    ])

    const scrollToBlock = (val = 0) => {
       wrapperRef.value.scrollToBlock(val)
    }

    const updateBlock = (val) => {
        block.value = val;
    }

    const goProducts = () => {
        router.push('/products')
    }
</script>

<template>
    <Wrapper :block="block" @updateBlock="updateBlock" ref="wrapperRef">
        <template v-slot>
            <Navbar :navbar-list="navbarList" @goSomeBlock="scrollToBlock" />
            <section class="full-page" :class="{active : block === 0}">
                <div class="bg bg-one">
                    <div class="shield"></div>
                </div>
            </section>
            <section class="full-page" :class="{active : block === 1}">
                <div class="bg bg-two">
                    <div class="content">
                        <img src="../assets/images/about-title.png" alt="關於我們" data-aos="fade-up" data-aos-delay="700">
                        <p class="subtitle" data-aos="fade-up" data-aos-delay="1100">結合大數據及運營手段，為客戶提供千人千面的個性化服務</p>
                        <div class="about-icon" data-aos="fade-up" data-aos-delay="1500">
                            <img src="../assets/images/about-icon.png" alt="">
                        </div>
                        <p class="about-paragraph" data-aos="fade-up" data-aos-delay="1900">
                            數字生活無處不在隨處可及，用戶接觸服務的渠道和方式凸顯垂直的態勢，基
                            於數據分析的服務“端”已經超越了傳統的服務渠道定位，需要堅持更加精細的
                            佈局。通過分析用戶訴求，端可利用線上諮詢為用戶提供人性化，個性化的服
                            務體驗，將問題識別，問題自助解決，分流人工等服務流程全部打通，提供7x24
                            不間斷的服務。為實現服務對用戶觸手可及，端需基於用戶習慣和使用場景持續
                            擴展服務端類型的能力（如對雲端主機等）。目前大多數核心的服務端為在線端。
                        </p>
                    </div>
                </div>
            </section>
            <section class="full-page" :class="{active : block === 2}">
                <div class="bg bg-tri" data-aos="fade-up">
                    <div class="content">
                        <img src="../assets/images/service-title.png" alt="服務項目" data-aos="fade-up" data-aos-delay="500">
                        <p class="subtitle" data-aos="fade-up" data-aos-delay="700">專業團隊，提供全方位數位服務，全年無休不間斷守護您的資訊安全</p>
                        <ul class="service-list">
                            <li class="service-list-item" data-aos="fade-up" data-aos-delay="900">
                                <div class="top-bg">
                                    <div class="top-bg-layer ddos">
                                        <img src="../assets/images/service-shield.png" alt="service-shield">
                                    </div>
                                </div>
                                <h3 class="title">DDOS緩解服務</h3>
                                <p class="info">
                                    經驗豐富的雲端維運團隊<br />
                                    強壯的全球網路防禦資源
                                </p>
                            </li>
                            <li class="service-list-item" data-aos="fade-up" data-aos-delay="1100">
                                <div class="top-bg">
                                    <div class="top-bg-layer cloud">
                                        <img src="../assets/images/service-cloud-icon.png" alt="service-shield">
                                    </div>
                                </div>
                                <h3 class="title">擁抱雲的趨勢</h3>
                                <p class="info">
                                    無論您的應用程式和資料位於何處<br />
                                    都能盡享為您量身打造的雲端服務
                                </p>
                            </li>
                            <li class="service-list-item" data-aos="fade-up" data-aos-delay="1300">
                                <div class="top-bg">
                                    <div class="top-bg-layer soft">
                                        <img src="../assets/images/service-shield2.png" alt="service-shield">
                                    </div>
                                </div>
                                <h3 class="title">軟體開發服務</h3>
                                <p class="info text-left">
                                    提供的軟體開發包括網頁設計、Android 及
                                    IOS APP開發、企業應用系統整合、金物流
                                    串接、大數據及遊戲軟體開發
                                    <div class="more" @click="router.push('/products')">
                                        <span class="text-[#e40000]">more</span>
                                        <span class="more-arrow"></span>
                                    </div>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="full-page" :class="{active : block === 3}">
                <div class="bg bg-four">
                    <div class="content">
                        <img src="../assets/images/product-title.png" alt="產品介紹" data-aos="fade-up" data-aos-delay="700">
                        <ul class="product-list">
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="1000">
                                <img src="../assets/images/product-HPE-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>HPE雲端服務</span>
                                    <small>HPE Cloud Service</small>
                                </h3>
                                <p class="info">
                                    協助您建置適合您業務發展的雲端，同時
                                    發展您的團隊文化和技能。整合公有雲、
                                    私有雲與舊式 IT，從容應對一般雲端挑戰。
                                </p>
                            </li>
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="1300">
                                <img src="../assets/images/product-DDoS-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>雲端DDoS 防護服務</span>
                                    <small>Distributed Denial-of-Service</small>
                                </h3>
                                <p class="info">
                                    借助全面的自動化雲DDoS防護服務抵禦
                                    不斷演變的網絡威脅。該服務會持續調整
                                    適應以提供最快速的威脅檢測和風險緩解。
                                </p>
                            </li>
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="1600">
                                <img src="../assets/images/product-ESM-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>ESM 監控服務</span>
                                    <small>Enterprise Security Management</small>
                                </h3>
                                <p class="info">
                                    1.即時顯示監控主機資源現況，持續監控
                                    主機狀態。2.最新資安事件威脅現況即時
                                    偵測，及早發覺威脅。3.精準通報異常行
                                    為，快速通知潛藏威脅。
                                </p>
                            </li>
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="1900">
                                <img src="../assets/images/product-Akamai-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>Akamai 智慧平台</span>
                                    <small>Akamai Intelligent Platform</small>
                                </h3>
                                <p class="info">
                                    透過多層次與託管式的安全服務，能幫助
                                    企業向終端用戶提供最快速、穩定和安全
                                    的網際網路體驗，隨時支援客戶的需求，
                                    讓企業能夠安全地運用雲端方案。
                                </p>
                            </li>
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="2200">
                                <img src="../assets/images/product-VMware-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>VMware 雲端服務</span>
                                    <small>Cloud Management</small>
                                </h3>
                                <p class="info">
                                    提供虛擬化和雲端基礎架構解決方案，協
                                    助企業成功打造雲端，漸進的依照特定需
                                    求，改善IT資源的營運、傳送與消耗。
                                </p>
                            </li>
                            <li class="product-list-item" data-aos="fade-up" data-aos-delay="2500">
                                <img src="../assets/images/product-Datto-icon.png" alt="HPE-icon">
                                <h3 class="title">
                                    <span>Datto SaaS 服務</span>
                                    <small>Datto SaaS Protection</small>
                                </h3>
                                <p class="info">
                                    無須耗損本地網路頻寬、本地儲存空間，
                                    不需要人力維護和維運，備份平台版本永
                                    保如新，使用瀏覽器操作就可以享受所有
                                    好處，簡單、快速、方便與安全一次滿足。
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="full-page" :class="{active : block === 4}">
                <div class="bg bg-fif">
                    <div class="content">
                        <img src="../assets/images/contact-title.png" alt="聯絡我們" data-aos="fade-up" data-aos-delay="700">
                        <ul class="contact-form">
                            <li class="contact-form-item" data-aos="fade-up" data-aos-delay="1000">
                                <div class="form-group">
                                    <label for="clientName">姓名：</label>
                                    <input type="text" id="clientName">
                                </div>
                                <div class="form-group">
                                    <label for="clientTel">聯絡電話：</label>
                                    <input type="tel" id="clientTel">
                                </div>
                                <div class="form-group">
                                    <label for="clientCo">公司名稱：</label>
                                    <input type="text" id="clientCo">
                                </div>
                                <div class="form-group">
                                    <label for="clientMail">E-mail：</label>
                                    <input type="mail" id="clientMail">
                                </div>
                            </li>
                            <li class="contact-form-item" data-aos="fade-up" data-aos-delay="1300">
                                <h3 class="title">需求項目：</h3>
                                <ul class="form-check-list">
                                    <li class="form-check-item" v-for="item in needs" :key="item.id">
                                        <span class="custom-radio" :class="{ active : item.id === chooseNeed }" @click="chooseNeed = item.id"></span>
                                        <input type="radio" :id="item.id" :value="item.id" v-model="chooseNeed">
                                        <label :for="item.id">{{ item.title }}</label>
                                    </li>
                                </ul>
                                <div class="form-group">
                                    <label for="clientNeed">需求說明：</label>
                                    <textarea id="clientNeed" cols="30" rows="10"></textarea>
                                </div>
                            </li>
                        </ul>
                        <div class="button-wrapper" data-aos="fade-up" data-aos-delay="1600">
                            <button type="button">送出</button>
                        </div>
                    </div>
                    <footer>
                        <img src="../assets/images/footer-LOGO.png" alt="footer-logo" class="footer-logo">
                        <ul class="footer-list">
                            <li>
                                <p>電話： <a href="tel:02-2627-2999#1002">02-2627-2999#1002</a></p>
                            </li>
                            <li>
                                <p>地址： 台北市內湖區瑞光路298號5F之1</p>
                            </li>
                            <li>
                                <p class="hover:text-[#e40000] transition-all">
                                    <a href="https://www.104.com.tw/company/1a2x6bla0i?jobsource=checkc" target="__blank">加入完美，成為我們的夥伴吧!</a>
                                </p>
                            </li>
                        </ul>
                        <p>Copyright © 2022 Nefer Digital Co., LTD. All rights reserved</p>
                    </footer>
                </div>
            </section>
        </template>
    </Wrapper>
</template>

<style scoped>
.full-page {
        @apply h-screen overflow-hidden relative;
        .bg {
            @apply absolute inset-0 bg-fit flex justify-center;

            &.bg-one {
                @apply bg-[url('@/assets/images/block-bg-1.png')] items-center;
            }

            &.bg-two {
                @apply bg-[url('@/assets/images/block-bg-2.png')];
            }

            &.bg-tri {
                @apply bg-[url('@/assets/images/block-bg-3.png')];
            }

            &.bg-four {
                @apply bg-[url('@/assets/images/block-bg-4.png')];
            }

            &.bg-fif {
                @apply bg-[url('@/assets/images/block-bg-5.png')];
            }

            .shield {
                @apply
                    bg-[url('@/assets/images/shield.png')]
                    bg-fit
                    animate-clockwise
                    w-[723px]
                    h-[723px]
                    mt-[100px];
            }

            .content {
                @apply w-[1200px] flex flex-col items-center text-[20px] text-[#192e5b];

                .subtitle {
                    @apply font-semibold;
                }

                .about-icon {
                    @apply bg-[url('@/assets/images/about-shadow.png')] bg-fit my-[18px] w-[261px] h-[305px];

                    img {
                        @apply animate-bubble;
                    }
                }

                .about-paragraph {
                    @apply leading-9 text-[#222121];
                    width: 643px;
                    font-size: 18px;
                }
            }

            .service-list {
                @apply flex w-full justify-center;

                .service-list-item {
                    @apply m-5 flex flex-col text-center;

                    .top-bg {
                        @apply
                            mb-[6px]
                            w-[376px]
                            h-[376px]
                            bg-[url('@/assets/images/service-arrow-bg.png')]
                            bg-fit
                            bg-center
                            bg-no-repeat
                            flex
                            items-center
                            justify-center
                            animate-zoom;
                    }

                    .top-bg-layer {
                        @apply w-[289px] h-[289px] overflow-hidden;

                        &.ddos {
                            @apply bg-[url('@/assets/images/service-ddos-icon.png')];
                        }

                        &.cloud {
                            @apply bg-[url('@/assets/images/service-cloud-bg.png')];

                            img {
                                @apply animate-bubble;
                            }
                        }

                        &.soft {
                            @apply bg-[url('@/assets/images/service-soft-icon.png')];
                        }

                        &.ddos img, &.soft img {
                            @apply animate-[clockwise_15s_linear_infinite];
                        }
                    }

                    .title {
                        @apply text-[30px] mb-[26px] font-bold;
                    }
                    
                    .info {
                        @apply text-[18px] leading-[30px] text-[#222121] relative;

                        .more {
                            @apply absolute right-0 bottom-0 cursor-pointer;

                            .more-arrow {
                                @apply inline-block w-[47px] h-[11px] bg-[url('@/assets/images/more-arrow.png')] bg-fit;
                            }
                        }
                    }
                }
            }

            .product-list {
                @apply flex flex-wrap justify-between;

                .product-list-item {
                    @apply
                        w-[332px]
                        h-[300px]
                        mb-[38px]
                        px-[10px]
                        pt-[18px]
                        bg-[url('@/assets/images/product-item-bg.png')]
                        bg-fit;
                    img {
                        @apply w-[80px];
                    }

                    .title {
                        @apply flex flex-col font-bold mb-[12px];

                        span {
                            @apply mb-[10px];
                        }
                    }

                    .info {
                        @apply text-base text-[#222121];
                    }
                }
            }

            .contact-form {
                @apply w-full flex justify-center text-[#192e5b] mb-[57px];

                .contact-form-item {
                    @apply w-[420px];

                    &:first-child {
                        @apply mr-[69px];
                    }

                    .title {
                        @apply mb-[20px];
                    }
                }

                .form-group {
                    @apply flex flex-col;
                }

                .form-check-list {
                    @apply flex justify-between mb-[38px];

                    .custom-radio {
                        @apply inline-block w-4 h-4 bg-[url('@/assets/images/contact-radio.png')] bg-fit mr-[3px];

                        &.active {
                            @apply bg-[url('@/assets/images/contact-radio-active.png')];
                        }
                    }
                }
            }
            button {
                @apply
                    inline-block
                    w-[248px]
                    h-[63px]
                    bg-[url('@/assets/images/contact-button.png')]
                    bg-fit
                    text-white
                    transition-[background-image]
                    duration-150;

                &:hover {
                    @apply bg-[url('@/assets/images/contact-button-hover.png')];
                }
            }
        }
    }
    footer {
        @apply
            h-[200px]
            bg-[url('@/assets/images/footer-bg.png')]
            bg-fit
            absolute
            bottom-0
            left-0
            w-full
            flex
            flex-col
            items-center
            justify-between
            py-[30px]
            text-white;
        .footer-logo {
            @apply w-[383px];
        }

        .footer-list {
            @apply flex;

            li {
                @apply border-r-2 border-white cursor-pointer;

                &:last-child {
                    @apply border-0;
                }

                p {
                    @apply px-[20px];
                }
            }
        }
    }


    img {
        @apply block w-full;
    }

    label {
        @apply mb-[9px];
    }

    input, textarea {
        @apply outline-0 bg-[#81a5d7]/40 rounded-[10px] h-[50px] px-4 mb-4;
    }

    input[type=radio] {
        @apply h-auto hidden;
    }

    textarea {
        @apply h-[224px] m-0 overflow-y-auto;
    }
</style>