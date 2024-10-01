let currentInput ='';
const dataContainer = document.getElementById("dataContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const maxLength =20;

// Event listener for clicking of button 

buttonContainer.addEventListener("click", displayData);

event.stopPropagation();

// function on click of button 

function displayData(e){
   
   
 
    dataContainer.scrollLeft = dataContainer.scrollWidth;


// factorial function for factorial key 
   
function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    return n*factorial(n-1);
}

// getting clicked item as item variable 

    let item = e.target;

// arrays of all operator to verify if our displayData not already contain an operator before 

      const operators = ['+', '-', '*', '/', '^', '!','%'];
    
// function for Clear display (C) Button     
 
    if(item.classList[0]==="red"){
        currentInput='';
        dataContainer.innerHTML=currentInput;
    }

    // checking no operator appear on empty screen 
    
    else if(currentInput.length === 1 && operators.includes(currentInput[0])){
        dataContainer.innerHTML='';
        return;
    }
   
// checking no two operator comes together 

    else if(item.classList[0]==="function" && operators.includes(currentInput.slice(-1))){
        if(item.classList[1]==="exp"){
            currentInput = currentInput.slice(0, -1) + '^';
        }
        else{
            currentInput = currentInput.slice(0, -1) + item.innerText;

        }
        
        dataContainer.innerHTML=currentInput;
    }

    // function for showing answer using eqaul button 

    else if(item.classList[0]==="equal"){
        if(currentInput===""){
            return;
        }
    
// checking for factorial keypress 

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

        // modifiedInput for replacing exponential keyword with actual exponential operator to work in eval function 

        const modifiedInput = currentInput.replace(/\^/g, '**');
        let result = eval(modifiedInput);
        dataContainer.innerHTML= result;
        currentInput =result.toString();
        
    }

    // function for delete function to delete last character entered

    else if(item.classList[0]==="del"){
       currentInput =currentInput.slice(0,currentInput.length-1);
       dataContainer.innerHTML=currentInput;
    }

    // function for replacing current input with ^ character 

    else if(item.classList[1]==="exp"){
        currentInput +=`^`;
        dataContainer.innerHTML=currentInput;
    }

    // final else condition to add any keypress innerHTML in display screen 

    else{
        currentInput += item.innerText;
        dataContainer.innerHTML=currentInput;
    }
}

