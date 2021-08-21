/* memory,storage and deliverycharge text and cost*/
function inputIdAndText(event,id){
    let text=event.target.innerText.toLowerCase();
    let cost=document.getElementById(id); 
    let value={text,cost}
    return value;
}

/* memory functionality */
document.querySelector(".memory").addEventListener("click",function(event){

   let inputValue=inputIdAndText(event,"extramemory-cost");

        if(inputValue.text=="16gb unified memory"){
            inputValue.cost.innerText="180";
                
        }else if(inputValue.text=="8gb unified memory"){
            inputValue.cost.innerText="0";
        }
   totalpricefun();
   
});

/* storage functionality */
document.querySelector(".storage").addEventListener("click",function(event){

    let inputValue=inputIdAndText(event,"extrastorage-cost");

        if(inputValue.text=="256gb ssd storage"){
            inputValue.cost.innerText="0"
        }else if(inputValue.text=="512gb ssd storage"){
            inputValue.cost.innerText="100"
        }else if(inputValue.text=="1tb ssd storage"){
            inputValue.cost.innerText="180"
        }
   totalpricefun();
});

/* delivery functionality */
document.querySelector(".delivery-option").addEventListener("click",function(event){

    
    let inputValue=inputIdAndText(event,"delivery-charge");

        if(inputValue.text=="friday, aug 25 free prime delivery"){
            inputValue.cost.innerText="0";
        }else if(inputValue.text=="friday, aug 21 delivery charge $20"){
            inputValue.cost.innerText="20";
        }
   totalpricefun(); 

});

/* totalprice functionality */
function totalpricefun(){

    let productPrice=parseFloat(document.getElementById("product-price").innerText);
    let extramemoryCost=parseFloat(document.getElementById("extramemory-cost").innerText);
    let extrastorageCost=parseFloat(document.getElementById("extrastorage-cost").innerText);
    let deliveryCharge=parseFloat(document.getElementById("delivery-charge").innerText);

    let sumAllPrice=productPrice+extramemoryCost+extrastorageCost+deliveryCharge;
    let totalPrice=document.getElementById("total-price");
    totalPrice.innerText=sumAllPrice;

    let totalWithPromo=document.getElementById("total-with-promo");
    totalWithPromo.innerText=sumAllPrice;

}
totalpricefun();

/*promo code functionality */
document.getElementById("promo-apply").addEventListener("click",function(){

    let promocode=document.getElementById("promocode");
    let totalPrice=document.getElementById("total-price");
    let totalWithPromo=document.getElementById("total-with-promo");

    if(promocode.value==""){
        alert("Enter your promo code")
        promocode.value="";
    }else if(promocode.value=="stevekaku"){
        totalWithPromo.innerText=parseFloat(totalPrice.innerText)-parseFloat(totalPrice.innerText)*0.2;
        promocode.value="";
    }else{
        totalWithPromo.innerText=parseFloat(totalPrice.innerText); 
        promocode.value="";
    }
});