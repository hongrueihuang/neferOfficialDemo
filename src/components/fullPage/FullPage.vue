<script setup>
    import { ref, toRef, watch } from 'vue';
    import Banner from './Banner.vue';
    import NormalLayout from './NormalLayout.vue';
    const props = defineProps({
        pageType: String,
        backgroundImage: String,
    });
    const pageType = toRef(props, 'pageType');
    const backgroundImage = toRef(props, 'backgroundImage');
</script>

<template>
    <section class="full-page">
        <div class="bg" :class="`bg-[url('${backgroundImage}')]`">
            <component :is="pageType" v-if="pageType"></component>
        </div>
    </section>
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
</style>