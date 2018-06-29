import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import MobNav from '@/components/MobNav'
import PageHead from '@/components/PageHead'
import Dash from '@/components/dash'
import Loads from '@/components/Loads'
import Drivers from '@/components/Drivers'
import AddLoad from '@/components/AddLoad'
import ProgressSteps from '@/components/ProgressSteps'
import Stops from '@/components/Stops'
import Contact from '@/components/contact'
import Details from '@/components/details'
import Review from '@/components/review'
import VueSimpleSuggest from 'vue-simple-suggest/lib'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import Calendar from '@/components/calendar'
import List from '@/components/List'
import VueEventCalendar from 'vue-event-calendar'
import RadialProgressBar from 'vue-radial-progress'
import RadialProgress from '@/components/radialProgress'
import loadItem from '@/components/loadItem'
import Confirmation from '@/components/confirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: { 
      	Sidebar,
	    TopNav,
	    MobNav,
	    PageHead
	      	}
    },
    {
      path: '/dash',
      component: Dash
    },
    {
      path: '/loads',
      component: Loads
    },
    {
      path: '/drivers',
      component: Drivers,
      children: [
	      {
	      	path: 'calendar',
	      	component: Calendar
	      },
	      {
	      	path: 'list',
	      	component: List
	      }
      ]
    },
    {
      path: '/add-load',
      component: AddLoad,
      children: [
	      {
	      	path: 'stops',
	      	component: Stops
	      },
	      {
	      	path: 'contact',
	      	component: Contact
	      },
	      {
	      	path: 'details',
	      	component: Details
	      },
	      {
	      	path: 'review',
	      	component: Review
	      }
      ]
    }
  ]
})
