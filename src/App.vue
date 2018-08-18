<template>

  <div>
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    list: []
    };
  },
  created: function () {

    console.log("启动渲染");
  },
  methods:{


  }
}
</script>

<style>

</style>
