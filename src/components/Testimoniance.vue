<script>
import { store } from '../store.js'
import SlidesGenerator from './SlidesGenerator.vue';
export default {
    name: "Testimoniance",
    data() {
        return {
            store
        };
    },
    components: { SlidesGenerator },
    methods: {

        selectImage(index) {
            console.log('Ho cliccato su un thumb', index);
            this.store.activeSlide3 = index
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
                    <img class="left" :src="`${store.thirdSlider[store.activeSlide3].img}`" alt="">
                </div>
            </div>
            <div class="over display ">
                <div class="d-flex container text-white utility">
                    <div class="image-over">
                        <img src="../assets/img/quote_alt.png" alt="">
                    </div>
                    <div class="text-jumbo text-center mt-5 pb-5 col-9">
                        <h2>
                            "Fable KinderGarten as a great place for my daughter to start her schooling experience. It's
                            welcoming and safe and my daughter loves being there.""
                        </h2>


                    </div>
                    <div class="line "></div>
                    <div class="author mt-5">
                        <p class="">Joe R. Hamblen</p>

                    </div>
                </div>
            </div>
            <div class="thumbs d-flex">
                <div class="thumb py-2 px-4 mx-3 my-3" :class="store.activeSlide3 === index ? 'active' : ''"
                    v-for="(thumb, index) in store.thirdSlider" @click="selectImage(index)">
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
        border: 2px solid white;
        transition: transform 1s;

    }

    .thumb:hover {
        transform: translateY(-10px);

    }

    .thumb.active {
        border: 1px solid #fe6601;
        background-color: #fe6601;
    }
}


.image-over {
    img {
        // padding: 5px;
        margin: 20px;
        width: 50px;
    }

    border-radius: 50%;
    border: 1px solid white;

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
.utility {
    justify-content: center;
    align-items: center;
    height: 600px;
    flex-direction: column;
}

.line {
    width: 50px;
    height: 3px;
    background-color: white;
}

h2 {
    font-weight: 300;
}
</style>