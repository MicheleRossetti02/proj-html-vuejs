<script>
import { store } from '../store';
export default {
    name: 'ClassEducation',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- class education -->
    <div class="row">
        <!-- left part -->
        <div class="col-6">
            <div class="title text  ">
                <h3>
                    We have been educating children for over fifteen years. Our goal is to create a place that engages
                    each
                    child.
                </h3>
                <p>
                    Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus.Urna eget lacinia
                    eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.
                </p>
            </div>
            <div class="list d-flex" v-for="checkList in store.listClass">
                <div class="image">
                    <img class="" src="../assets/img/our-class/style_1.png" alt="">

                </div>
                <div class="text">
                    <p>{{ checkList.text }}</p>

                </div>
            </div>

        </div>
        <!-- right part -->
        <div class="our-class-right col-6 d-flex">
            <div class="col-5 text-center" v-for="card in store.EducationCard">
                <div class="image">

                </div>
                <div class="info-text">
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.our-class-right {
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>