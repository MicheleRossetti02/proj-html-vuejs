<script>
import { store } from '../store';
export default {
    name: 'NewInfo',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="info new text-center">
            <h2>What's New</h2>
            <p> <small class="text-muted ms-2">Keep up to date with the latest news</small></p>


            <div class="divider">
                <img src="../assets/img/header_divider.png" alt="">
            </div>
        </div>
        <div class="row mt-5">
            <div class="col" v-for="news in store.newCard ">
                <div class="card col mb-3">
                    <p class="card-text"><small class="text-muted">{{ news.date }}</small></p>
                    <img :src="`${news.img}`" class="card-img-top" alt="...">
                    <div class="number p-2 px-3">
                        <span>{{ news.num }}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ news.title }}</h5>
                        <p class="card-text">{{ news.text }}<small class="text-muted">[...]</small></p>
                        <div class="name&role d-flex">
                            <div class="me-2 name">
                                <img src="../assets/img/newcard/author.png" alt="">
                            </div>
                            <p> <small class="text-muted">{{ news.name }}</small></p>
                            <div class="ms-3 me-2 role">
                                <img src="../assets/img/newcard/category.png" alt="">
                            </div>
                            <p> <small class="text-muted">{{ news.role }}</small></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-new  d-flex my-4">
            <button class="btn px-4">GO TO BLOG ></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: #554e9e;
    font-weight: 200;
}

button {
    border-radius: 0;
    color: white;
    background-color: #fe6601;
    padding: 10px;
    font-weight: 400;
}

.btn-new {
    justify-content: center;
}

.card {
    border: 0;


    img {
        position: relative;
    }

    .number {
        background-color: #fe6601;
        position: absolute;
        bottom: 192px;
        right: 0px;
        color: white;
    }
}
</style>