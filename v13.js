var myapp = new Vue({
    el : "#myapp",
    data : {
        isActive:false,
        count : 0
    },
    methods : {
        incrementCount : function(){this.count++;}
    }
});