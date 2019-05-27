var myapp = new Vue ({
    el :"#myapp",
    data : {
        counter : 0,
        custCounter :0
    },
    methods : {
        increment : function (){this.counter++;},
        decrement : function (){this.counter--;},
        customCounter:function (param1) {this.custCounter += param1;}
    }

});