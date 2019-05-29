var myapp = new Vue({
    el : "#myapp",
    data : {  },
    methods : { 
        btnSubmit:function() {
            console.log(this.$refs);
            console.log("Name : ",this.$refs.txtname.value);
            console.log("Email  : ",this.$refs.txtemail.value);
            console.log("Email  : ",this.$refs.pSample.innerHTML);            
        }
    }
});