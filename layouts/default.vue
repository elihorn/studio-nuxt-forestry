<template>
    <div id="page">
        <Header />
        <Nuxt />
    </div>
</template>

<script>
    export default {
        computed: {
            isInfoPage() {
                return this.$nuxt._route.name === "info" && true
            }
        },
    }
</script>

