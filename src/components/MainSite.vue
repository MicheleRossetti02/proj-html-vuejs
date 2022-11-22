<script>
import Enroll from './Enroll.vue';
import Gallery from './Gallery.vue';
import InfoParents from './InfoParents.vue';
import Jumbotron from './Jumbotron.vue';
import OurClasss from './OurClasss.vue';
import OurStaff from './OurStaff.vue';
import Testimoniance from './Testimoniance.vue';
import Welcome from './Welcome.vue';

export default {
    name: "Mainsite",
    components: { Jumbotron, Enroll, Welcome, InfoParents, OurClasss, Gallery, OurStaff, Testimoniance }
}
</script>

<template>
    <Jumbotron />
    <Enroll />
    <Welcome />
    <InfoParents />
    <OurClasss />
    <Gallery />
    <OurStaff />
    <Testimoniance />
</template>

<style scoped>

</style>