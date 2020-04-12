Vue.component('mycomponent',
    {
        template:'<p>This is my component {{ name}} - {{temprature}} <button v-on:click="changeTemp()">Click Here</button></p> ',
        data:function(){
            return{
                name:'John',
                temprature:100,
            }
        },
        methods:{
            changeTemp:function(){
                this.temprature+=10;
            }
        },
    }
);

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

