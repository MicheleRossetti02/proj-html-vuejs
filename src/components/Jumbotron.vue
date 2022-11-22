<script>
import { store } from '../store.js'
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
    <div class="jumbotron ">

        <div class="text">
            <p>
                Learing & Fun
            </p>
        </div>
        <!-- <div class="container"> -->
        <div class="slider-1 ">
            <!-- <div class="background">
            <img src="../assets/img/jumbotron_1/slider_slide1_background-100x50.png" alt="">
        </div> -->
            <div class="item">
                <!-- <SlidesGenerator :slide=slide v-for="slide, index in store.firstSlider" /> -->

                <div class="item d-flex">

                    <img class="left" :src="`${store.firstSlider[store.activeSlide].img}`" alt="">

                    <img class="right" :src="`${store.firstSlider[store.activeSlide].img2}`" alt="">

                </div>



            </div>


            <div class="thumbs">
                <div class="prev" @click="prevSlide"></div>
                <div class="next" @click="nextSlide"></div>
                <!-- <div class="thumb" :class="index === index ? 'active' : ''" v-for="(thumb, index) in slides"
            @click="selectImage(index)">

        </div> -->
            </div>

        </div>
    </div>



</template>

<style scoped >
.jumbotron {
    background-image: url(../assets/img/jumbotron1/slider_slide2_background.png);
    /* position: relative; */
    width: 100%;
    height: 600px;
    position: relative;
}

img.left {

    position: absolute;
    left: 20%;
    bottom: 5%;
}

img {
    /* width: 300px; */
}

img.right {

    position: absolute;
    right: 20%;
    bottom: 5%;
}

.slider-1 {
    /* position: absolute; */
    /* height: 100%; */
    width: 100%;
    bottom: auto;
    /* display: flex; */
    /* justify-content: center; */
}

.text {
    position: absolute;
    bottom: 65%;
    left: 17%;
    color: #d7ac95;
    opacity: 20%;
    font-size: 2rem;
    font-weight: 200;
}

.background {
    position: absolute;
}

.prev,
.next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 50%;
    /* transform: translate(-50%); */
    cursor: pointer;
    /* z-index: 999; */
}

.next {
    bottom: 0;
}
</style>