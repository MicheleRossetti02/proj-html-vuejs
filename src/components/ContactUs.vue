<script>
import { store } from '../store';
import ContactInput from './ContactInput.vue';
export default {
    name: "ContactUs",
    components: { ContactInput },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="contact us mt-5">
        <div class="container">
            <div class="title text-center mb-4">
                <h3>Contact Us</h3>
                <p>Our postal address and contact details</p>
                <div class="divider">
                    <img src="../assets/img/header_divider.png" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col" v-for="contact in store.contactCard ">
                    <div class="contact">
                        <div class="image">
                            <img src="" alt="">
                        </div>
                        <div class="text">
                            <h4>{{ contact.title }}</h4>
                            <p class="card-text m-0"><small class="text-muted">{{ contact.firstRow }}</small></p>
                            <p class="card-text m-0"><small class="text-muted">{{ contact.secondRow }}</small></p>
                            <p class="card-text"><small class="text-muted">{{ contact.thirdRow }}</small></p>

                        </div>


                    </div>
                </div>
            </div>

            <ContactInput />
        </div>
    </div>
</template>

<style scoped>

</style>