var myapp = new Vue ({
    el : "#myapp",
    data:{
        message:"TEST1234"
    },
    methods : {
        keyPressFunction : function() { this.message = "Key Press Triggered.";},
        keyUpFunction: function() { this.message = "Key Up Triggered.";},
        keyDownFunction: function() { this.message = "Key Down Triggered.";}
    }
});