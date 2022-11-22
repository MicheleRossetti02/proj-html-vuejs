<script>
import ViewGallery from './ViewGallery.vue'
export default {
    name: 'Gallery',
    components: {
        ViewGallery
    }
}
</script>

<template>
    <div class="image-collection d-flex mt-5">
        <div class="col-3">
            <img src="../assets/img/gallery/gallery_01-690x506.jpg" alt="">

        </div>
        <div class="col-3">
            <img src="../assets/img/gallery/gallery_02-690x506.jpg" alt="">
        </div>
        <div class="col-3">
            <img src="../assets/img/gallery/gallery_03-690x506.jpg" alt="">

        </div>
        <div class="col-3">
            <img src="../assets/img/gallery/gallery_04-690x506.jpg" alt="">

        </div>

    </div>

    <ViewGallery />

</template>

<style scoped>
img {
    width: 100%;
}
</style>