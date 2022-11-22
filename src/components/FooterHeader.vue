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
        <div class="container py-5 text-white  ">
            <div class="row">
                <!-- about us -->
                <div class="col about-us">

                    <h3>ABOUT US</h3>

                    <div class="mb-4 line"> </div>
                    <p class="col-10">Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum
                        morbi vehicula
                        morbi</p>
                    <img src="../assets/img/logo/logo_footer.png" alt="">
                </div>
                <!-- archives -->
                <div class="col archives">
                    <h3>ARCHIVES</h3>
                    <div class="mb-4 line"> </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn  py-3 px-4">OCTOBER 2014 (2) </button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn py-3 px-4">SEPTEMBER 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn py-3 px-4">AUGUST 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn py-3 px-4">JULY 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn py-3 px-4">JUNE 2014 (2)</button>
                    </div>
                    <div class="btn-new  d-flex my-2">
                        <button class="btn py-3 px-4">MAY 2014 (1)</button>
                    </div>
                </div>
                <!-- features -->
                <div class="col features">
                    <h3>OUR FEATURES</h3>
                    <div class="mb-4 line"> </div>
                    <p>Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis ac vene:
                    </p>
                    <div class="list d-flex" v-for="features in store.FooterList">
                        <div class="image">

                            <img class="" src="../assets/img/footer/header/style_4_alt.png" alt="">

                        </div>
                        <div class="text ms-2 ">
                            <p>{{ features.text }}</p>

                        </div>
                    </div>
                </div>
                <!-- recent post -->
                <div class="col recent">
                    <h3>RECENT POSTS</h3>
                    <div class="mb-4 line"> </div>
                    <div class="recent-post d-flex my-3" v-for="post in store.newCard">
                        <div class="card-image ">
                            <div class="img ">
                                <img class="px-2" :src="`${post.img}`" alt="">
                            </div>

                        </div>
                        <div class="info ms-2">
                            <div class="text">
                                <h5>{{ post.title }}</h5>

                            </div>
                            <div class="calendar d-flex ">
                                <div class="image-box me-2">
                                    <img src="../assets/img/footer/header/date_footer.png" alt="">

                                </div>
                                <p>{{ post.date }}</p>
                            </div>
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
    .line {
        width: 75px;
        height: 2px;
        border: 1px solid white;
    }

    h3 {
        font-weight: 300;
    }

    p {
        font-weight: 230;
        opacity: 60%;
    }

    p:hover {
        opacity: 100%;
        cursor: pointer;
    }

    .about-us {


        img {
            margin-top: 20px;
            width: 70%;
        }


    }

    button {

        border: 1px solid white;
        color: white;
        text-align: start;
        width: 100%;
        opacity: 40%;
    }

    button:hover {
        opacity: 100%;
    }

    .recent {
        img {
            width: 140px;
            height: 100px;
        }

        .calendar {
            img {
                width: 20px;
                height: auto;
            }
        }

        h5 {
            font-weight: 300;
        }

        p {
            font-size: 15px;
        }
    }
}
</style>