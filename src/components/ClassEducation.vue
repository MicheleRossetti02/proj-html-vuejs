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
        <div class="col-6">

        </div>
    </div>
</template>

<style>

</style>