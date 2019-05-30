// Vue.directive("owt", {
//     bind: function(el,binding, vnode) { },
//     update :function() {},
//     unbind : function() {}
// });
Vue.directive("owt", function(el, binding){
    //console.log(el);
    console.log(binding);
    console.log("value " + binding.arg);
    if (binding.arg == 'red') {
        if (binding.modifiers.change === true)
            el.style = "background-color:red;color:white;width:150px;height:100px;font-size:25px;";
    }
    if (binding.arg == 'blue') {
        if (binding.modifiers.change === true)
            el.style = "background-color:blue;color:white;width:150px;height:100px;font-size:25px;";
    }
    var bgColor = binding.arg;
    if (binding.modifiers.change === true)
            el.style = "background-color:"+bgColor+";color:white;width:150px;height:100px;font-size:25px;";
});

var myapp = new Vue ({
    el : "#myapp",
    data : {
        channelName : "Online Web Tutor"
    }
});