document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
    const kitkatQuantity = getInputValue("kitkat-quantity");
    const kitkatCost = kitkatQuantity * 200;
    setInnerText("chocolate", kitkatCost);
    total();
});

document.getElementById("rose-buy-btn").addEventListener("click", function(){
    const roseQuantity = getInputValue("rose-quantity");
    const roseCost = roseQuantity * 100;
    setInnerText("rose", roseCost);
    total();
});

document.getElementById("diary-buy-btn").addEventListener("click", function(){
    const diaryQuantity = getInputValue("diary-quantity");
    const diaryCost = diaryQuantity * 100;
    setInnerText("diary", diaryCost);
    total();
});

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
};

function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
};

function total(){
    const chocolate = getInnerText('chocolate');;
    const rose = getInnerText('rose');
    const diary = getInnerText('diary');
    
    const totalPrice = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    setInnerText('total', totalPrice);
};


document.getElementById("Promo-code-btn").addEventListener('click', function(){
    const code = document.getElementById('promo-code').value;
    if(code == 101){
        const actualPrice = document.getElementById('total').innerText;
        discountedPrice = parseInt(actualPrice) * 0.9;
        setInnerText("all-total", discountedPrice);
    }
    else{
        alert("bou nai abr valentine?")
    }
})
    // function handlePromoCode(){
        //     const actualPrice = document.getElementById('total');
        //     const discountedPrice = parseInt(actualPrice) * 0.9;
        //     document.getElementById("all-total").innerText = discountedPrice;
        // }
    // function handlePromoCode(){
    //     const actualPrice = document.getElementById('total');
    //     const discountedPrice = parseInt(actualPrice) * 0.9;
    //     document.getElementById("all-total").innerText = discountedPrice;
    // }
    // function handlePromoCode(){
    //     const actualPrice = document.getElementById('total');
    //     const discountedPrice = parseInt(actualPrice) * 0.9;
    //     document.getElementById("all-total").innerText = discountedPrice;
    // }
    // function handlePromoCode(){
        //     const actualPrice = document.getElementById('total');
        //     const discountedPrice = parseInt(actualPrice) * 0.9;
        //     document.getElementById("all-total").innerText = discountedPrice;
        // }
    // function handlePromoCode(){
    //     const actualPrice = document.getElementById('total');
    //     const discountedPrice = parseInt(actualPrice) * 0.9;
    //     document.getElementById("all-total").innerText = discountedPrice;
    // }
    // function handlePromoCode(){
    //     const actualPrice = document.getElementById('total');
    //     const discountedPrice = parseInt(actualPrice) * 0.9;
    //     document.getElementById("all-total").innerText = discountedPrice;
    // }