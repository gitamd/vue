var myapp2 = new Vue({
    el : "#myapp2",
    data : {
        message:"This is App 2" ,
        language : "php",
        cms : "wordpress"
    },
    methods : {
        getCms : function() {return this.cms;}
    },
    computed : {
        freeCms : function() { return this.cms;}
    }
});
var myapp1 = new Vue({
    el : "#myapp1",
    data : {
        message:"This is App 1",
        webFramework : "Laravel",
        language : myapp2.language,
        cmsName : myapp2.getCms()   
    },
    methods : {
        bestFreeCms : function() { return myapp2.freeCms;}
    }
});