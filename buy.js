basket = [];
function addtoBasket(e){

    var bycycleType= e.target.id;
    basket.push(bycycleType);
    document.getElementById(bycycleType).innerHTML = "Added Successfuly";
}



function buyNow(){


if(confirm(" Are you sure you want to checkout?")){
   if (basket.length!=0){
        alert("your basket     \n\n "+" "+basket);
        alert("Thank you for shopping from The Bycycle Shop");}
    } else {alert("Your Basket is empty");}

}


