<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :complete="e1 > n"
            :key="`${n}-step`"
            :step="n"
          >
            Step {{ n }}
          </v-stepper-step>

          <v-divider
            v-if="n !== steps"
            :key="n"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="nextStep(n)"
          >
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'ProgressSteps',
  data () {
      return {
        e1: 1,
        steps: 6
      }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      }
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      }
    }
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

		.v-stepper__step--active > .v-stepper__step__step {
			background-color: #5BB0FF;
			color: white;
		}
		.v-stepper__step--complete > .v-stepper__step__step {
			background-color: #55ED99;
			color: white;
			border: 2px solid #55ED99;
		}

		.v-stepper__step__step {
			border: 2px solid #5BB0FF;
			margin-bottom: -0.5px;
		}
/*
		.v-stepper__step__step {
			background: #5BB0FF;
		  color: white;
		  display: block;
		  border-radius: 100%;
		  text-align: center;
		  vertical-align: middle;
		}*/
</style>
