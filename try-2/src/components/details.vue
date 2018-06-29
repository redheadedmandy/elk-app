<template>
  <div class="details">
    <div class="progress-steps">
      <nav class="form-steps">
            <div class="form-steps__item form-steps__item--completed">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">1</span>
                <span class="form-steps__item-text">Stops</span>
              </div>

            </div>
            <div class="form-steps__item form-steps__item--completed">
              <div class="form-steps__item-content">
                <span class="form-steps__item-icon">2</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Contact</span>
              </div>
            </div>
            <div class="form-steps__item form-steps__item--active">
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

    <form name="userMainSettings" id="userMainSettings" class="userMainSettings" autocomplete="off">
            <div class="form-group">
                <label for="name">Commodity</label>
                <vue-simple-suggest v-model="chosen"
                    :list="simpleSuggestionList"
                    :filter-by-query="true" id="name" placeholder="Start typing a commodity type"></vue-simple-suggest>
                </div>

            <div class="form-group row"><label>Rate to Truck</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input class="form-control" type="number" step="50"/>
              </div>
            </div>

            <div class="form-group">
                <label for="name">Assign a driver</label>
                <vue-simple-suggest v-model="chosen"
                    :list="simpleSuggestionList"
                    :filter-by-query="true" id="name" placeholder="Start typing a name"></vue-simple-suggest>
                </div>

            <div class="form-group row">
              <label for="userAboutMe">Load notes:</label>
              <textarea class="form-control" id="userAboutMe" rows="3" placeholder="Is there any information about the load itself that the driver should know?"></textarea>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck7">
                <label class="form-check-label" for="defaultCheck7">
                  Save load and notes for future use?
                </label>
              </div>
            </div>

            <div class="form-group">
              <router-link to="review"><button type="link" class="btn btn-primary btn-space float-right">Next</button></router-link>
              <router-link to="contact"><button type="link" class="btn btn-secondary btn-space float-right">Back</button></router-link>
            </div>
          </form>
  </div>

</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Using a css-loader

export default {
  name: 'Details',
  components: {
      VueSimpleSuggest
    },
    data(VueSimpleSuggest) {
      return {
        chosen: ''
      }
    },
  methods: {
      simpleSuggestionList() {
        return [
          'Vue.js',
          'React.js',
          'Angular.js',
          'three.js',
          'hello',
          'goodbye',
          'greg',
          'airwolf'
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vue-simple-suggest.designed .input-wrapper input {
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px solid #cde;
  border-radius: 3px;
  color: black;
  background: white;
  outline:none;
  transition: all .1s;
  transition-delay: .05s
}
</style>
