<script>
import Enroll from './Enroll.vue';
import Jumbotron from './Jumbotron.vue';
import Welcome from './Welcome.vue';

export default {
    name: "Mainsite",
    components: { Jumbotron, Enroll, Welcome }
}
</script>

<template>
    <Jumbotron />
    <Enroll />
    <Welcome />
</template>

<style>

</style>