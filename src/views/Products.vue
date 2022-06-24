<script setup>
    import { ref, provide } from 'vue';
    import FullPage from '@/components/fullPage/FullPage.vue';
    import Wrapper from '@/components/Wrapper.vue';
    import Navbar from '@/components/Navbar.vue';
    const wrapperRef = ref(null);
    const block = ref(0);
    const updateBlock = (val) => {
        block.value = val;
    };
    const scrollToBlock = (val) => {
        wrapperRef.value.scrollToBlock(val);
    };
    provide('test', 'string')
    const navbarList = ref([
        {
            title: '首頁',
            enTitle: 'HOME',
            sort: 1,
            isRouter: true,
            anchor: '',
            path: '/'
        },
        {
            title: '服務內容',
            enTitle: 'CONTENT',
            sort: 2,
            isRouter: false,
            anchor: 1,
        },
        {
            title: '客製系統',
            enTitle: 'CUSTOMIZED',
            sort: 3,
            isRouter: false,
            anchor: 2,
        },
        {
            title: '服務流程',
            enTitle: 'PROCESS',
            sort: 4,
            isRouter: false,
            anchor: 3,
        },
    ]);
</script>

<template>
    <Wrapper :block="block" @updateBlock="updateBlock" ref="wrapperRef">
        <Navbar :navbar-list="navbarList" @goSomeBlock="scrollToBlock"></Navbar>
        <FullPage :page-type="'Banner'" :background-image="'@/assets/images/block-bg-1.png'"></FullPage>
        <!-- <FullPage :page-type="'NormalLayout'" :background-image="'@/assets/images/block-bg-2.png'"></FullPage>
        <FullPage :page-type="'Banner'" :background-image="'@/assets/images/block-bg-3.png'"></FullPage>
        <FullPage :page-type="'Banner'" :background-image="'@/assets/images/block-bg-4.png'"></FullPage> -->
    </Wrapper>
</template>

<style scoped>
    .shield {
        @apply
            bg-[url('@/assets/images/shield.png')]
            bg-fit
            animate-clockwise
            w-[723px]
            h-[723px]
            mt-[100px];
    }
</style>