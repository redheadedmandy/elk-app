<template>
  <div class="add-load">
    <div class="content-container container-slim">
    	<router-view></router-view>
    </div>
  </div>

</template>

<script>
import ProgressSteps from '@/components/ProgressSteps'

export default {
  name: 'AddLoad',
  components: { ProgressSteps }
}
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
