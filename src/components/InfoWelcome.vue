<script>
import { store } from '../store.js'

export default {
    name: 'InfoWelcome',

    data() {
        return {
            store
        };
    },
    // computed: {
    //     ChangeColor() {
    //         for (let welcomeIndex = 2; welcomeIndex < store.infoWelcome.length; welcomeIndex++) {


    //         }

    //     }
    // }
}
</script>
<template>
    <div class="row">

        <div class="col-3  mt-4 info" v-for="infoWelcome in store.infoWelcome ">
            <!-- card for Welcome Fable-->
            <div class="card-info  d-flex">
                <div :class="(infoWelcome.welcome === 0 ? 'orange my-2' : 'viola my-2')">
                    <!-- v-bind:class="infoWelcome.welcomeIndex % 2 === 0 " -->
                    <img :src="`./src/assets/img/info-welcome/${infoWelcome.img}`" alt="">
                </div>
                <div class="text-center pt-2 ">
                    <h5>{{ infoWelcome.title }}</h5>
                    <p>{{ infoWelcome.text }}</p>
                </div>
            </div>
        </div>
        <!-- <div class="col">

        </div>
        <div class="col">

        </div>
        <div class="col">

        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.row {
    justify-content: center;

}

.card-info {
    flex-direction: column;
    align-items: center;
}

.orange {
    background-color: #fe6601;

    border-radius: 50%;
}

h5 {
    font-weight: 300;
}


.viola {
    background-color: #554e9e;

    border-radius: 50%;
}

img {
    width: 100px;
    margin: 50px;
}
</style>