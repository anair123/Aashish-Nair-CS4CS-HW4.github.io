// validation for matriculation
document.getElementById('submit-button').addEventListener('click', function(event){

    event.preventDefault();
    
    
    
    const matriculation = document.getElementById("matriculation").value;
    const matriculationError = document.getElementById("matriculation-error");

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    let isNumeric = true;
    for (let i=0; i<matriculation.length;i++){
        if (matriculation[i]<'0'||matriculation[i]>'9'){
            isNumeric = false;
            break;
        }
    }
    if (!isNumeric){
        matriculationError.textContent = "Matriculation must only contain numbers.";
        matriculationError.style.color = "red";
        
        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }
    else{
        matriculationError.textContent="";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex for email

    if(!emailRegex.test(email)){
        emailError.textContent = "This email address is not valid.";
        emailError.style.color = 'red';
    }
    else{
        emailError.textContent = "";
    }


    // submit the form if there are no issues
    if (emailError.textContent=="" && matriculationError.textContent==""){
        alert("Submitting form...");
    }





    });



// dropdown for countries

const countries = [
    "Germany",
    "Turkey",
    "United Kingdom",
    "United States"
  ];
  

const selectElement = document.getElementById("i-am-from");

countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    selectElement.appendChild(option);
})


const programs = [
    "M.S. Computer Science (Cybersecurity)"
  ];
  

const selectProgram = document.getElementById("program");

programs.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    selectProgram.appendChild(option);
})