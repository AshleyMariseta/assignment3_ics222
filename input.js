//getting my input Fields
let Name = document.getElementById('name');


let number1 = document.getElementById('cell');



let email = document.getElementById('email');


let address = document.getElementById('Address');


let enquiry = document.getElementById('enquiry');

let city= document.getElementById('inputCity');


let city2= document.getElementById('inputCity2');
//reference to span tags for error output
let nameError = document.getElementById('nameError');

let numberError = document.getElementById('numberError');


let emailError = document.getElementById('emailError');

let enquiryError = document.getElementById('enquiryError');


let addressError = document.getElementById('addressError');


let cityError = document.getElementById('cityError');


let city2Error = document.getElementById('city2Error');



function validateMyForm() {
    
    
    if(Name.value===""){
        nameError.innerText = "Name is Field empty";
    }



    else if(number1.value===""){
        numberError.innerText = "Number Field is empty";
    }



    else if(email.value===""){
        emailError.innerText = "Email Field is empty";
    }



    else if(enquiry.value===""){
        enquiryError.innerText = "Hello,Enquiry is empty";
    }




    if(address.value===""){
        addressError.innerText = "Hello,Name is empty";
    }





    if(city.value===""){
        cityError.innerText = "Hello,Name is empty";
    }






    if(city2.value===""){
        city2Error.innerText = "Hello,Name is empty";
    }





    else if(Name.value.match(/^[0-9]+$/)){
        nameError.innerText = "Hello,Invalid Name";
    }
    




    else if(city.value.match(/^[0-9]+$/)){
        cityError.innerText = "Invalid Name";
    }
    




    else if(city2.value.match(/^[0-9]+$/)){
        city2Error.innerText = "Invalid Name";
    }



    
    else if(number1.value.match(/^[A-Za-z]+$/)){
        numberError.innerText = "Invalid Field Number";
    }
    




    else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ){
        emailError.innerText = "Invalid Email";
    }
  




    else {
        alert("Enquiry successfully submitted!");
        clearForm();
    }

}

function clearForm() {
    Name.value = number1.value = email.value = enquiry.value = nameError.innerHTML = numberError.innerHTML = emailError.innerHTML = enquiryError.innerHTML = "";
}