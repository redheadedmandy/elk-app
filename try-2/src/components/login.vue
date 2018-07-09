<template>
<div class="container-fluid">
      <div class="pg-back float-left" style="position: relative">
        <img class="img-fluid bottom" src="images/login-2.png"/>
      </div>

      <div class="float-right login-group">
        <h4 class="logon-head">OnBoard</h4>
        <h5 class="center">Welcome back! Log back in to your account.</h5>
            <form class="login-form" id="loginform">
              <div class="form-group space">
                
                <label class="float-label" for="username">Username</label><input type="username" name="username" id="username" class="form-control" >
              </div>
              <div class="form-group">
                <label class="float-label" for="username">Password</label>
                <input type="password" name="password" id="password" class="form-control" >
              </div>
              <a href="forgot-password.html" class="forgot-pass-link">Forgot password?</a>
              <div class="form-group"> 
                <button type="submit" class="btn btn-primary float-right" id="login">Log in</button>
              </div>
            </form>
        </div>
      </div>
</template>

<script>
    import JQuery from 'jquery'
let $ = JQuery

var employees;
var employee;
var currentLoads;
var currentLoad;
var currentPickupLocations;
var currentDropoffLocations;
var currentPickupLocation;
var currentDropoffLocation;

// Gets employees from database
var usernameInput = $('#username').val();
var passwordInput = $('#password').val();
// Handles 'enter' being pressed
$(function () {


$("#loginform").on('submit', function (e) {
    e.preventDefault();
    console.log($('#loginform').serialize());
     $.ajax({
            type: 'post',
            url: 'https://fleetr-208415.appspot.com/',
            data: $('#loginform').serialize(),
                        success: function (data) {
                var employeeId = data;
                console.log(employeeId);
                    if (employeeId == 1)
                {
                        adminScreen();
                }
                else if (employeeId == 2)
                {
                        dispatcherScreen();
                }
                else
                {
                        truckerScreen();
                }
            }
          });


    // $.post("https://fleetr-208415.appspot.com/", $("#loginform").serialize() ).done(function(data){
    //                 employeeId = data;
    //                 console.log(data);
    //                 if (employeeId == 1)
    //             {
    //                     adminScreen();
    //             }
    //             else if (employeeId == 2)
    //             {
    //                     dispatcherScreen();
    //             }
    //             else
    //             {
    //                     truckerScreen();
    //             }
    //         });
        });

})        

function truckerScreen()
{
        // similar behavior as an HTTP redirect
    window.location.replace("http://localhost:8080/#/trucker");
}

function dispatcherScreen()
{
        window.location.replace("http://localhost:8080/#/dispatch");
}

function adminScreen()
{
        document.write("Admin screen");
}

export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>