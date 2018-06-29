<template>
  <div class="hello">
    <!-- mobile nav 768px and under -->
  <nav class="navbar mobnav fixed-bottom mobilenav">
      <div class="col mob">
        <router-link to="/dash">
          <img class="img-fluid mob" src="../assets/borderless-logo.png"><br><h6 class="pt-1">Dash</h6>
        </router-link>
      </div>
      <div class="col mob active">
        <router-link to="/loads">
          <img class="img-fluid mob" src="../assets/cubes.png"><h6 class="pt-1">Loads</h6>
        </router-link>
      </div>
      <div class="col mob">
        <router-link to="/drivers">
          <img class="img-fluid mob" src="../assets/users.png"><h6 class="pt-1">Drivers</h6>
        </router-link>
      </div>
      <div class="col mob">
        <router-link to="/add-load">
          <img class="img-fluid mob" src="../assets/cog.png"><h6 class="pt-1">Settings</h6>
        </router-link>
      </div>
  </nav>
    <!-- end mobile nav -->
  </div>

</template>

<script>
  import "../assets/borderless-logo.png"
  import "../assets/cubes.png"
  import "../assets/users.png"
  import "../assets/cog.png"

export default {
  name: 'Sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

        .nav-item-mobile.active {
            color: #222941;
            border-left: 3px solid #A3A0FB;
        }

        .mob-icon {
            font-size: 4vw;
        }

        .col.mob {
            height: 100%;
        }

        .nav-link.unlink {
            padding-top: 7px;
        }

        .nav-item-mobile {
            display: block;
        }

        .nav-link.mobile {
            color: #222941;
        }

        .mobnav {
            height: 50px;
            background-color: #FDFDFD;
            margin: 0;
            padding: 0;
        }

        .mob.active {
            background: #EFF7FD;
            border-bottom: 5px solid #5BB0FF;
            text-align: center;
            padding: 0;
        }

        .mob {
            text-align: center;
            padding: 0;
        }

        .img-fluid.mob {
            padding-top: 1px;
            padding-bottom: 1px;
            max-width: 20px;
        }

        .mob-text {
            font-size: .8rem;
        }

        @media (min-width: 769px) {
      .mobilenav {
        display: none;
      }
      .mob-top {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .mainnav {
        display: none;
      }
      #sidebar {
        display: none;
      }
      .pic-dropper {
        position: absolute;
        right: 0px;
        margin-top: -8px !important;
        z-index: 10;
      }
      .profile-menu {
        margin-top: 8px;
      }
    }

    @media (max-width: 640px) {
        .dropdown-menu{
          top: 50px;
          left: -16px;  
          width: 290px;
        }
        .nav .nav-item,.nav .nav-item a{
          padding-left: 0px;
        }
    }
</style>
