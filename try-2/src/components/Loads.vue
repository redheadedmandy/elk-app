<template>
  <div class="loads">
    <load-item/>
  </div>

</template>

<script>
import loadItem from '@/components/loadItem'
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'Loads',
  components: {loadItem}
}
$(document).ready(function() {
	$.post("https://fleetr-208415.appspot.com/get-employee.php")
	.done(function(data){
		employees = JSON.parse(data);
		document.write(employees);
	});
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container-fluid {
	padding: 0px;
}
</style>
