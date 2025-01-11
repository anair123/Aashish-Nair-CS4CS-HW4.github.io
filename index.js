// validation for first name, m initial, and last name

document.getElementById('submit-button').addEventListener('click', function(event){
    event.preventDefault(); // stop form from going back to default


    const fname = document.getElementById('fname').value;
    const fnameError = document.getElementById('fname-error');

    const mInitial = document.getElementById('m-initial').value;
    const mInitialError = document.getElementById('m-initial-error');
    
    const lname = document.getElementById('lname').value;
    const lnameError = document.getElementById('lname-error');

    const matriculation = document.getElementById("matriculation").value;
    const matriculationError = document.getElementById("matriculation-error");

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");


    const isAlpha = str => /^[a-zA-Z]*$/.test(str); // pattern for alpha characters

    if (fname == ""){
        fnameError.textContent = "First name must not be empty."
        fnameError.style.color = "red";

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }
    else if (!isAlpha(fname)){

        fnameError.textContent = "First name must only contain alpha characters."
        fnameError.style.color = "red";

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    } 
    else{
        fnameError.textContent = ""; // remove error message
    }


    if (mInitial == ""){
        mInitialError.textContent = "Middle Initial must not be empty."
        mInitialError.style.color = "red";

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }
    else if (!isAlpha(mInitial)){

        mInitialError.textContent = "Middle Initial must only contain alpha characters."
        mInitialError.style.color = "red";
        isValid = false; //change to false

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }   
    else{
        mInitialError.textContent = ""; // remove error message
    }


    if (lname == ""){
        lnameError.textContent = "Last Name must not be empty."
        lnameError.style.color = "red";

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
        
    }
    else if (!isAlpha(lname)){

        lnameError.textContent = "Last name must only contain alpha characters."
        lnameError.style.color = "red";
        isValid = false; //change to false

        // scroll to the top
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }  
    else{
        lnameError.textContent = ""; // remove error message
    }

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

    if (email==""){
        emailError.textContent = "The email address can not be blank.";
        emailError.style.color = 'red';
    }
    else if(!emailRegex.test(email)){
        emailError.textContent = "This email address is not valid.";
        emailError.style.color = 'red';
    }
    else{
        emailError.textContent = "";
    }


    // submit the form if there are no issues
    if (fnameError.textContent=="" &&  mInitialError.textContent=="" &&  lnameError.textContent=="" &&  emailError.textContent=="" && matriculationError.textContent==""){
        alert("Submitted form");
    }


})









/*

document.getElementById('submit-button').addEventListener('click', function(event){

    event.preventDefault();
    
    
    
    const matriculation = document.getElementById("matriculation").value;
    const matriculationError = document.getElementById("matriculation-error");

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    let isNumeric = true;

    // matriculation must be filled


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
        alert("Submitted form");
    }





    });

*/
// validation for matriculation



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