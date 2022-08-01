<template>
    <div class="row w-100 h-100 justify-content-center m-0">
        <div class="col-12 col-md-6 col-lg-4 p-0">
            <div id="reader"></div>
            <div class="p-5 d-flex align-items-center">
                <i class="icon fa fa-qrcode"></i>
                <span class="px-5 text-left">Read QR code</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { Html5Qrcode } from "html5-qrcode";
    import { useI18n } from "vue-i18n";
    import { useMeta } from "vue-meta";
    import { notify } from "@kyvg/vue3-notification";
    export default {
        setup() {
            const { t } = useI18n();

            useMeta({
                title: "HOME",
            });
            return { t };
        },
        mounted: async function () {
            try {
                const perm = await navigator.permissions.query({
                    name: "camera",
                });

                if (perm.state != "granted") {
                    throw new Error("Permission not granted");
                }
            } catch (e) {
                console.log(e);
                notify({
                    text: e,
                    type: "error",
                });
            }

            const html5QrCode = new Html5Qrcode("reader");
            const qrCodeSuccessCallback = (decodedText) => {
                alert(decodedText);
            };
            const config = {
                fps: 10,
                qrbox: {
                    width: 250,
                    height: 250,
                },
            };
            html5QrCode
                .start(
                    {
                        facingMode: "environment",
                    },
                    config,
                    qrCodeSuccessCallback
                )
                .catch((e) => {
                    console.log(e);
                    notify({
                        text: e,
                        type: "error",
                    });
                });
        },
    };
</script>

<style scoped>
.icon {
    font-size: 3rem;
}

.bg-black {
    color: white;
    background: #000;
}
</style>