 'use strict';

 var locations = ['1st and pike',"SeaTac Airport", "Seattle Center", "Capitol Hill", "Alki"]
 var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



 
 
 
 var firstandpike = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: [],
    id: '1andpike',
    customers: function(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    },
    cookieSales: function(){
        for(var i =0; i < hours.length;i++){   //gives items to avgCookieSale
        this.avgCookieSale.push(Math.ceil(this.customers(23,65)))
        };
    },
    render: function(){
        for(var i =0; i < this.avgCookieSale.length; i++){
            var referenceUl = document.getElementById(this.id);
            var newElement = document.createElement('li'); 
            newElement.textContent = `At ${hours[i]}, we sold  ${this.avgCookieSale[i]} cookies.`; 
            referenceUl.append(newElement);
        }
    },
 };
firstandpike.customers();
firstandpike.cookieSales();
firstandpike.render();

var seaTac = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSale: [],
    id: "seatac",
    customers: function(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    },
    cookieSales: function(){
        for(var i =0; i < hours.length;i++){   //gives items to avgCookieSale
        this.avgCookieSale.push(Math.ceil(this.customers(23,65)))
        };
    },
    render: function(){
        for(var i =0; i < this.avgCookieSale.length; i++){
            var referenceUl = document.getElementById(this.id);
            var newElement = document.createElement('li'); 
            newElement.textContent = `At ${hours[i]}, we sold  ${this.avgCookieSale[i]} cookies.`; 
            referenceUl.append(newElement);
        }
    },
};
seaTac.customers();
seaTac.cookieSales();
seaTac.render();

var seattleCenter = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSale: [],
    id: "seattlecenter",
    customers: function(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    },
    cookieSales: function(){
        for(var i =0; i < hours.length;i++){   //gives items to avgCookieSale
        this.avgCookieSale.push(Math.ceil(this.customers(23,65)))
        };
    },
    render: function(){
        for(var i =0; i < this.avgCookieSale.length; i++){
            var referenceUl = document.getElementById(this.id);
            var newElement = document.createElement('li'); 
            newElement.textContent = `At ${hours[i]}, we sold  ${this.avgCookieSale[i]} cookies.`; 
            referenceUl.append(newElement);
        }
    },
};
seattleCenter.customers();
seattleCenter.cookieSales();
seattleCenter.render();

var capitolHill = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSale: [],
    id: "capitolhill",
    customers: function(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    },
    cookieSales: function(){
        for(var i =0; i < hours.length;i++){   //gives items to avgCookieSale
        this.avgCookieSale.push(Math.ceil(this.customers(23,65)))
        };
    },
    render: function(){
        for(var i =0; i < this.avgCookieSale.length; i++){
            var referenceUl = document.getElementById(this.id);
            var newElement = document.createElement('li'); 
            newElement.textContent = `At ${hours[i]}, we sold  ${this.avgCookieSale[i]} cookies.`; 
            referenceUl.append(newElement);
        }
    },
};
capitolHill.customers();
capitolHill.cookieSales();
capitolHill.render();

var alki = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieSale: [],
    id: "alki",
    customers: function(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    },
    cookieSales: function(){
        for(var i =0; i < hours.length;i++){   //gives items to avgCookieSale
        this.avgCookieSale.push(Math.ceil(this.customers(23,65)))
        };
    },
    render: function(){
        for(var i =0; i < this.avgCookieSale.length; i++){
            var referenceUl = document.getElementById(this.id);
            var newElement = document.createElement('li'); 
            newElement.textContent = `At ${hours[i]}, we sold  ${this.avgCookieSale[i]} cookies.`; 
            referenceUl.append(newElement);
        }
    },
};
alki.customers();
alki.cookieSales();
alki.render();