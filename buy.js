basket = [];
function addtoBasket(e){

    var bycycleType= e.target.id;
    basket.push(bycycleType);
    document.getElementById(bycycleType).innerHTML = "Added Successfuly";
}

function showrating(s){
    console.log(s);
    var rate='<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F135706-409518-2-raikfcquaxqncofqfm.stackpathdns.com%2Fwp-content%2Fuploads%2F2015%2F11%2Fyellow-star-150x150.png&f=1&nofb=1" />';
    console.log(rate);
    for (var i=0; i<s;i++){
        console.log('i='+i);
        document.getElementById("ratestr").innerHTML+=' '+rate;
    }
    console.log('afteri='+i);
}

function buyNow(){
if(confirm(" Are you sure you want to checkout?")){
   {
    if (basket.length!=0){
        alert("your basket     \n\n "+" "+basket);
        stars=prompt("What star rating would you give us? (1 - 5)");
        while (stars<1 || stars>5){
            stars=prompt("please enter a valid rating between 1 and 5");
        }
        alert("Thank you for shopping from The Bycycle Shop");
        showrating(stars);
        console.log(stars);
        }
    else {alert("Your Basket is empty");}
    }

}
}
