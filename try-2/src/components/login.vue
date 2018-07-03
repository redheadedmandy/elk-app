<template>
<div class="container-fluid">
      <div class="pg-back float-left" style="position: relative">
        <img class="img-fluid bottom" src="images/login-2.png"/>
      </div>

      <div class="float-right login-group">
        <h4 class="logon-head">OnBoard</h4>
        <h5 class="center">Welcome back! Log back in to your account.</h5>
            <form class="login-form">
              <input type="hidden" name="rewardspace" id="rewardspace" class="rewardspace">
              <div class="form-group space">
                
                <label class="float-label" for="username">Username</label><input type="username" name="username" id="username" class="form-control" >
              </div>
              <div class="form-group">
                <label class="float-label" for="username">Password</label>
                <input type="password" name="password" id="password" class="form-control" >
              </div>
              <a href="forgot-password.html" class="forgot-pass-link">Forgot password?</a>
              <div class="form-group"> 
                <button type="submit" class="btn btn-primary float-right">Log in</button>
              </div>
            </form>
        </div>
      </div>
</template>

<script>
var employees;
var employee;
var currentLoads;
var currentLoad;
var currentPickupLocations;
var currentDropoffLocations;
var currentPickupLocation;
var currentDropoffLocation;

// Gets employees from database
$(document).ready(function() {
        $.post("get-employee.php")
        .done(function(data){
                employees = JSON.parse(data);
        });
        $.post("get-current-load.php")
        .done(function(data){
                currentLoads = JSON.parse(data);
        });
        $.post("get-current-pickup-locations.php")
        .done(function(data){
                currentPickupLocations = JSON.parse(data);
        });
        $.post("get-current-dropoff-locations.php")
        .done(function(data){
                currentDropoffLocations = JSON.parse(data);
        });
});

function getCurrentLoad()
{
        $.each(currentLoads, function(){
                if (employee.employee_id == this.trucker_id)
                {
                        currentLoad = this;
                }
        });

}

function getCurrentLocations()
{
        $.each(currentPickupLocations, function(){
                if (currentLoad.pickup_location_id == this.location_id)
                {
                        currentPickupLocation = this;
                }
        });
        $.each(currentDropoffLocations, function(){
                if (currentLoad.dropoff_location_id == this.location_id)
                {
                        currentDropoffLocation = this;
                }
        });
}

// Handles 'enter' being pressed
$(document).keypress(function(e) {
        if (e.which == 13)
        {
                $('#inputID').blur();
                validateData(employees);
        }

});

// Validates the employee's credentials
function validateData($employees)
{
        var validate = false;
        var pass = null;
        $.each($employees, function(){
                if ($("#username").val().toLowerCase() == this.employee_id.toLowerCase())
                {
                        pass = this.password;
                        employee = this;
                }
        });
        if ($("#password").val() == pass) {
                validate = true;
        }
        if (validate == true)
        {
                if (employee.employee_id == 1)
                {
                        adminScreen();
                }
                else if (employee.employee_id == 2)
                {
                        dispatcherScreen();
                }
                else
                {
                        truckerScreen();
                }

        }
        else
        {
                alert("Wrong Credientials");
        }
}

// Handles the submit button
$("#submit").click(function(){
        alert("button");
});

function truckerScreen()
{
        document.write("Trucker screen");
}

function dispatcherScreen()
{
        document.write("Dispatcher screen");
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