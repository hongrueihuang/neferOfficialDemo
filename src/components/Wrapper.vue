<script setup>
    import { ref, watch, nextTick, toRef } from 'vue';
    import { debounce } from '@/utils/utils.js';
    const wrapper = ref(null);
    const props = defineProps({
        block: Number
    });
    const block = toRef(props, 'block');
    let currentBlock = ref(block.value);
    const emits = defineEmits(['updateBlock']);
    const startPageY = ref(0);
    const endPageY = ref(0);

    const mouseWheelEvent = debounce((e) => {
        const clientHeight = wrapper.value.clientHeight;
        const scrollTop = wrapper.value.scrollTop;
        const scrollHeight = wrapper.value.scrollHeight;
        if (e.wheelDelta < 0 || e.deltaY > 0 || e.wheelDeltaY < 0) {
            if (scrollHeight - clientHeight <= scrollTop) {
                return
            }
            currentBlock.value += 1;
        } else {
            if (scrollTop === 0) return
            currentBlock.value -= 1;
        }
        scrollToBlock(currentBlock.value);
    }, 500)

    const touchStart = (e) => {
        e.preventDefault();
        startPageY.value = e.changedTouches[0].pageY
    }

    const touchMove = debounce((e) => {
        e.preventDefault();
        const clientHeight = wrapper.value.clientHeight;
        endPageY.value = e.changedTouches[0].pageY;
        if (startPageY.value > endPageY.value) {
            block.value += 1;
            wrapper.value.scrollTo({
                top: clientHeight * block.value,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            block.value -= 1;
            wrapper.value.scrollTo({
                top: clientHeight * block.value,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, 500)

    const scrollToBlock = (val = 0) => {
        const clientHeight = wrapper.value.clientHeight;
        wrapper.value.scrollTo({
            top: clientHeight * val,
            left: 0,
            behavior: 'smooth'
        })
        emits('updateBlock', val)
    }

    watch(block, (nV, oV) => {
        nextTick(() => {
            const activeSection = document.querySelectorAll('section.active [data-aos]');
            activeSection.forEach((item) => {
                item.classList.add('aos-animate');
            });

        })
    }, {
        immediate: true
    });
    defineExpose({ scrollToBlock });
</script>

<template>
    <div class="wrapper"
        ref="wrapper"
        @mousewheel.prevent="mouseWheelEvent($event)"
        @touchstart="touchStart($event)"
        @touchmove="touchMove($event)"
    >
        <slot></slot>
        <div class="go-top" v-show="block !== 0" @click="scrollToBlock()">
            <span class="top-icon"></span>
            <span class="top-text"></span>
        </div> 
    </div>
</template>

<style scoped>
    .wrapper {
        @apply h-screen bg-[url('@/assets/images/bg-fix.png')] bg-fit overflow-y-scroll relative;

        &::-webkit-scrollbar {
            @apply hidden;
        }

        .go-top {
            @apply
                fixed
                flex
                flex-col
                items-center
                justify-center
                bottom-[227px]
                right-[74px]
                w-[84px]
                h-[84px]
                bg-[url('@/assets/images/top-button.png')]
                bg-fit
                cursor-pointer
                animate-bubble;
            span {
                @apply inline-block bg-fit;

                &.top-icon {
                    @apply w-[17px] h-[7px] bg-[url('@/assets/images/top-up.png')] mb-2;
                }

                &.top-text {
                    @apply w-[56px] h-[18px] bg-[url('@/assets/images/top-text.png')];
                }
            }
        }
    }
</style>