<script >
export default {
  name: 'Header'
}
</script>

<template>
  <!-- header -->
  <header>
    <div class="container d-flex ">
      <div class="logo">
        <img src="../assets/img/logo/logo.png" alt="">
      </div>
      <div class="header link d-flex ">

        <!-- link header -->
        <!-- possibile automazziare con js -->

        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/home.png" alt="">
          <span class="pt-1">Home</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/document.png" alt="">
          <span class="pt-1">Pages</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/printer.png" alt="">
          <span class="pt-1">Blog</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/cart.png" alt="">
          <span class="pt-1">Shop</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/lab.png" alt="">
          <span class="pt-1">Shortcodes</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/chat.png" alt="">
          <span class="pt-1">Support</span>
        </div>
        <div class="icon d-flex px-4 ">
          <!-- icon -->
          <img src="../assets/img/image-header/envelope.png" alt="">
          <span class="pt-1">contact</span>
        </div>
      </div>
    </div>

  </header>

</template>

<style scoped lang="scss">
.container {
  justify-content: space-between;
  align-items: center;

  // .container {
  //   position: relative;
  // }

  .logo {

    img {

      width: 150px;

    }
  }

  .icon {
    // position: absolute;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 21px;
    padding-bottom: 21px;

    img {
      width: 30px;
    }
  }

  .icon:hover {
    background-color: #FD6500;
    cursor: pointer;
    color: white;

  }
}
</style>
