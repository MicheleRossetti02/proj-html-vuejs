<script>
import { store } from '../store';
import ClassCard from './ClassCard.vue';
import ClassEducation from './ClassEducation.vue';

export default {
    name: "OurClasses",
    data() {
        return {
            store
        };
    },
    components: { ClassCard, ClassEducation }
}
</script>

<template>
    <!-- our class -->
    <div class="container">
        <ClassCard />
        <ClassEducation />
    </div>
</template>

<style scoped>

</style>