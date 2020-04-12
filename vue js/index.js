var app=new Vue(
    {
        el:'#app',

        data:{
            message:'Hello World',
            name:'Pramod',
            price:'1000',
        },

        methods:{
            discount:function(){
                cost=this.price - 100;
                return cost;
            }
    }
    }
);