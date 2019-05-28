var myapp = new Vue({
    el : "#myapp",
    data : {
        firstname :"",
        lastname:"",
        meter : "",
        maths : 0,
        science : 0,
        english:0
    },
    computed : {
        getFullName : function(){return this.firstname + " "+this.lastname;},
        getCentimeter : function(){return this.meter * 100;},
        getTotalMarks : function(){return parseInt(this.maths)+parseInt(this.science)+parseInt(this.english);}
    }

});