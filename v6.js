var myapp =  new Vue({
    el : "#myapp",
    data : {
        x:0,
        y:0,
        message:""
    },
    methods : {
        movefunction : function(event) {  
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        outfunction : function() {this.message = "Mouse Out event executed";},
        overfunction: function(){this.message = "Mouse Over event executed";}
    }
});