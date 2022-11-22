<script>
export default {
    name: 'ContactInput'
}
</script>

<template>
    <div class="send message mt-5 d-flex">
        <div class="left-part col-6">
            <div class="input  mb-4 col-10">

                <input type="text" class="form-control" placeholder="Your Name *" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>
            <div class="input  my-5 col-10">

                <input type="text" class="form-control" placeholder="Your E-mail *" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>
            <div class="input  mt-4 col-10">

                <input type="text" class="form-control" placeholder="Subject" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>

        </div>

        <div class="right-part col-6">
            <div class="input large-text  col-10">

                <input type="text" class="form-control " placeholder="Your Message *" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>

        </div>
    </div>
    <div class="btn-contact  d-flex my-4">
        <button class="btn px-4 mt-4">
            SEND MESSAGE >
        </button>
    </div>

</template>

<style scoped>
button {
    border-radius: 0;
    color: white;
    background-color: #fe6601;
    padding: 10px;
    font-weight: 400;
}

.btn-contact {
    justify-content: center;
}

.large-text {
    height: 100%;
}

.large-text>input {
    height: 100%;
}
</style>