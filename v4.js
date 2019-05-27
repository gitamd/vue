var myapp = new Vue({
    el : "#myapp",
    data : {
        webUrlLink :"https://vuejs.org/",
        webUrlText : "VueJs",
        imgTitle:"This is sample Image",
        imgSrc:"img1.jpg",
        isActive:true,
        hasImgBorder:true,
        hasError:true,
        txtName:"Name goes here",
        txtEmail:"Email goes here",
        htmlContent : "<p>This is paragraph</p>",
        classObject :{
            capitalize:true,
            error1:true
        },
        strMsg :"Hello"
    },
    computed : {
         reverseString : function(){            
             return this.strMsg.split('').reverse().join('');
         }

    }

});