import Vue from 'vue'
import App from './App'
import request from 'superagent';

//shared methods
import methods from './modules/methods'

//shared model data
import model from './modules/model'

//exposing app is optional
//using imports allow same access in modules
var app = {}
app.model = model;
app.methods = methods;
window.app = app;

//load json
request.get( '/static/meetup.json' ).end(function(err, res){
    if( err ){
      console.log( err );
      return;
    }else{
      var result = JSON.parse( res.text );
      console.log( result );
      model.members = result.results;
    }
});


//start root Vue...
new Vue({
  el: '#app',
  template: '<app/>',
  components:{
    app:App
  }
})