Vue.component("owt",{
    template : "<div class='first-component' >"
                +"<div>Firstname : {{firstname}} </div>"
                +"<div>Lastname : {{lastname}}</div>"
                +"<div>Fullname : {{fullname}} (computed)</div>"
                +"<div>Method : {{method1()}}</div>"
                +"<div><button v-on:click='clickMe'>Click on Me</button></div>"
                +"</div>",
    data : function(){
        return {
            firstname : "IIS",
            lastname : "Window"
        };
    },
    methods : {
        method1 : function(){ return "Method1 is runnning";},
        clickMe : function(){ this.firstname = "Apache"; this.lastname = "Linux";}
    },
    computed : {
        fullname : function(){return this.firstname + " "+this.lastname;}
    }
});

var myapp2 = new Vue ({
    el :"#myapp2",
    data : {
        message : "test2"        
    },
    methods : {
    }
});

var myapp1 = new Vue ({
    el :"#myapp1",
    data : {
        message : "test1"        
    },
    methods : {
    }
});
