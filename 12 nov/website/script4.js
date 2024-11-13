function nameValid(name){
    if(name.length<3 || name.length > 50){
        return false;
    }
    return true;
}

function phonenumbervalid(number){
    let prefixC = number.substring(0,3);
    if(prefixC == "+88" && number.length==14)
    {
        return true;
    }
    if(number.length==11){
        return true;
    }
    return false;
}

function emailValid(email){
    
}


function validate(){


    let name= document.getElementById('name');
    let phnnum = document.getElementById('number');
    let email= document.getElementById('email');
    let nameStr = name.value;
    alert('nameStr')
}