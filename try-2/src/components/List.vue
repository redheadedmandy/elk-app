<template>
  <div class="list">
    <div class="container content-container">
        <div class="row">
          <div class="col-sm-2 filterpic">
            <radial-progress></radial-progress>
          </div>
          <div class="col-sm-2">
            <h3><strong>Greg Coffey</strong></h3>
            <h4 class="greentext"><strong>Driving</strong></h4>
            <h5>En route to shipper</h5>
            <h6>Updated status 14:53</h6>
          </div>
          <div class="col-sm">
            <div class="row">
              <div class="col-sm">
                <h4 class="greentext"><i class="icon-asset-5"></i> 
                Staunton, VA
                <i class="icon-right"></i> Herndon, VA | Elk Logistics</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container content-container">
        <div class="row">
          <div class="col-sm-2">
            <img class="img-fluid id-pic" src="images/prof-4.jpg">
          </div>
          <div class="col-sm-2">
            <h3>Greg Coffey</h3>
            <h4 class="greentext"><strong>Driving</strong></h4>
            <h5>En route to shipper</h5>
            <h6>Updated status 14:53</h6>
          </div>
          <div class="col-sm">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td class="borderless">
                    <h4><i class="icon-asset-5"></i></h4>
                  </td>
                  <td class="borderless">
                    <h4>Staunton, VA</h4>
                  </td>
                  <td class="borderless">
                    <h2><i class="icon-right"></i></h2>
                  </td>
                  <td class="borderless">
                    <h4>Herndon, VA</h4>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
  </div>

</template>

<script>
  import RadialProgress from '@/components/radialProgress'

export default {
  name: 'List',
  components: {
    RadialProgress
  }
}
</script>

<style>

</style>
