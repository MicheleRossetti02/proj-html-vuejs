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
            this.store.activeSlide2++

            if (this.store.activeSlide2 === this.store.secondSlider.length) {
                this.store.activeSlide2 = 0
            }
        },


        prevSlide() {
            console.log('prev slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.store.activeSlide2--

            // -1 < 0 
            if (this.store.activeSlide2 < 0) {
                this.store.activeSlide2 = this.store.secondSlider.length - 1
            }
        },
        selectImage(index) {
            console.log('Ho cliccato su un thumb', index);
            this.store.activeSlide2 = index
        }


    }
}
</script>

<template>
    <!-- jumbotron 2 -->
    <div class="jumbotron my-5 ">
        <div class="slider-1 ">
            <div class="item">
                <div class="col-12">
                    <img class="left" :src="`${store.secondSlider[store.activeSlide2].img}`" alt="">
                </div>
            </div>
            <div class="over display ">
                <div class="d-flex container text-white utility">
                    <div class="pupils  me-4 col-position">
                        <div class="circle mb-4 ">
                            507

                        </div>
                        <div class="info text text-center ">
                            <h3>Our Pupils</h3>
                            <p>Pulvinar forte maestro node terminal est elipsis prism.</p>

                        </div>
                    </div>
                    <div class="teaching-hours mx-4 col-position">
                        <div class="circle mb-4">
                            235

                        </div>
                        <div class="info text text-center">
                            <h3>Teaching Hours</h3>
                            <p>.Elipsis morbi nulla a metro interdum vitae elite.</p>
                        </div>
                    </div>
                    <div class="satisfied-parents mx-4 col-position">
                        <div class="circle mb-4">
                            100%

                        </div>
                        <div class="info text text-center ">
                            <h3 class="m-0">Satisfied Parents</h3>
                            <span class="m-0">Elementum pulvinar detos diaspis movum blandit. </span>

                        </div>
                    </div>
                    <div class="meals ms-4 col-position">
                        <div class="circle mb-4">
                            1050

                        </div>
                        <div class="info text text-center">
                            <h3>Meals Per Year</h3>
                            <p>Pulvinar forte maestro node terminal est elipsis prism.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thumbs d-flex">
                <div class="thumb py-2 px-4 mx-3 my-3" :class="store.activeSlide2 === index ? 'active' : ''"
                    v-for="(thumb, index) in store.secondSlider" @click="selectImage(index)">
                </div>
            </div>

        </div>
    </div>



</template>

<style scoped lang="scss">
.jumbotron {
    // background-image: url(../assets/img/jumbotron1/slider_slide2_background.png);
    /* position: relative; */
    width: 100%;
    height: 600px;
    position: relative;
}

.over.display {
    position: absolute;
    width: 100%;
    height: 600px;
}

.col-position {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    position: absolute;
    width: 100%;

    img {
        height: 600px;
        width: 100%;
        object-fit: cover;

        // position: absolute;
    }
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
.circle {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
    font-size: 40px;
    border-radius: 50%;
    border: 1px solid white;
    // color: white;
}

.utility {
    justify-content: center;
    align-items: center;
    height: 600px;
}
</style>