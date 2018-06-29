
<template>
  <radial-progress-bar :diameter="150"
                       :completed-steps="completedSteps"
                       :total-steps="totalSteps"
                       :start-color="startColor"
                       :stop-color="stopColor">
   <img src="@/assets/prof-4.jpg" class="profpic">
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'RadialProgress',
  data (RadialProgressBar) {
    return {
      completedSteps: 3,
      startColor: '#55ED99',
      stopColor: '#00BA6A',
      totalSteps: 5
    }
  },

  components: {
    RadialProgressBar
  }
}
</script>
<style scoped>
  img {
    width: 140px;
    margin-left: 10px;
  }
</style>