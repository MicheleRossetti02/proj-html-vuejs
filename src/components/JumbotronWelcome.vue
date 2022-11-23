<script>
import { store } from '../store.js'
import SlidesGenerator from './SlidesGenerator.vue';
export default {
    name: "InfoParents",
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
            this.store.activeSlide4++

            if (this.store.activeSlide4 === this.store.sliderWelcome.length) {
                this.store.activeSlide4 = 0
            }
        },


        prevSlide() {
            console.log('prev slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.store.activeSlide4--

            // -1 < 0 
            if (this.store.activeSlide4 < 0) {
                this.store.activeSlide4 = this.store.sliderWelcome.length - 1
            }
        },
        selectImage(index) {
            console.log('Ho cliccato su un thumb', index);
            this.store.activeSlide4 = index
        }


    }
}
</script>

<template>
    <!-- jumbotron welcome -->
    <div class="jumbotron  ">
        <div class="slider-1 mx-2 ">
            <div class="item">

                <img class="left" :src="`${store.sliderWelcome[store.activeSlide4].img}`" alt="">

            </div>
            <div class="navigator">
                <div class="prev" @click="prevSlide">
                    <i class="fa-solid fa-chevron-left p-2"></i>
                </div>
                <div class="next" @click="nextSlide">
                    <i class="fa-solid fa-chevron-right p-2"></i>
                </div>
            </div>

        </div>
    </div>
    <div class="thumbs d-flex">
        <div class="thumb col mt-2 mx-1" :class="store.activeSlide4 === index ? 'active' : ''"
            v-for="(thumb, index) in store.sliderWelcome" @click="selectImage(index)">
            <img :src="`${thumb.img}`" alt="">
        </div>
    </div>



</template>

<style scoped lang="scss">
i {
    color: white;
    text-align: center;
}

.jumbotron {
    // background-image: url(../assets/img/jumbotron1/slider_slide2_background.png);
    /* position: relative; */
    width: 100%;

    position: relative;
}

.col-12 {
    width: 100%;

    img {
        // width: 100%;
        height: 300px;
    }
}

.over.display {
    position: absolute;
    width: 100%;

}

.col-position {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    // position: absolute;
    // width: 100%;

    img {
        // height: 600px;
        width: 100%;
        height: 300px;
        object-fit: cover;

        // position: absolute;
    }
}

.thumbs {
    // position: absolute;
    // right: 45%;
    // bottom: 0;


    .thumb {
        width: 200px;
        transition: 180ms;
        // background-color: #fe6601;

        img {
            width: 100%;
        }

        // height: 10px;
        // border: 2px solid white;
        // transition: transform 1s;

    }

    .thumb.active {
        padding-bottom: 10px;
        border-bottom: 2px solid #fe6601;

    }

}

.thumb:hover {
    padding-bottom: 10px;
    border-bottom: 2px solid #fe6601;
}




.prev,
.next {
    width: 30px;
    height: 30px;
    margin: 10px 0;

    background: #fe6601;
    position: absolute;
    bottom: 40%;
    // transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    right: 8px;
}
</style>