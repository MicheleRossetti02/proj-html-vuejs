<script>
import { store } from '../store.js'

export default {
    name: 'FooterHeader',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <!-- footer (header) -->
    <div class="pattern">
        <div class="container pt-5 text-white  ">
            <div class="row">
                <!-- about us -->
                <div class="col-3 about-us">

                    <h3>ABOUT US</h3>

                    <div class="mb-4 line"> </div>
                    <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi vehicula
                        morbi</p>
                    <img src="../assets/img/logo/logo_footer.png" alt="">
                </div>
                <!-- archives -->
                <div class="col">
                    <h3>ARCHIVES</h3>
                    <div class="mb-4 line"> </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn  px-4">OCTOBER 2014 (2) </button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn px-4">SEPTEMBER 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn px-4">AUGUST 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn px-4">JULY 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn px-4">JUNE 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn px-4">MAY 2014 (1)</button>
                    </div>
                </div>
                <!-- features -->
                <div class="col">
                    <h3>OUR FEATURES</h3>
                    <div class="mb-4 line"> </div>
                    <p>Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis ac vene:
                    </p>
                    <div class="list d-flex" v-for="features in store.FooterList">
                        <div class="image">
                            <img class="" src="../assets/img/footer/header/style_4_alt.png" alt="">

                        </div>
                        <div class="text">
                            <p>{{ features.text }}</p>

                        </div>
                    </div>
                </div>
                <!-- recent post -->
                <div class="col">
                    <h3>RECENT POSTS</h3>
                    <div class="mb-4 line"> </div>
                    <div class="recent-post" v-for="post in store.newCard">
                        <div class="card-image d-flex">
                            <div class="img">
                                <img src="" alt="">
                            </div>

                        </div>
                        <div class="text">
                            <h5>{{ post.title }}</h5>

                        </div>
                        <div class="calendar">
                            <img src="" alt="">
                            <p>{{ post.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pattern {
    background-image: url(../assets/img/pattern/pattern.png);
    // height: 500px;

    h3 {
        color: white;
    }

    .about-us {


        img {
            width: 100%;
        }
    }

    button {

        border: 1px solid white;
        color: white;
        text-align: start;
        width: 100%;
    }
}
</style>