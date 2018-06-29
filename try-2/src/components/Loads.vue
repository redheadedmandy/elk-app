<template>
  <div class="loads">
    <load-item/>
  </div>

</template>

<script>
	import loadItem from '@/components/loadItem'
export default {
  name: 'Loads',
  components: {loadItem}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container-fluid {
	padding: 0px;
}
</style>
