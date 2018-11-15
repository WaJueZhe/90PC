<template>
  <div class="await">
    <div class="img">
      <img src="../../assets/refresh.gif" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.await {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2222;

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    border-radius: 10px;

    > img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
