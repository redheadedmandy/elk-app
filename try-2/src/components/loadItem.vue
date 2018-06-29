<template>
  <div class="loadItem">
    <div class="content-container topspace">
        <div class="row">
          <div class="col">
            <h5>Current</h5>
            <span class="next float-right">
              <h5>
                <a href="#" class="unlink">
                  <i class="icon-right"></i>
                </a>
              </h5>
            </span>
            <hr class="underline">
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <img src="../assets/trail.svg" style="height: 75%;"/>
          </div>
          <div class="col">
            <h6 class="light-text low-line">Pickup</h6>
            <h6><strong>Staunton, VA</strong></h6>
            <h6><strong>May 30, 2018</strong></h6>
            <h6>08:00 appt</h6>
            <br>
            <h6 class="light-text low-line">Delivery</h6>
            <h6><strong>Pittsburgh, PA</strong></h6>
            <h6><strong>May 30, 2018</strong></h6>
            <h6>08:00 appt</h6>
          </div>
          <div class="col mid-line">
            <br>
            <h6 class="light-text space"><i class="icon-building-filled iconspace"></i>Elk Logistics</h6>
            <h6 class="light-text space"><i class="icon-cubes iconspace"></i>Toys</h6>
            <h6 class="light-text space"><i class="icon-asset-20 iconspace"></i>30,000 lbs</h6>
            <h6 class="light-text space"><i class="icon-money iconspace"></i>$1200 RtT</h6>
            <h6 class="light-text space"><i class="icon-asset-14 iconspace"></i>459 miles</h6>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import '../assets/trail.svg'
export default {
  name: 'loadItem'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
