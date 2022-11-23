<script>
import { store } from '../store';
export default {
    name: 'OurStaff',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- meet staff -->
    <div class="container mt-5">
        <div class="staff-title text-center">
            <h2> Meet Our Staff</h2>
            <p>With education and experience in early childhood care</p>
            <div class="divider">
                <img src="../assets/img/header_divider.png" alt="">
            </div>
        </div>
        <!-- general info -->
        <div class="info-staff d-flex mt-5 mb-4">
            <div class="col-6 title-info pe-5">
                <h2>Our staff consist of three teachers and one assistant with experience in early childhood care</h2>
            </div>
            <div class="text col-6 mt-3 ms-3">
                <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia
                    eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna
                    ante feugiat elit maecenas.</p>
            </div>
        </div>

        <div class="row mb-5">
            <!-- card teacher -->
            <div class="col-6 mb-4" v-for="teacher in store.teacherCard">

                <div class="teacher">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5 card-image">
                                <img :src="`${teacher.img}`" class="img-fluid rounded-start profile" alt="...">
                                <div class="over-position">
                                    <div class="plus">
                                        <span class="plus-over">+</span>

                                    </div>

                                    <div class="img-over ">
                                        <img src="../assets/img/teacher/quote.png" alt="">

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex align-items-end">
                                <div class="card-body ">

                                    <p class="card-text">{{ teacher.info }}</p>

                                </div>
                            </div>
                        </div>
                        <div class="row contact-teacher d-flex">
                            <div class="col-6 text-center mt-3">
                                <h5>{{ teacher.name }}</h5>
                                <p>{{ teacher.role }}</p>
                            </div>
                            <div class="col d-flex right-info ">
                                <div class="social m-1 " v-for="social in teacher.social">
                                    <img :src="`${social}`" alt="">

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: #554e9e;
    font-weight: 300;
}

p {
    opacity: 60%;
}

p:hover {
    opacity: 100%;
}

.info-staff {
    h2 {
        color: #554e9e;
        font-weight: 200;

    }
}

.row {
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        border: 0;
        border-radius: 0;
    }

    .card-image:hover {
        span {
            display: block;
            cursor: pointer;

        }
    }

    .card-image {
        position: relative;
        width: fit-content;

        .profile {
            width: 280px;

            object-fit: cover;
            height: 250px;
        }
    }


    span {
        font-size: 75px;
        position: absolute;
        font-weight: 200;
        top: 15%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        left: 25%;
        opacity: 60%;
        padding-left: 55px;
        padding-top: 10px;
        color: white;
        background-color: #554e9e;
        display: none;
    }



    .img-over {
        position: absolute;
        right: -20%;
        top: 20px;
        padding: 10px;
        padding-left: 50px;
        padding-right: 15px;
        border: 2px solid #fe6601;
        // bottom: 0;
        // width: fit-content;

        img {
            width: auto;
        }
    }

    .right-info {
        align-items: center;
        justify-content: center;
    }

    .social {
        img {
            background-color: #fe6601;
            width: 40px;
        }
    }

    .card-body {
        align-items: baseline;
    }

    .contact-teacher {
        h5 {
            color: #554e9e;
            font-weight: 300;
        }
    }
}
</style>