var app=new Vue(
    {
        el:'#app',

        data:{
            temp:0,
        },
        methods:{
            keypressed:function(){
                console.log('key pressed')
            },
            
        },
    }
);