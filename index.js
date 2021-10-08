
   
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    
    
    }
    function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    
    }
    
    
    function validateForm(){
    var returnval = true;
    clearErrors();
    
    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<4){
        seterror("name", "*Length should be atleast 4");
        returnval = false;
    }
    
    
    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits");
        returnval = false;
    }
    
    
    return returnval;
}
    