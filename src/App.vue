<template>
    <metainfo>
        <template v-slot:title="{ content }">{{
            content ? `${content} | PWA Test` : `PWA Test`
        }}</template>
    </metainfo>
    <notifications />
    <router-view />
</template>

<script>
    import { useMeta } from "vue-meta";

    export default {
        setup() {
            useMeta({
                title: "",
                htmlAttrs: { lang: "en", amp: true },
            });
        },
    };
</script>

<style>
html,
body {
    height: 100%;
}
#app {
    height: 100%;
}
</style>
