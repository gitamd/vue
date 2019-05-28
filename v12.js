var myapp = new Vue({
    el : "#myapp",
    data : {
        isActive:false,
        isActive1:false
    },
    methods : {
        toggleClass : function(){this.isActive = !this.isActive;},
        // toggleClass1 : function(){this.isActive1 = !this.isActive1;}
    }
});