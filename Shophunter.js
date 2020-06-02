/**
 * 
 

Problem :  Say that I have a list of products and coupons.

products = [{name: “Product 1”,  price: 30}, {name: “Product 2”, price: 40}]
coupons = [{name: “Product 1”, discount_percentage: 10, shop: “Shop 1”}, {name: “Product 1”, discount_percentage: 8, shop: “Shop 2”}, {name: “Product 2”, discount_percentage: 5, shop: “Shop 4”}].
 
Given a recipe of the following kind:

recipe = {name: “Recipe 1”, ingredients: [“Product 1”, “Product 6” ...]}
 
Write a program that will list all the shops I need to go to make the recipe as cheap as possible.
How to submit:

#Note:  you can paste solution in your browser console to ckeck

Solution: In Jquery
*/


var products=[
{"name":"Product 1","price":30},
{"name":"Product 2","price":40}
];
coupons = 
[
  {"name": "Product 1", "discount_percentage": 10, "shop": "Shop 1"},
  {"name": "Product 1", "discount_percentage": 8, "shop": "Shop 2"}, 
  {"name": "Product 2", "discount_percentage": 5, "shop": "Shop 4"},
 {"name": "Product 1", "discount_percentage": 15, "shop": "Shop 5"},
{"name": "Product 2", "discount_percentage": 15, "shop": "Shop 5"}
];

var  maxdiscount=0;
var shop= "";
var arr=[];
for(var j=0; j<products.length;j++){
 var name= products[j].name;
//console.log(name);
 var obj ={};
maxdiscount=0;
for(var i=0; i<coupons.length;i++){

    if( name== coupons[i].name){
       if( maxdiscount<coupons[i].discount_percentage){
          maxdiscount=   coupons[i].discount_percentage;
          shop =coupons[i].shop;
			obj={
             "name":name,
             "maxdiscount":maxdiscount,
             "shopName":shop
           }
      
    }
        
    }
  }
arr.push(obj);

}
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}

// for testing  purpose
