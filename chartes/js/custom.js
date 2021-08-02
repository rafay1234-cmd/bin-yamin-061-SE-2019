 var ctx= document.getElementById("myChart").getContext("2d");
var myChart=new Chart(ctx,{
type:"bar",
data:{
    labels:["Python","javascript","php","c++"],
    datasets:[
        {
            data:[13,14,15,30],
            label:"Programming language",
            backgroundColor:["red","green","pink","yellow"],
            borderColor:["black","brown","yellow","green"],
            borderWidth:3,

        },
    ],

},
    options:{
        responsive: false,
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
            },
        },
      
        tooltips: {
            enabled:false,
            backgroundColor:"red",
            titleFontFamily:"Comic Sans MS",
            titleFontSize:50,
    },
},
}); 