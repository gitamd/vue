Vue.directive("custom-owt",{
    bind : function(el, binding, vnode){
        console.log(el);
        el.style.backgroundColor = "blue";
        el.style.fontSize = "25px";
        el.style.color = "white";
        el.style.width = "200px";
        el.style.height = "100px";
        el.title = "Title has updated";
        //el.style = "width:200px;height:100px;background-color:blue;font-size:30px;color:white;";
        console.log(binding);
        console.log("Value : " + binding.value);
        console.log("Expession Value Language : "+ binding.value.language);
        console.log("Expession Value Server : "+ binding.value.server);
        
    },
    update : function(object1, object2) { 
        console.log("Custom directive updating");
        console.log(object1);
        //console.log(object2);

        var data = JSON.parse(JSON.stringify(object2));
        console.log(data);
        
    },
    unbind : function() {

    }
});

var myapp = new Vue ({
    el : "#myapp",
    data : {
        message : "This is a custom call"
    },
    methods : {
        updateValue : function () {
            this.message = "This value has been updated now.";
            console.log("Custom default value updated");
        }
    }
});