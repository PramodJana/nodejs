var app=new Vue(
    {
        el:'#app',

        data:{
           value:100,
           price:200,
        },
        methods:{
           
            },
            
        }
);


var demo=new Vue(
    {
        el:'#demo',

        data:{
           value:200,
        },
        methods:{
           f1:function(){
               return app.price;
           }
            },
            
        }
);