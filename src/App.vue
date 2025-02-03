<script setup>
import { ref, computed } from "vue";
import markdownit from "markdown-it";

const md = markdownit();
const content = ref("");

const result = computed(() => md.render(content.value));
</script>

<template>
    <div class="flex">
        <aside>toolbar</aside>
        <main class="flex">
            <textarea v-model="content"></textarea>
            <div v-html="result"></div>
        </main>
    </div>
</template>

<style scoped></style>
