<script>
import Enroll from './Enroll.vue';
import InfoParents from './InfoParents.vue';
import Jumbotron from './Jumbotron.vue';
import OurClasss from './OurClasss.vue';
import Welcome from './Welcome.vue';

export default {
    name: "Mainsite",
    components: { Jumbotron, Enroll, Welcome, InfoParents, OurClasss }
}
</script>

<template>
    <Jumbotron />
    <Enroll />
    <Welcome />
    <InfoParents />
    <OurClasss />
</template>

<style>

</style>