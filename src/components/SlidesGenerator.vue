<script>
import { store } from '../store.js'
export default {
    name: 'SlidesGenerator',
    props: {
        slide: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        nextSlide() {
            console.log('next slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.activeSlide++

            if (this.activeSlide === this.slides.length) {
                this.activeSlide = 0
            }
        },


        prevSlide() {
            console.log('prev slide please')
            /* TODO: fix TypeError: Cannot read properties of undefined (reading 'image') */
            this.activeSlide--

            // -1 < 0 
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1
            }
        },

    }
}

</script>
<template>

    <!-- <div class="thumbs">
        <div class="prev" @click="prevSlide"></div>
        <div class="next" @click="nextSlide"></div>
        <div class="thumb" :class="index === index ? 'active' : ''" v-for="(thumb, index) in slides"
            @click="selectImage(index)">

        </div> 
    </div> -->
</template>
<style >
.item {
    float: left;
    /* width: 300px; */
    height: 300px;
    position: relative;
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item .text {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
    color: black;
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