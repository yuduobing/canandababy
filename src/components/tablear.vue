<template>
  <div class="container-fluid  ">
    <div class="row" style="padding: 0 auto;text-align: center;margin-bottom: 0.74rem;margin-top: 0.74rem;">
      <router-link class="col-xs-3 " to="/a1">
        <image src="./static/image/p1.png" class="body-p1"/>
        <br>
        <p class="body-rowText">赴加生子福利</p>
      </router-link>
      <router-link class="col-xs-3 " to="/a2">
        <image src="./static/image/p2.png" class="body-p1"/>
        <br>
        <p class="body-rowText">成功案例</p>
      </router-link>
      <router-link class="col-xs-3 " to="/a3">
        <image src="./static/image/p3.png" class="body-p1"/>
        <br>
        <p class="body-rowText">月子中心</p>
      </router-link>
      <router-link class="col-xs-3 " to="/a4">
        <image src="./static/image/p4.png" class="body-p1"/>
        <br>
        <p class="body-rowText">政策解读</p>
      </router-link>
    </div>
    <div class="row" style="padding: 0 auto;text-align: center;margin-bottom: 0.74rem">

      <div class="col-xs-3  " style="padding: 0 auto;text-align: center;">
        <image src="./static/image/p5.png" class="body-p1"/>
        <br>
        <p class="body-rowText">赴加生子费用</p>
      </div>

      <div class="col-xs-3 ">
        <image src="./static/image/p6.png" class="body-p1"/>
        <br>
        <p class="body-rowText">赴加攻略</p>
      </div>

      <div class="col-xs-3 ">
        <image src="./static/image/p7.png" class="body-p1"/>
        <br>
        <p class="body-rowText">赴加签证</p>
      </div>

      <div class="col-xs-3 ">
        <image src="./static/image/p8.png" class="body-p1"/>
        <br>
        <p class="body-rowText">大温介绍</p>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: "tablear"
  }
</script>

<style scoped>
  @import '../../static/css/index.css';
</style>
