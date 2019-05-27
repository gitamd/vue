var myapp = new Vue({
    el : "#myapp",
    data : {
        counter : 0
    },
    methods : {
        incrementBy1 : function() {this.counter++;},
        btnClick : function() {console.log("Clicked");},
        parentEvent : function() {console.log("Parent div event")},
        childEvent : function() {console.log("Child div event")}
    }

}); 