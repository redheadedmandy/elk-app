<template>
  <div class="contact">

    <form autocomplete="off" name="loadDeets" id="contact" class="loadDeets">
          <fieldset>
            <h4>Pickup</h4>
          <div class="form-group">
                  <label for="shipName">Shipper Name</label>
                <vue-simple-suggest
                    :list="simpleSuggestionList"
                    :filter-by-query="true" id="shipName" placeholder="Start typing a name" autocomplete="autofill-myself"></vue-simple-suggest>
                </div>
            <div class="form-group">
                  <label for="locationPickup">Location</label>
                <vue-simple-suggest
                    :list="simpleSuggestionList"
                    :filter-by-query="true" id="locationPickup" placeholder="Start typing an address" autocomplete="custom-addresses"></vue-simple-suggest>
                </div>
                <div class="form-group row">
              <label>Date</label>
              <flat-pickr
              :config="dateConfig"
                class="form-control" 
                placeholder="Select date"               
                name="date" id="date1"></flat-pickr>
            </div>

            <div class="row">
              <div class="form-group col left">
              <label>Time</label>
              <flat-pickr
                :config="timeConfig"
                class="form-control" 
                placeholder="Select time"               
                name="time1" id="time1"></flat-pickr>
              </div>

              <div class="form-group col right">
              <label v-show="pickupChecked">Time 2</label>
              <flat-pickr
                :config="timeConfig"
                class="form-control" 
                placeholder="Select time"               
                name="time2" v-show="pickupChecked" id="time2"></flat-pickr>
              </div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="pickupChecked" id="apptCheck1" >
                <label class="form-check-label" for="apptCheck1">
                  Time range?
                </label>
            </div>
             <div class="form-group row">
              <label for="userAboutMe">Location notes:</label>
              <textarea class="form-control" id="userAboutMe" rows="3" placeholder="Is there any information about the location that the driver should know?"></textarea>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Save location notes for this place?
                </label>
              </div>
            </div>
            </fieldset>
            <br>
            <fieldset>
              <Stops/>
            </fieldset>
            <fieldset v-for="(stop, index) in stops" :key="index">
              <Stops v-bind="1"/>
            </fieldset>
            <br>
            <button type="button" class="btn-primary" id="addStop" @click="onClick">Add Stop</button>
            <br>
            <br>
            <br>
            <h4>Load Details</h4>
            <div class="form-group">
                  <label for="name">Assign a trucker</label>
                <vue-simple-suggest
                    :list="simpleSuggestionList"
                    :filter-by-query="true" id="name" placeholder="Start typing a name" autocomplete="autofill-myself"></vue-simple-suggest>
                </div>
            <div class="form-group row">
              <label for="userAboutMe">Load notes:</label>
              <textarea class="form-control" id="userAboutMe" rows="3" placeholder="Is there any information about the load itself that the driver should know?"></textarea>
            </div>
            <br>
            <div class="form-group">
              <router-link to="details"><button type="reset" class="btn btn-primary btn-space float-right">Cancel</button></router-link>
              <router-link to="stops"><button type="submit" class="btn btn-secondary btn-space float-right">Submit</button></router-link>
            </div>
      </form>
  </div>

</template>

<script type="text/javascript">
  import Vue from 'vue'
import VueSimpleSuggest from 'vue-simple-suggest'
  import 'vue-simple-suggest/dist/styles.css' // Using a css-loader
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import Stops from '@/components/Stops'

export default {
  name: 'Contact',
  components: {
      VueSimpleSuggest,
      flatPickr,
      Stops
    },
    data: function () {
    return {
      pickupChecked: true,
      deliveryChecked: true,
      stops: [],
      date: null,
      time: null,
      dateConfig: {
        altInput: true,
        dateFormat: "F j, Y"    
      },
      timeConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true        
      } 
    }
  },
    methods: {
      simpleSuggestionList() {
        return [
          'Vue.js',
          'React.js',
          'Angular.js',
          'three.js',
          'hello',
          'goodbye',
          'greg',
          'airwolf'
        ]
      },
      onClick() {
            this.stops.push(1)
        }
    }
};
// get(input location => geocode back to coordinates? => send coordinates to server, return location notes; on location notes change, enable save notes checkbox) x 2

// get(arr(brokerCompany.name))
// get(chosen => to php, return arr chosenCompany.brokers.names)
// get(chosen.broker => to php, return chosenCompany.chosenBroker.phone)
// if brokerName input returns null, show alert message, enable save broker checkbox
// if brokerCompany input returns null, show alert, if alert yes, show extra fields, write new brokerCompany to database on submit
// on keyUp, get(arr dispatcher.names)
// on keyUp get (arr commodity.names)
// on keyUp get (arr driver.names)

// how to do the autofill of load notes? Say "broker.company and location1 to location2" search previous loads from that company? Something to think about
//number of steps = number of stops x2 
// number of steps completed = current step - 1
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vue-simple-suggest.designed .input-wrapper input {
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px solid #cde;
  border-radius: 3px;
  color: black;
  background: white;
  outline:none;
  transition: all .1s;
  transition-delay: .05s
}

.form-control[readonly]{
  background-color: white;
}
</style>

<!-- shippers[0].locations[0] = 1
shippers[0].location_notes[0] = 1

Shippers: [
{
  "name": "ShipperName",
  locations: [1, 2, 3],
  location notes: [1, 2, 3]
},
{
  name: ShipperName,
  locations: [1, 2, 3],
  location notes: [1, 2, 3]
}
{
  name: ShipperName,
  locations: [1, 2, 3],
  location notes: [1, 2, 3]
}
{
  name: ShipperName,
  locations: [1, 2, 3],
  location notes: [1, 2, 3]
}
] -->
