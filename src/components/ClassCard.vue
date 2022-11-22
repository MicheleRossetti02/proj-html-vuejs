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
    <div class="title text-center mt-5">
        <h2>Our Classes</h2>
        <p>Our preschool program has four dedicated classes</p>
    </div>
    <div class="divider text-center">
        <img src="../assets/img/header_divider.png" alt="">

    </div>
    <div class="info d-flex">
        <div class="col-6 title-info">
            <h5>We provided four classes with nine to twenty children each aged twelve month to five years of age
            </h5>
        </div>
        <div class="col-6text-info">
            <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia
                eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna
                ante feugiat elit maecenas.</p>
        </div>
    </div>
    <div class="row">
        <!-- da automatizzare con js -->
        <div class="col-6 " v-for="card in store.classCard">
            <div class="card-little-lambs">
                <div class="card mb-3">
                    <div class=" row g-0">
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">{{ card.title }}</h5>
                                <p class="card-text">Class name</p>
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
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
h2 {
    color: #554e9e;
}

.info-child {
    justify-content: center;
}

.row {
    flex-wrap: wrap;
    justify-content: space-between;
}

.age {
    border-right: 1px solid black;
}
</style>