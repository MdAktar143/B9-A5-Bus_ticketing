function buyTickets(){
    const selectSeat = document.getElementById("select-seat");
}

const allButtons = document.getElementsByClassName("add-buttons");
let count = 0;
let count2 = 8;

for(const button of allButtons){
    button.addEventListener("click", function (e){
        count = count + 1;
        count2 = count2 - 1;
        document.getElementById("seat-count").innerText = count;
        document.getElementById("remain-seat").innerText = count2;
        
        const seatName = e.target.parentNode.childNodes[1].innerText;
        
        const busFare = document.getElementById("bus-fare").innerText;

        const seatIndicator = document.getElementById("seat-name");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = seatName;
        
        const p2 = document.createElement("p");
        p2.innerText = busFare;


        li.appendChild(p);
        li.appendChild(p2);
        
        seatIndicator.appendChild(li);

        const totalCost = document.getElementById("total-cost").innerText;
        
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(busFare);
        document.getElementById("total-cost").innerText = sum;
        document.getElementById("grand-total").innerText = sum;

        
        const coupon = document.getElementById("coupon-apply");
        coupon.addEventListener("click", function(){
        const couponElement = document.getElementById("input-value").value;
        if (couponElement === "NEW15") {  
            
                const couponInput = document.getElementById("coupon-feild");
                couponInput.classList.add('hidden');
                 
                const grandSum = (sum * ( 1 - (15/100)));
                document.getElementById("grand-total").innerText = grandSum;

        }else if (couponElement === "Couple 20") {
            
                const couponInput = document.getElementById("coupon-feild");
                couponInput.classList.add('hidden');
           
                const grandSum = (sum * ( 1 - (20/100)));
                document.getElementById("grand-total").innerText = grandSum;

        }else{document.getElementById("grand-total").innerText = sum;

        }
    


        })

    })

    
}

function successPage(){
    const bodySection = document.getElementById("body-container");
    bodySection.classList.add('hidden');

    const success = document.getElementById("success-container");
    success.classList.remove("hidden");
    
}

function homePage(){
    const success = document.getElementById("success-container");
    success.classList.add("hidden");

    const bodySection = document.getElementById("body-container");
    bodySection.classList.remove("hidden");

}

// function setBackgroundColorById(element){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]');
// }