<template>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>
 
<script>
export default {
  name: 'Calendar',
  data () {
    return {
      demoEvents: [{
        date: '2018/06/25', // Required
        title: 'Greg', // Required
      }, 
      {
        date: '2018/06/25',
        title: 'Laurent',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/26',
        title: 'Greg',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/27',
        title: 'Laurent',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Charlie',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Greg',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Laurent',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Mike',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Phil',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Randy',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Steve',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'David',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Dale',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Bobby',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Cris',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Todd',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Jimmy',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }, 
      {
        date: '2018/06/28',
        title: 'Melvin',
        desc: 'Here is a long description of the thing',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }
      ]
    }
  }
}
// if employee.type=trucker, then get array date, title=Pickup/Delivery, desc=location and shipper
//if employee.type=dispatcher, then get array date, title=trucker.name + Pickup/Delivery, desc=location + shipper
</script>

<style>
.__vev_calendar-wrapper .events-wrapper {
  background-color: #5BB0FF !important;
  color: white;
}

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today {
  background-color: #0081CB !important;
}

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.selected-day .is-event {
  background-color: #5BB0FF !important;
  border-color: #5BB0FF !important;
}

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-event {
  border-color: #5BB0FF !important;
}

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.highlight .date-num {
  color: #5BB0FF !important;
}

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.selected-day .date-num {
  color: white !important;
}


</style>
