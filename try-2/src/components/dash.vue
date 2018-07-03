<template>
  <div class="dash">
  	<ProgressSteps></ProgressSteps>
<!--     <Confirmation/> -->

        <Confirmation/>

        <div class="row">
          <div class='col'>
            <div class="left-button">
              <h1 class="centered"><i class="icon-info-circled"></i></h1>
            </div>
          </div>
          <div class="col">
            <div class="right-button">
              <h1 class="centered"><i class="icon-phone"></i></h1>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
	import Confirmation from "@/components/confirmation"
	import ProgressSteps from "@/components/ProgressSteps"
export default {
  name: 'Dash',
  components: {Confirmation, ProgressSteps}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
