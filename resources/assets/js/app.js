import $ from 'jquery';
window.$ = window.jQuery = $;
global.$ = global.jQuery = require('jquery');
window.Vue = require('vue');

import 'jquery-ui/ui/widgets/datepicker.js';
require('./bootstrap');

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('example', require('./components/Example.vue'));
const app = new Vue({
    el: '#app'
});
$('.date').datetimepicker({
    format: 'YYYY-MM-DD',
})