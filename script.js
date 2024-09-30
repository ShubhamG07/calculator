let currentInput ='';
const dataContainer = document.getElementById("dataContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const maxLength =20;

buttonContainer.addEventListener("click", displayData);

function displayData(e){
//    if(currentInput.length>maxLength){
//     dataContainer.style.fontSize=20px;
//     return;
//    }

   
function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    return n*factorial(n-1);
}
    let item = e.target;

      // Check if the last character is an operator and the current key is also an operator
      const operators = ['+', '-', '*', '/', '^', '!','%'];
    
    //   if (operators.includes(item.innerHTML) && operators.includes(currentInput.slice(-1))) {
    //       // Replace the last operator with the new one
    //       currentInput = currentInput.slice(0, -1) + item.innerHTML;
    //   } 
 
    if(item.classList[0]==="red"){
        currentInput='';
        dataContainer.innerHTML=currentInput;
    }

    // else if(item.classList[0]==="function"){
    //     if(currentInput[(currentInput.length)-1]==="+"||currentInput[(currentInput.length)-1]==="-" ){
    //         currentInput[(currentInput.length)-1]=item.innerText;
    //     }
    //     else{
    //         currentInput += item.innerText;
    //     }

    // }

    else if(item.classList[0]==="function" && operators.includes(currentInput.slice(-1))){
        if(item.classList[1]==="exp"){
            currentInput = currentInput.slice(0, -1) + '^';
        }
        else{
            currentInput = currentInput.slice(0, -1) + item.innerText;

        }
        
        dataContainer.innerHTML=currentInput;
    }

    else if(item.classList[0]==="equal"){
        if(currentInput===""){
            return;
        }
    

        if (currentInput.includes('!')) {
            const parts = currentInput.split('!');
            const base = parts[0];
    
            // Check for valid input (should only have one factorial)
            if (parts.length > 2 || isNaN(base) || !Number.isInteger(Number(base)) || Number(base) < 0) {
                dataContainer.innerHTML = 'Error'; // Invalid input
                currentInput = ''; // Clear input on error
                return;
            }
    
            // Calculate the factorial
            const result = factorial(parseInt(base));
            dataContainer.innerHTML = result; // Display the result
            currentInput = result.toString(); // Store the result for further calculations
            return;
        }

        const modifiedInput = currentInput.replace(/\^/g, '**');
        let result = eval(modifiedInput);
        dataContainer.innerHTML= result;
        currentInput =result.toString();
        
    }
    else if(item.classList[0]==="del"){
       currentInput =currentInput.slice(0,currentInput.length-1);
       dataContainer.innerHTML=currentInput;
    }
    else if(item.classList[1]==="exp"){
        currentInput +=`^`;
        dataContainer.innerHTML=currentInput;
    }
    else{
        currentInput += item.innerText;
        dataContainer.innerHTML=currentInput;
    }
}

