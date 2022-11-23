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

        selectImage(index) {
            console.log('Ho cliccato su un thumb', index);
            this.store.activeSlide = index
        }


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


            <div class="thumbs d-flex">

                <div class="thumb py-2 px-4 mx-3 my-3" :class="store.activeSlide === index ? 'active' : ''"
                    v-for="(thumb, index) in store.firstSlider" @click="selectImage(index)">

                </div>
            </div>

        </div>
    </div>



</template>

<style scoped lang="scss">
.jumbotron {
    background-image: url(../assets/img/jumbotron1/slider_slide2_background.png);
    /* position: relative; */
    width: 100%;
    height: 600px;
    position: relative;
}

.thumbs {
    position: absolute;
    right: 45%;

    bottom: 0;


    .thumb {
        width: 40px;
        height: 10px;
        border: 2px solid #fe6601;
        transition: transform 1s;

    }

    .thumb:hover {
        transform: translateY(-10px);

    }
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

/* 
.prev,
.next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    bottom: 0;
} */
</style>