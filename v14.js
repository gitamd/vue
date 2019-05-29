var myapp = new Vue({
    el :"#myapp",
    data : {
        count :"TEST",
        languages : ["Php", "Java", "Visual Basic", "Python"],
        teachers :[
            {name:"Teacher 1", subject:"PHP", location:{city:"Ahmedabad", country:"India"}},
            {name:"Teacher 2", subject:"Java", location:{city:"Rajkot", country:"India"}},
            {name:"Teacher 3", subject:"Visual Basic", location:{city:"Hyderabad", country:"India"}},
            {name:"Teacher 4", subject:"Python", location:{city:"Mumbai", country:"India"}},
        ]
    },
    methods : {

    }
});
