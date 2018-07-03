<template>
  <div class="confirmation">
    <div class="confirm {{state}}" v-for="(step, index) in steps" v-hammer:swipe.right="currentStep = (step, index++)" v-hammer:swipe.left="currentStep.state = bad">
          <h3 id="step1" v-bind:is="currentStep"><i class="{{step.icon}} iconspace"></i> {{step.kind}} {{step.coName}}</h3>
        </div>

        <Step v-for="(step, index) in steps"
			v-bind:key="index" v-bind:step="step"></Step>
  </div>

</template>

<script>
	var tabs = [
  {
    name: 'Home', 
    component: { 
      template: '<div>Home component</div>' 
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Posts component</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>',
    }
  }
]

new Vue({
  el: '#dynamic-component-demo',
  data: {
  	tabs: tabs,
    currentTab: tabs[0]
  }
})
export default {
  name: 'Confirmation',
  props: ['step'],
}
locations = [
				{
					"name" : "RR Donnelly",
					"address" : "23 Middlebrook Ave"
				},
				{
					"name" : "RR Donnelly",
					"address" : "23 Middlebrook Ave"
				},
				{
					"name" : "RR Donnelly",
					"address" : "23 Middlebrook Ave"
				},
				{
					"name" : "RR Donnelly",
					"address" : "23 Middlebrook Ave"
				}
			]

			{{message}}
			var locIndex = 0;
			stepNumber = locations[locIndex],
			onSwipeRight() {
				locIndex++,

			},
			steps: [
				{
					"number" : 1,
					"icon" : "icon-ok",
					"kind" : "Arrived at",
					"coName" : "RR Donnelly",
					"state" : "good"
				},
				{
					"number" : 2,
					"icon" : "icon-ok",
					"kind" : "Loaded at",
					"coName" : "RR Donnelly",
					"state" : "good"
				},
				{
					"number" : 3,
					"icon" : "icon-ok",
					"kind" : "Arrived at",
					"coName" : "RR Donnelly",
					"state" : "good"
				},
				{
					"number" : 4,
					"icon" : "icon-ok",
					"kind" : "Unloaded at",
					"coName" : "RR Donnelly",
					"state" : "good"
				},
				{
					"number" : 5,
					"icon" : "icon-ok",
					"kind" : "Arrived at",
					"coName" : "RR Donnelly",
					"state" : "good"
				},
				{
					"number" : 6,
					"icon" : "icon-ok",
					"kind" : "Unloaded at",
					"coName" : "RR Donnelly",
					"state" : "good"
				}
			]
			
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content-container {
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
</style>
