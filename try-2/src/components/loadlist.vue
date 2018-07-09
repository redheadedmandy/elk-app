<template>
  <div class="loads container">
    <load-item v-for="item in items">
    	<delivery-item v-for="item in items" slot="delivery-item"></delivery-item>
    </load-item>
  </div>

</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

import loadItem from '@/components/loadItem'
import deliveryItem from '@/components/deliveryItem'

export default {
  name: 'LoadList',
  components: {loadItem, deliveryItem},
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
<style>
.container-fluid {
	padding: 0px;
}
</style> 
