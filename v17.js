var myapp = new Vue({
    el : "#myapp",
    data : {
        fname : "",
        lname : "",
        channelName : "xampp"
    },
    methods :{},
    computed : {
        fullName : {
            get : function() { return this.fname + " "+ this.lname;},
            set : function() { this.channelName = "YouTube";}            
        }
    }
});