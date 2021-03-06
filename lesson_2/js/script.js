'use strict'

 

     let application=Vue.createApp({
    data(){
        return{
 goods:[
             {
                title: "Пианино",
                price: 3000,
                count: 0
             },
             {
                title: "Гитара",
                price: 1200,
                count: 40
             },
             {
                title: "Барабаны",
                price: 2700,
                count: 12
             },
             {
                title: "Флейта",
                price: 900,
                count: 50
             },
             {
                title: "Арфа",
                price: 3400,
                count: 5
             }
          ] 
        }

    },
 computed:{  
 sortedByCount(){
 return this.goods.sort((b1, b2)=>b1.count-b2.count)   
     }
 }
})

 application.mount('#application');

