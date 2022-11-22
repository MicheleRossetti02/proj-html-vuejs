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
    <div class="row ">
        <!-- left part -->
        <div class="col-6 our-class-left">
            <div class="title text  ">
                <h3>
                    We have been educating children for over fifteen years. Our goal is to create a place that engages
                    each
                    child.
                </h3>
                <p class="pe-5 my-4"> <small class="text- ">
                        Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus.Urna eget lacinia
                        eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.
                    </small></p>

            </div>
            <div class="list d-flex my-1" v-for="checkList in store.listClass">
                <div class="image me-2">
                    <img class="" src="../assets/img/our-class/style_1.png" alt="">

                </div>
                <div class="text ">

                    <p class="pe-5 m-0 "> <small class="text ">
                            {{ checkList.text }}
                        </small></p>
                </div>
            </div>

        </div>
        <!-- right part -->
        <div class="our-class-right col-6 d-flex mt-5">
            <div class="col-5 text-center mb-3" v-for="card in store.EducationCard">
                <div class="image  mb-4">
                    <img :src="`${card.img}`" alt="">
                </div>
                <div class="info-text">
                    <h3>{{ card.title }}</h3>
                    <p> <small class="text">{{ card.text }}</small></p>


                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
h3 {
    color: #554e9e;
    font-weight: 400;
}


.our-class-left {
    p {
        font-size: 18px;
    }
}

.our-class-right {
    flex-wrap: wrap;
    justify-content: space-between;

    h3 {
        font-weight: 300;
    }

    img {
        width: 50px;
    }
}

p {
    opacity: 70%;
}

p:hover {
    // color: black;
    opacity: 100%;
    font-weight: 500;
    // cursor: pointer;
}
</style>