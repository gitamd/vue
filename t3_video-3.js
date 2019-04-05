
var myapp = new Vue({
	el : "#my-app",
	data:{
		name:"Online Tutor",
		playlist:"VueJs"
	},
	methods:{
		run:function(msg,name){ return "I am running "+ msg + "Name : "+name;},
		playlist:function(msg){return "Good "+msg},
		welcome : function(msg) { return "Good  " + msg ;},
		valueAccess:function(){return "Course Type : "+this.name + " -- " +this.run("VueJs","Raj");}
	}
});
