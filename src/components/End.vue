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
    <!-- footer (END) -->
    <div class="container mt-4">
        <div class="row">
            <div class="col ">
                <div class="social mb-2  d-flex">
                    <div class="icon mx-1" v-for="icon in 5">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="copy">
                    <p class="text-center">&copy; Fable - Children Kindergarten by Michele Rossetti </p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.row {
    justify-content: center;
}

.social {
    justify-content: center;
}

.icon {
    width: 30px;
    height: 30px;
    background-color: #fe6601;

}
</style>