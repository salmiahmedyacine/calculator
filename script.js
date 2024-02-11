const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%" , "*" , "/" , "-" , "+" , "="];
let output = "";
// Define function to calculate based on button clicked 
const calculate = (btnValue)=>{
  if(btnValue === "=" && output !==""){
    //if output has '%' , replace with '/100' before evaluating.
    output = eval(output.replace("%" , "/100"));

  }else if (btnValue === "AC"){
    output = "";
  }else if (btnValue === "DEL"){
    output = output.toString().slice(0,-1);
  }else{
    // IF output is empty and button is specialChars the return : 
    if(output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to button , call calculator () on click 
buttons.forEach((button) => {
  // Button Click listener calls calculate () with dataset value as argument 
  button.addEventListener("click" , (e) => calculate(e.target.dataset.value));
});