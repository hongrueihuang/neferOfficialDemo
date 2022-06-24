<script setup>
    import { useRouter } from 'vue-router';
    import { ref, toRef } from 'vue'
    const router = useRouter();
    const props = defineProps({
        navbarList: Array
    });
    const emits = defineEmits(['goSomeBlock']);
    const navbarList = toRef(props, 'navbarList');
    const scrollToBlock = (list) => {
        if (list.isRouter) {
            router.push(list.path);
            return;
        }
        emits('goSomeBlock', list.anchor);
    }
</script>

<template>
    <nav>
        <ul class="navbar">
            <li class="navbar-item" :style="{order: list.sort}" @click="scrollToBlock(list)" v-for="list in navbarList" :key="list.sort">
                <p>
                    <span>{{ list.enTitle }}</span>
                    <span>{{ list.title }}</span>
                </p>
            </li>
            <li class="navbar-item logo order-2">
                <h2>Nefer 完美數位科技</h2>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    @apply w-full absolute top-0 z-[1] font-bold;

    .navbar {
        @apply flex xl:container xl:mx-auto w-full items-center h-[120px];
        
        .navbar-item {
            @apply flex-1 h-6 overflow-y-hidden cursor-pointer;

            &.logo {
                @apply h-full;
            }

            h2 {
                @apply 
                    h-full 
                    indent-[101%] 
                    overflow-hidden 
                    bg-[url('@/assets/images/top-LOGO.png')] 
                    whitespace-nowrap 
                    bg-contain 
                    bg-no-repeat
                    bg-center;
            }

            p {
                @apply flex flex-col items-center hover:-translate-y-6 transition-transform duration-500;
            }
        }
    }
}
</style>