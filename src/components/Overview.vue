<script>
import { store } from '../store.js'

export default {
    name: 'Overview',
    data() {
        return {
            store
        }

    },

}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-5">
                <div class="choise-overview d-flex mb-3">
                    <div class="overview button">
                        <button class="btn">Overview</button>
                    </div>
                    <div class="our-mission button">
                        <button class="btn">Our Mission</button>

                    </div>
                </div>

                <div class="overview info">
                    <div class="title mb-5">
                        <h3>Our phylosophy is learning throught play as we offer a stimulating environment
                            for
                            children</h3>
                    </div>
                    <div class="info text d-flex my-3">
                        <div class="img col-auto me-4">
                            <img src="../assets/img/welcome-overview-image/clock_alt.png" alt="">
                        </div>
                        <div class="section-text">
                            <h5 class="mb-3">Full Day Session</h5>
                            <p> Pulvinar est metro libyla blandit maecenas retrum gravida cuprum. Maecenas node
                                estibulum.</p>
                        </div>

                    </div>
                    <div class="info text d-flex my-3">
                        <div class="img col-auto me-4">
                            <img src="../assets/img/welcome-overview-image/diagram_alt.png" alt="">

                        </div>
                        <div class="section-text">
                            <h5 class="mb-3">Full Day Session</h5>
                            <p> Pulvinar est metro libyla blandit maecenas retrum gravida cuprum. Maecenas node
                                estibulum.</p>
                        </div>

                    </div>
                </div>
                <div class="overview mission">
                    <div class="title">
                        <h3>Our phylosophy is learning throught play as we offer a stimulating environment for
                            children</h3>
                    </div>
                    <div class="info text">
                        <div class="img">

                        </div>
                        <div class="section-text">
                            <h5>Full Day Session</h5>
                            <p> Pulvinar est metro libyla blandit maecenas retrum gravida cuprum. Maecenas node
                                estibulum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="slider overview">
                    <div class="image-important">
                        <img src="" alt="">
                    </div>
                    <div class="thumb">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.overview.mission {
    display: none;
}

h3 {
    color: #554e9e;
}

h5 {
    color: #554e9e;

}

button:hover {
    background-color: #fe6601;
    color: white;
    border-radius: 0;
}

.img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fe6601;
    position: relative;
}

img {
    position: absolute;
    /* left: 662px; */
    left: 31px;
    bottom: 33px;
    width: 40px;
}
</style>