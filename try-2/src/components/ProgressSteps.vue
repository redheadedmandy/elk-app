<template>
  <div class="progress-steps">
    	<nav class="form-steps">
            <div class="form-steps__item form-steps__item--active">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">1</span>
                <span class="form-steps__item-text">Stops</span>
              </div>

            </div>
            <div class="form-steps__item">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">2</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Contact</span>
              </div>
            </div>
            <div class="form-steps__item">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">3</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Load Details</span>
              </div>
            </div>
            <div class="form-steps__item">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">4</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Review</span>
              </div>
            </div>
          </nav>
  </div>

</template>

<script>
export default {
  name: 'ProgressSteps'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.form-steps {
		  display: block;
		  width: 100%;
		  position: relative;
		  margin: 40px 0 10px 0;
		  filter: drop-shadow(0 3px 7px rgba(32, 30, 103, 0.17));
		}

		.form-steps:after {
		  content: "";
		  display: table;
		  clear: both;
		}

		.form-steps__item {
		  padding: 0;
		  position: relative;
		  display: block;
		  float: left;
		  width: 16.66%;
		  text-align: center;
		}

		.form-steps__item-content {
		  display: inline-block;
		}

		.form-steps__item-icon {
		  background: #eceff1;
		  color: #8191ab;
		  display: block;
		  border-radius: 100%;
		  text-align: center;
		  width: 25px;
		  height: 25px;
		  line-height: 25px;
		  margin: 0 auto 10px auto;
		  position: relative;
		  font-size: 13px;
		  font-weight: 700;
		  z-index: 2;
		}

		.form-steps__item-text {
		  font-size: 13px;
		  color: #8191ab;
		  font-weight: 500;
		}

		.form-steps__item-line {
		  display: inline-block;
		  height: 3px;
		  width: 100%;
		  background: #cfd8dc;
		  float: left;
		  position: absolute;
		  left: -50%;
		  top: 12px;
		  z-index: 1;
		}

		.form-steps__item--active .form-steps__item-icon {
		  background: #00aeef;
		  color: #ffffff;
		}

		.form-steps__item--active .form-steps__item-text {
		  color: #4f5e77;
		}

		.form-steps__item--active .form-steps__item-line {
		  background: #00aeef;
		}

		.form-steps__item--completed .form-steps__item-text {
		  color: #4f5e77;
		}

		.form-steps__item--completed .form-steps__item-icon {
		  background: #00aeef;
		  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkuMTIgNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTIgMS4wNkw4LjA2IDAgMy4xOCA0Ljg4IDEuMDYgMi43NiAwIDMuODIgMy4xOCA3bDUuOTQtNS45NHoiLz48L3N2Zz4=);
		  color: transparent;
		  background-size: 10px;
		  background-repeat: no-repeat;
		  background-position: center center;
		  width: 25px;
		  height: 25px;
		  line-height: 25px;
		}

		.form-steps__item--completed .form-steps__item-line {
		  background: #00aeef;
		}

		.form-group.col.left {
			padding-left: 0;
		}

		.form-group.col.right {
			padding-right: 0;
		}

		.form-head {
			margin-top: 15px;
			padding: 15px;
			padding-left: 0;
		}

		form .row {
			margin-right: 0;
			margin-left: 0;
			padding-left: 15px;
			padding-right: 15px;
		}
</style>
