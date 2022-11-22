<script>
import InfoWelcome from './InfoWelcome.vue';

export default {
    name: "Presentation",
    components: { InfoWelcome, },

}
</script>

<template>
    <div class="container presentation">
        <div class="title-info text-center my-4">
            <h1>Welcome to Fable</h1>
            <p>Fable Daycare,prescool, and kindergarten</p>
            <img src="../assets/img/header_divider.png" alt="">
        </div>

        <InfoWelcome />
    </div>

</template>
<style lang="scss" >
// @use 'variables' as *;

.presentation {
    color: #554e9e;

    h1 {
        font-weight: 150;
    }

    p {
        font-weight: 100;
        color: #474545;
    }
}
</style>