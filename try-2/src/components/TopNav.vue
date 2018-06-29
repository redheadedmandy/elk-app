<template>
  <div class="hello">
    <!-- top nav -->
    <div class="mainnav">
      <nav class="navbar right-align">
        <ul class="navbar-nav main-ul">
                  <li class="nav-item dropdown pic-dropper">
                    <a class="nav-link notification-icon" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img class="profpic" src="../assets/prof-4.jpg">
                    </a>
                      <ul class="dropdown-menu position-relative profile-menu">
                        <li class="head text-light bg-dark">
                          <div class="row">
                            <div class="col-lg-12 col-sm-12 col-12">
                              <span>Jane Doe</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <ul>
                          <li class="prof-men-link">
                            <a href="#">Feedback</a>
                          </li>
                          <div class="dropdown-divider"></div>
                          <li class="prof-men-link">
                            Logout
                          </li>
                      </ul>
                        </li>
                      </ul>
                  </li>
        </ul>
      </nav>
    </div>
    
    <!-- End of row/top nav -->
  </div>

</template>

<script>
import '../assets/prof-4.jpg'
export default {
  name: 'Sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logo-head {
        padding-top: 15px;
        padding-bottom: 15px;
        filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1));
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      .navbar {
      color:#222941;
        border-radius: 0px;
        height: 55px;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .icon-bell-alt {
      color: #222941;
      font-size: 2rem;
      line-height: 3.5rem;
    }

    .main-ul {
      height: 55px;
    }

    .right-align {
      float: right !important;
      align-items: flex-end;
    }

    .nav-item {
      margin-left: 0px;
      margin-top: 0px;
    }

      .nav-link {
        padding-left: 10px;
        padding-right: 10px;
      }



  /* ---- DROPDOWNS ---- */

      .dropdown-menu {
        top: 25px;
        right: -10px;
        left: unset;
        width: 460px;
        box-shadow: 0px 14px 25px rgba(32, 30, 103, 0.1);
        padding-bottom: 0px;
        padding: 0px;
        border-radius: 15px;
        border-color: transparent;
        margin-top: 40px;
          z-index: 1050;
      }

      .dropdown-menu:before{
        content: "";
        position: absolute;
        top: -20px;
        right: 19.5px;
        border: 10px solid #0081CB;
        border-color: transparent transparent #0081CB transparent;
      }

      .head {
        padding: 10px 20px;
        border-radius: 15px 15px 0px 0px;
      }

      .bg-dark {
        background-color: #0081CB !important;
      }

      .drop-footer {
        padding: 10px 20px;
        border-radius: 0px 0px 15px 15px; 
      }

      .bg-gray {
        background-color: #ECECF4;
      }

    /* ---- Notification ---- */

        .notification-item {
            height: 50px;
            border-bottom: 1px solid #A5A4BF;
          }

          .dropper {
            position: relative;
            right: 105px;
            filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.17));
          }

          .profpic {
          width: 35px;
          margin-right: 10px;
          margin-top: 0px;
          padding-top: 0px;
          clip-path: circle(45%);
        }

        .notification-box{
          padding: 10px 0px; 
        }

        .notification-icon {
            position: absolute;
            right: 5px;
            color: #656675;
            font-size: 22px;
            margin-top: 15px !important;
          }


    /* ---- Profile ---- */

        .pic-dropper {
            position: absolute;
            right: 20px;
            filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.17));
            margin-top: -2px !important;
          }

          .profile-menu {
          top: 30px;
          right: 0px;
          left: unset;
          width: 160px;
          box-shadow: 0px 14px 25px rgba(0, 129, 203, 0.03);
          padding-bottom: 0px;
          padding: 0px;
          text-align: right;
        }

        .prof-men-link {
          padding: 5px;
          margin-right: 10px;
        }

        .prof-men-link.bottom {
          padding-bottom: 10px;
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
      #sidebar {
        display: none;
      }
      .pic-dropper {
        position: absolute;
        right: 0px;
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
