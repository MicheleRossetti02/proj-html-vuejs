<script>
import { store } from '../store.js'

export default {
    name: 'End',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="end">

        <!-- footer (END) -->
        <div class="container mt-4">
            <div class="row">
                <div class="col ">
                    <div class="social mb-4  d-flex">
                        <div class="icon mx-1" v-for="icon in store.footerSocial">
                            <img :src="`${icon.img}`" alt="">
                        </div>
                    </div>
                    <div class="copy">
                        <p class="text-center">&copy; Fable - Children Kindergarten by Michele Rossetti </p>
                    </div>

                </div>
                <div class="link">

                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.row {
    justify-content: center;
}

.end {
    position: relative;

    .link {

        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        position: absolute;
        width: 50px;
        /* right: 0; */
        bottom: 48px;
        right: 30px;
        background-color: grey;

        i {
            color: white;
            font-size: 30px;

        }

    }

}

.social {
    justify-content: center;
}

.icon {
    // width: 30px;
    // height: 30px;
    background-color: #fe6601;


}
</style>