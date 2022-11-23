<script>
import { store } from '../store';
export default {
    name: 'ClassCard',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- info title -->
    <div class="title text-center my-5">
        <h2>Our Classes</h2>
        <p>Our preschool program has four dedicated classes</p>
        <div class="divider text-center">
            <img src="../assets/img/header_divider.png" alt="">

        </div>
    </div>

    <div class="info d-flex">
        <div class="col-6 pe-3 title-info">
            <h2>We provided four classes with nine to twenty children each aged twelve month to five years of age
            </h2>
        </div>
        <div class="col-6 ps-3">
            <p> Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis
                luctus. Urna eget lacinia
                eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna
                ante feugiat elit maecenas.</p>


        </div>
    </div>
    <div class="row mb-5 mt-5">
        <!-- da automatizzare con js -->
        <div class="col-6  " v-for="card in store.classCard">
            <div class="card-little-lambs">
                <div class="card mb-3">
                    <div class=" row g-0">
                        <div class="col-md-6">
                            <div class="card-body ">
                                <h3 class="card-title m-0  ms-2 ">{{ card.title }}</h3>
                                <p> <small class="text-muted ms-2">Class name</small></p>
                                <div class="info-child d-flex">
                                    <div class="age pe-2 text-center">
                                        <h5>{{ card.age }}</h5>
                                        <p>{{ card.text }}</p>
                                    </div>
                                    <div class="size-class ps-2 text-center">
                                        <h5>{{ card.size }}</h5>
                                        <p>Class size</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col-md-6">
                            <img :src="`${card.img}`" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="link p-2 ps-3">
                            <a class="py-3" href="#">READ MORE ></a>
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
}



.info {
    justify-content: center;

    h3 {
        color: #554e9e;
    }

    p {
        font-weight: 200;
        // color: #474545;
        opacity: 60%;
        color: black;
        font-size: 19px;
    }

    p:hover {
        opacity: 100%;
    }
}

.card {
    border-radius: 0;
    background-color: #554e9e;
    color: white;
    position: relative;
    border: 0;
}

.info-child {
    bottom: 15px;
    left: 12%;
    position: absolute;
}

.row {
    flex-wrap: wrap;
    justify-content: space-between;
}

.age {
    border-right: 1px solid white;
}

.link {
    position: absolute;
    background-color: #fe6601;
    width: 22%;
    bottom: 0;
    right: 0;

    a {
        text-decoration: none;
        color: white;
        font-weight: 400;
        // padding: 20px;
    }

}

.link:hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid #fe6601;

    a {
        //     color: #554e9e;
        font-weight: 500;
        color: #fe6601;

    }
}
</style>