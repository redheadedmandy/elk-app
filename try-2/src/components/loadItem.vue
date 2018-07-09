<template>
  <div class="loadItem">
    <div class="content-container topspace">
        <div class="row">
          <div class="col">
            <h5>Current</h5>
            <span class="next float-right">
              <h5>
                <router-link to="/loads/current">
                  <i class="icon-right"></i>
                </router-link>
              </h5>
            </span>
            <hr class="underline">
          </div>
        </div>
        <div class="row more-content">
          <div class="col-1">
            <img src="../assets/trail.svg" style="height: 75%; max-height: 250px;"/>
          </div>
          <div class="col-1">
          </div>
          <div class="col">
            <slot name="pickup-item"/>
            <slot name="delivery-item"/>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

import '../assets/trail.svg'
import deliveryItem from '@/components/deliveryItem'
export default {
  name: 'loadItem',
  components: {deliveryItem},
  data () {
    return {
      items: 1,
      content: []
    }
  },
  mounted() {
  $.post("https://fleetr-208415.appspot.com/get-current-load.php")
  .done(response => {this.content = JSON.parse(response);
    this.items = JSON.parse(response).length
  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more-content {
  height: 230px;
  overflow: scroll;
}
</style>
