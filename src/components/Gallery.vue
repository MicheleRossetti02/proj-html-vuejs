<script>
import { store } from '../store';
import ViewGallery from './ViewGallery.vue'
export default {
    name: 'Gallery',
    components: {
        ViewGallery
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- gallery -->
    <div class="image-collection d-flex mt-5">
        <div class="col-3 " v-for="gallery in store.gallery">
            <div class="image">
                <img :src="`${gallery.img}`" alt="">
                <div class="plus">
                </div>
                <p class="m-0 ">+</p>

            </div>

            <!-- hover -->

        </div>


    </div>

    <ViewGallery />

</template>

<style scoped lang="scss">
img {
    width: 100%;
}

.col-3 {
    position: relative;

}

.plus {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #554e9e;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    left: 38%;
    position: absolute;

    bottom: 35%;
    opacity: 60%;
    display: none;



}

p {
    display: none;
    position: absolute;
    width: fit-content;
    opacity: 100%;
    font-size: 70px;
    font-weight: 200;
    color: white;
    left: 49%;


    bottom: 42%;

}


.col-3:hover {
    opacity: 70%;

    .plus {
        display: inline-flex;
    }

    p {
        display: block;
    }
}
</style>