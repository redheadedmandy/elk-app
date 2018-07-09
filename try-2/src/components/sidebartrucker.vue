<template>

    <!-- Sidebar Holder -->
            <nav id="sidebar" class="active">
                <div class="sidebar-header">
                    <img class="img-fluid logo-head" src="../assets/logo.png">
                </div>

                <ul class="list-unstyled components">
                    <li>
                        <router-link to="/loads">
                            <i class="icon-cubes"></i>
                            Loads
                        </router-link>
                        
                        <router-link to="/dash">
                            <i class="icon-users"></i>
                            Trip
                        </router-link>
                    </li>
                </ul>
            </nav>


</template>

<script>
    import "../assets/logo.png"
export default {
  name: 'SidebarTrucker'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
        display: flex;
        align-items: stretch;
    }

    #sidebar {
      background: #FDFDFD;
      color: #222941;
      transition: all 0.3s;
      height: 100vh;
      position: sticky;
      position: -webkit-sticky;
      top: 0; /* required */
      box-shadow: 3px 0px 17px rgba(32, 30, 103, 0.03);
    }

    #sidebar.active {
        min-width: 80px;
        max-width: 80px;
        text-align: center;
    }

    #sidebar.active .sidebar-header strong {
        display: block;
    }

    #sidebar ul li a {
        text-align: left;
    }

    #sidebar.active ul li a {
        padding: 20px 10px;
        text-align: center;
        font-size: 0.85em;
    }

    #sidebar.active ul li a i {
        margin-right:  0;
        display: block;
        font-size: 1.8em;
        margin-bottom: 5px;
    }

    #sidebar.active ul ul a {
        padding: 10px !important;
    }

    #sidebar .sidebar-header {
        padding-left: 20px;
        padding-bottom: 0px;
        padding-right: 20px;
        padding-top: 5px;
    }

    #sidebar ul.components {
        padding: 20px 0;
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
        color: #222941;
    }

    #sidebar ul li a:hover {
        color: #222941;
        background: #EFF7FD;
    }

    #sidebar ul li a i {
        margin-right: 10px;
    }

    #sidebar .router-link-active {
        color: #222941;
        background: #EFF7FD;
        border-left: 5px solid #5BB0FF;
    }

    .sidebar-header {
      padding-top: 0px;
    }
</style>
