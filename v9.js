var myapp = new Vue ({
    el : "#myapp",
    data : {},
    methods : {
        keyAltEnter : function(){console.log("Alt + Enter Keys Pressed");},
        keyEnter : function(){console.log("Enter Key Pressed");},
        keyCtrlEnter : function(){console.log("Ctrl + Enter pressed");},
        keySpace : function(){console.log("Space key pressed");},
        keyDelete : function(){console.log("BackSpace key pressed");},
        keyKeyCode : function(){console.log("'A' key pressed");}
    }
});