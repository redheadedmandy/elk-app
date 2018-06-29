<template>
  <div class="drivers">
    <div>
    	<div class="btn-group tools" role="group" aria-label="Choose view type">
          <button type="button" class="btn btn-tertiary" aria-label="Map"><i class="icon-asset-5"></i></button>
          <router-link to="calendar"><button type="link" class="btn btn-tertiary" aria-label="Table"><i class="icon-table"></i></button></router-link>
          <router-link to="list"><button type="link" class="btn btn-tertiary" aria-label="List"><i class="icon-th-list"></i></button></router-link>
        </div>
      </div>
    	
    	
    	<router-view></router-view>

		

    </div>

</template>

<script>
export default {
  name: 'Drivers'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group.tools {
	position: absolute;
	right: 150px;
}
</style>
