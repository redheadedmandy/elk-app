<template>
    <div class="a-wrapper">
      <sidebar/>
      <div class="container-fluid">
        <top-nav/>
        <mob-nav/>
        <div class="container-fluid">
          <page-head/>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import MobNav from '@/components/MobNav'
import PageHead from '@/components/PageHead'

export default {
  name: 'Dispatch',
  components: {
    Sidebar,
    TopNav,
    MobNav,
    PageHead
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Avenir:300,400,600|Lato');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

    html {
      font-size: 13px;
      height: 100%;
      box-sizing: border-box;
      color: #43425D;
    }

    body {
      overflow-x: hidden;
      margin: 0;
      min-height: 100%;
      font-family: "Avenir", sans-serif;
      color: #656675;
      position: relative;
      background-color: #F0F1F5;
        background-size: 100vw 100vh;
        background-attachment: fixed !important;
    }
</style>
