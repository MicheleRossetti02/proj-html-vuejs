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
            <h3>What's New</h3>
            <p>Keep up to date with the latest news</p>
            <div class="divider">
                <img src="../assets/img/header_divider.png" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col" v-for="news in store.newCard ">
                <div class="card col mb-3">
                    <p class="card-text"><small class="text-muted">{{ news.date }}</small></p>
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ news.title }}</h5>
                        <p class="card-text">{{ news.text }}<small class="text-muted">[...]</small></p>
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
}
</style>