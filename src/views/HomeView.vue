<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import { useMeta } from "vue-meta";

    export default {
        setup() {
            useMeta({
                title: "Home",
            });
        },
        components: {
            HelloWorld,
        },
    };
</script>
