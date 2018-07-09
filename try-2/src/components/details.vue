<template>
  <div class="details container">
    <tabs>
        <tab name="Details">
          <div class="row more-content">
            <div class="col-1">
              <img src="../assets/trail.svg" style="height: 75%; max-height: 250px;"/>
            </div>
            <div class="col-1">
            </div>
            <div class="col">
              <h6 class="light-text low-line">Pickup</h6>
              <h6><strong>load.pickupCity</strong></h6>
              <h6><strong>load.pickupShipperName</strong></h6>
              <h6><strong>load.pickupDate</strong></h6>
              <h6>load.pickupTime</h6>
              <delivery-item v-for="item in items"></delivery-item>
            </div>
          </div>
        </tab>
        <tab name="Notes">
          <div class="row more-content">
            <div class="col">
              <h5>Load:</h5>
              <p>Blah blah blah load info</p>
              <br>
              <h5>Pickup Location:</h5>
              <p>blah blah pickup notes</p>
              <br>
              <h5>Delivery Location:</h5>
              <p>blah blah delivery notes</p>
            </div>
          </div>
        </tab>
        <tab name="Docs">
            Third tab content
        </tab>
    </tabs>
  </div>


</template>

<script>
import deliveryItem from "@/components/deliveryItem"
export default {
  name: 'Details',
  components: { deliveryItem },
  data () {
    return {
      items: [
      {
        item: 1
      },
      {
        item: 1
      },
      {
        item: 1
      },
      {
        item: 1
      },
      {
        item: 1
      }
      ]
    }
  }
}
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
} .tabs-component {
  margin: 4em 0;
}



  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }


.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}


  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }


.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}


  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }


.more-content {
  height: 230px;
  overflow: scroll;
}
</style>
