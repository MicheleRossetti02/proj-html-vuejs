<script>
import store from '../store.js'
import SlidesGenerator from './SlidesGenerator.vue';
export default {
    name: "Jumbotron",
    data() {
        return {
            store
        };
    },
    components: { SlidesGenerator },
    methods: {
        nextSlide() {
            console.log('next slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.store.activeSlide++

            if (this.store.activeSlide === this.store.firstSlider.length) {
                this.store.activeSlide = 0
            }
        },


        prevSlide() {
            console.log('prev slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.store.activeSlide--

            // -1 < 0 
            if (this.store.activeSlide < 0) {
                this.store.activeSlide = this.store.firstSlider.length - 1
            }
        },

    }
}
</script>

<template>
    <!-- <div class="jumbotron">s -->

    <!-- <div class="container"> -->
    <div class="slider-1">
        <!-- <div class="background">
            <img src="../assets/img/jumbotron_1/slider_slide1_background-100x50.png" alt="">
        </div> -->
        <div class="item">
            <!-- <SlidesGenerator :slide=slide v-for="slide, index in store.firstSlider" /> -->

            <div class="item d-flex">
                <img :src="store.firstSlider[store.activeSlide].img" alt="" />
                <div class="text">
                    <p>
                        {{ store.firstSlider[store.activeSlide].text }}
                    </p>
                </div>
                <img :src="store.firstSlider[store.activeSlide].img2" alt="">

            </div>



        </div>


        <div class="thumbs">
            <div class="prev" @click="prevSlide"></div>
            <div class="next" @click="nextSlide"></div>
            <!-- <div class="thumb" :class="index === index ? 'active' : ''" v-for="(thumb, index) in slides"
            @click="selectImage(index)">

        </div> -->
        </div>

        <!-- </div> -->
    </div>



</template>
<style scoped>
.slider-1 {

    position: relative;
    width: 100%;
    bottom: auto;
    display: flex;
    justify-content: center;
}

.text {
    position: absolute;
    bottom: 30px;
    left: 50%;
}

.background {
    position: absolute;
}
</style>