<script>
export default {
    name: 'Enroll'
}
</script>
<template>
    <div class="enroll p-4">
        <div class="container">
            <div class="row ">
                <div class="col-auto text">
                    <p>How to Enroll Your Child to a Class</p>
                </div>
                <div class="col-auto d-flex align-items-center">
                    <div class="btn">
                        <button type="button" class="btn text-white">LEARN MORE ></button>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.enroll {
    background-image: url(../assets/img/pattern.png);

    .row {
        justify-content: space-around;
    }

    p {
        margin: 0;
        color: white;
        font-size: 2rem;
        font-weight: 200;
    }

    button {
        font-weight: 300;
        font-size: 0.8rem;
        border: 2px solid white;
        border-radius: 0;
        transition: none;

    }

    button:hover {
        border: 0;
    }


}
</style>