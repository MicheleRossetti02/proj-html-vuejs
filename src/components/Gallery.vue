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
    <div class="image-collection d-flex mt-5">
        <div class="col-3 image" v-for="gallery in store.gallery">
            <img :src="`${gallery.img}`" alt="">

        </div>


    </div>

    <ViewGallery />

</template>

<style scoped>
img {
    width: 100%;
}

.image:hover {
    opacity: 60%;
}
</style>