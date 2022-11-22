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
            <h1> Meet Our Staff</h1>
            <p>With education and experience in early childhood care</p>
            <div class="divider">
                <img src="../assets/img/header_divider.png" alt="">
            </div>
        </div>
        <!-- general info -->
        <div class="info-staff d-flex">
            <div class="col-6 title-info">
                <h3>Our staff consist of three teachers and one assistant with experience in early childhood care</h3>
            </div>
            <div class="text-info col-6">
                <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia
                    eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna
                    ante feugiat elit maecenas.</p>
            </div>
        </div>

        <div class="row">
            <!-- card teacher -->
            <div class="col-5" v-for="teacher in store.teacherCard">

                <div class="teacher">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">

                                    <p class="card-text">{{ teacher.info }}</p>

                                </div>
                            </div>
                        </div>
                        <div class="row contact-teacher d-flex">
                            <div class="col">
                                <h5>{{ teacher.name }}</h5>
                                <p>{{ teacher.role }}</p>
                            </div>
                            <div class="col">

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<style scoped >
.row {
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>