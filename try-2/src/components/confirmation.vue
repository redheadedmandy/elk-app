<template>
  <div class="confirmation">
    <div v-for="step in steps" class="confirm">
          <h3 id="step1"><i></i> {{step.kind}} {{step.coName}}</h3>
        </div>

        <!-- <Step v-for="(step, index) in steps"
			v-bind:key="index" v-bind:step="step"></Step> -->
  </div>

</template>

<script>
	var steps = [
				{
					number : 1,
					icon : "icon-ok",
					kind : "Arrived at",
					coName : "RR Donnelly",
					state : "good"
				},
				{
					number : 2,
					icon : "icon-ok",
					kind : "Loaded at",
					coName : "RR Donnelly",
					state : "good"
				},
				{
					number : 3,
					icon : "icon-ok",
					kind : "Arrived at",
					coName : "RR Donnelly",
					state : "good"
				},
				{
					number : 4,
					icon : "icon-ok",
					kind : "Unloaded at",
					coName : "RR Donnelly",
					state : "good"
				},
				{
					number : 5,
					icon : "icon-ok",
					kind : "Arrived at",
					coName : "RR Donnelly",
					state : "good"
				},
				{
					number : 6,
					icon : "icon-ok",
					kind : "Unloaded at",
					coName : "RR Donnelly",
					state : "good"
				}
			]
export default {
  name: 'Confirmation',
  data: function() {
  	return {
  		steps: steps,
  		currentStep: steps[0]
  	}
  }
}
			// var locIndex = 0;
			// stepNumber = locations[locIndex],
			// onSwipeRight() {
			// 	locIndex++,
			// },
			

// if step.value is odd, onSwipeLeft interruption = delay, 
// if step.value is even, onSwipeLeft interruption = detention


			
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*.content-container {
			position: relative;
			padding: 50px;
			background: #FDFDFD;
			border-radius: 22px;
			margin-top: 55px;
			margin-bottom: 55px;
			box-shadow: 0px 7px 17px rgba(0, 129, 203, 0.03);
			z-index: 1;
		}

		.container-slim {
			width: 50vw;
			margin-left: auto;
			margin-right: auto;
		}

		.confirm {
			position: absolute;
			top: 150px;
			width: calc(100% - 85px);
		}*/
</style>
