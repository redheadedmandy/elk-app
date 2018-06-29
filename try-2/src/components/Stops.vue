<template>
  <div class="stops">
    <h4>Delivery</h4>
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
              <br>
  </div>


</template>

<script>
  import VueSimpleSuggest from 'vue-simple-suggest'
  import 'vue-simple-suggest/dist/styles.css' // Using a css-loader
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'Stops',
    components: {
      VueSimpleSuggest,
      flatPickr
    },
    data: function () {
    return {
      pickupChecked: true,
      deliveryChecked: true,
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


label {
  display: block;
}
</style>
