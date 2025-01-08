function validate(e){
    e.preventdefault()
    const email = document.getElementById("email").value 
    const epass1 = document.getElementById("pass").value 
    const age = document.getElementById("age").value 
    const emsgbox = document.getElementById("message").value 
    let message = ""
    if (email == "")
    {
        message = "Please enter the email"
        msgbox.style.colour = "red"
    }
    else if (pass1 === " ")
    {
        message = "Please enter the password"
        msg.style.colour = "red"
    }
    else if (age === "")
    {
        message = "Age must be between 12 and 50"
        msg.style.colour = "red"
    }
    else {
        message = "login successful"
        msgbox.style.colour = "red"
    }
    
    mesgbox.innerText+message;
}