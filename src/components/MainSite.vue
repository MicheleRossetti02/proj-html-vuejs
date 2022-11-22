<script>
import Enroll from './Enroll.vue';
import Gallery from './Gallery.vue';
import InfoParents from './InfoParents.vue';
import Jumbotron from './Jumbotron.vue';
import OurClasss from './OurClasss.vue';
import Welcome from './Welcome.vue';

export default {
    name: "Mainsite",
    components: { Jumbotron, Enroll, Welcome, InfoParents, OurClasss, Gallery }
}
</script>

<template>
    <Jumbotron />
    <Enroll />
    <Welcome />
    <InfoParents />
    <OurClasss />
    <Gallery />
</template>

<style>

</style>