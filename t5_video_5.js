var myapp = new Vue({

	el : "#my-app",
	data :{
		counter:0,
		txtMsg: "Sample Data"
	},
	methods :{
		increment : function(inc) {this.counter += inc;},
		decrement : function(dec) {this.counter -= dec;}
		
	}
});