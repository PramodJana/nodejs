var app=new Vue(
    {
        el:'#app',

        data:{
            temp:0,
        },
        methods:{
            inc:function(){
                this.temp++;
            },
            dec:function(){
                this.temp--;
            },
        },
    }
);