"use strict"
// Вывести в html названия услуг и их стоимость
// Реализовать возможность выбора услуг из списка
// Ниже списка отображать итоговую стоимость выбранных пользователем услуг.
// Если пользователь отменяет выбор, стоимость должна пересчитываться

let application=Vue.createApp({
    data(){
        return{
 services: [
         {
             title: "Женская стрижка на длинные волосы",
             price: 2000
         },
         {
             title: "Стрижка челки",
             price: 300
         },
         {
             title: "Детская стрижка (до 7 лет)",
             price: 700
         },
         {
             title: "Мужская стрижка",
             price: 1000
         },
         {
             title: "Коррекция бороды",
             price: 1200
         },
         {
             title: "Тонирование мужских волос",
             price: 1500
         },
         {
             title: "Окрашивание волос",
             price: 5000
         },
         {
             title: "Женский маникюр",
             price: 1500
         },
         {
             title: "Мужской маникюр",
             price: 1700
         },
         {
             title: "Педикюр",
             price: 2500
         },
         {
             title: "Покрытие гель-лаком",
             price: 1500
         }
     ],
     checkedServices: []
        }
        },
    computed:{
       cost(){ 
            return this.services.sort((a, b) => a.price - b.price);
        },
        getSumm()
        {
            let res= 0;
            for (let service of this.checkedServices) 
            {
                res += this.services[service].price
            }
            return res;
        }
    }
    })
application.mount("#application")