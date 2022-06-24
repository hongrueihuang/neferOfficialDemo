<script setup>
    import { toRef } from 'vue';
    const props = defineProps({
        foo: String
    });
    const foo = toRef(props, 'foo');
</script>

<template>
    <img src="@/assets/images/shield.png" alt="shield">
</template>