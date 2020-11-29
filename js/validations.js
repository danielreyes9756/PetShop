function login_validation(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    document.getElementById("pUsername").innerHTML = " ";
    document.getElementById("pPassword").innerHTML = " ";
    document.getElementById("result").innerHTML = " ";

    if((username.length < 4 || username.length > 20) && (password.length < 8 || password.length > 20)){
        document.getElementById("pUsername").innerHTML = "Tamaño del nombre de usuario invalido, debe de tener entre 4 y 20 letras";
        document.getElementById("pPassword").innerHTML = "Tamaño de la contraseña invalido, debe de tener entre 4 y 20 letras";
        return false;
    } else if(username.length < 4 || username.length > 20) {
        document.getElementById("pUsername").innerHTML = "Tamaño del nombre de usuario invalido, debe de tener entre 4 y 20 letras";
        return false;
    } else if(password.length < 8 || password.length > 20){
        document.getElementById("pPassword").innerHTML = "Tamaño de la contraseña invalido, debe de tener entre 4 y 20 letras";
        return false;
    }

    if(!/^[A-Za-z0-9]{4,20}$/.test(username)){
        alert("Invalid username 4-20 alphanumeric characters");
        return false;
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/.test(password)){
        alert("Invalid password format at least one uppercase, one number and one symbol");
        return false;
    }
    /** EXIST
    var array = JSON.parse(users);
    var correct = false;
    array.forEach(
        user => {
            if(user.name == name && user.password == password) {
                document.getElementById("result").innerHTML = " ";
                correct=true;
            }
    });
    */
    //if(correct) return true;

    //document.getElementById("result").innerHTML = "Error usuario o password incorrecta pruebe de nuevo";
    //return false;
    document.getElementById("result").innerHTML = "Congratz!!!";
    alert("Congratz!")
    return true;
}


function createAccount(){

    //Invariables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let username;
    let country;
    let province;
    let phone;
    let zip
    //Dependientes del tamaño
    if(screen.width > 767) {
        username = document.getElementById("uname").value;
        country = document.getElementById("country").value;
        province = document.getElementById("province").value;
        phone = document.getElementById("phone").value;
        zip = document.getElementById("zip").value;
    } else {
        username = document.getElementById("unamePhone").value;
        country = document.getElementById("countryPhone").value;
        province = document.getElementById("provincePhone").value;
        phone = document.getElementById("phonePhone").value;
        zip = document.getElementById("zipPhone").value;
    }

    if(name.length > 3 && name.length < 31 && email.length > 9 && email.length < 322){
        if(username.length > 3 && username.length < 21 && zip.length === 5 && phone.length === 9){
            if(country.length > 3 && country.length < 61 && province.length > 0 && province.length < 101){
                if(password === cpassword){
                    if(!this.patternsOk()) return false;
                    alert("cuenta creada");
                    return true;
                }
            }
        }
    }
    /** siguiente sprint
     var array = JSON.parse(users);
     var correct = true;

     array.some(
     user => {
			if(user.name == username){
				console.log("error nombre de usuario existente");
				correct = false;
			}
			if(user.email == email){
				console.log("error ya existe una cuenta vinculada a este usuario");
				correct = false;
			}
		}
     );

     if(!correct) return false;
     */

}

function recoveryPassword(){
    let email = document.getElementById("email").value;
    document.getElementById("pEmail").innerHTML = " ";

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        document.getElementById("pEmail").innerHTML = "invalid email format";
        alert("invalid email format");
        return false;
    }
    /** Siguiente Sprint
     var array = JSON.parse(users);
     var correct = false;
     array.some(
     user => {
			if(user.email == email){
				correct = true;
			}
		}
     )
     if(!correct){
		document.getElementById("pEmail").innerHTML = "error el email introducido no existe";
		return false;
	}
     */
    document.getElementById("pEmail").innerHTML = "le llegara un correo con los pasos a seguir";
    alert("le llegara un correo con los pasos a seguir");
    return true;
}

function edit(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let cpassword = document.getElementById("cpassword").value;

    if(username === "" && password === "" && cpassword === ""){
        alert("No se ha producido ningun cambio")
        return false
    }
    if(username !== "" && (username.length < 4 || username.length > 20)) {
        alert("Tamaño del nombre de usuario invalido, debe de tener entre 4 y 20 letras");
        return false;
    }
    if(password !== cpassword && (password !== "" || cpassword !== "")){
        alert("contraseña y confirmar contraseña deben ser iguales")
        return false
    }
	if((password.length < 8 || password.length > 20) && (password !== "" && cpassword !== "")) {
        alert("tamaño de contraseña invalido")
        return false;
    }
	if(!/^[A-Za-z0-9]{4,20}$/.test(username) && username !== ""){
		alert("invalid username 4-20 alphanumeric characters");
		return false;
	}
	if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/.test(password) && (password !== "" || cpassword !== "")){
		alert("Invalid password format at leat one uppercase, one number and one symbol");
		return false;
	}

	alert("Se ha modificado los datos del usuario")
	return false;
}

function pago(){
    let fname=document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let adr = document.getElementById("adr").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let cname=document.getElementById("cname").value;
    let ccnum=document.getElementById("ccnum").value;
    let expmonth=document.getElementById("expmonth").value;
    let expyear=document.getElementById("expyear").value;
    let cvv=document.getElementById("cvv").value;

    if(fname.length>3 && fname.length < 31 && adr.length > 3 && adr.length < 31){
        if(city.length > 3 && city.length < 31 && state.length===2 && zip.length===5){
            if(cname.length > 3 && cname.length < 30 && ccnum.length===16 && expyear.length===4){
                if(cvv.length===3 && expmonth.length>2 && expmonth.length<10){
                    if(!/^[A-Za-z ]{4,30}$/.test(fname)){
                        alert("Invalid name");
                        return false;
                    }
                    if(!/^[A-Za-z ]{4,30}$/.test(cname)){
                        alert("Invalid card name");
                        return false;
                    }
                    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                        alert("invalid email format");
                        return false;
                    }
                    if(!/^[a-zA-Z0-9]{4,60}$}$/.test(adr)){
                        alert("invalid address 4-60 alphanumeric characters");
                        return false;
                    }
                    if(!/^[a-zA-Z]{4,60}$}$/.test(city)){
                        alert("invalid city 4-60 letters");
                        return false;
                    }
                    if(!/^[0-9]{5}$/.test(zip)){
                        alert("invalid ZIP strict 5 numbers");
                        return false;
                    }
                    if(!/^[0-9]{3}$/.test(zip)){
                        alert("invalid CVV strict 3 numbers");
                        return false;
                    }
                    if(!/^[0-9]{16}$/.test(ccnum)){
                        alert("invalid card numb strict 16 numbers");
                        return false;
                    }
                    if(!/^[A-Z]{2}$/.test(state)){
                        alert("invalid state 2 Upercases");
                        return false;
                    }
                    let correct=false
                    let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "dicember"]
                    for(let i = 0; i < month.length; i++){
                        if(month[i]===expmonth){
                            correct=true;
                        }
                    }
                    if(!correct) return false
                }
                if(!/^2[0-9]2[1-9]$/.test(expyear)){
                    alert("invalid year");
                    return false;
                }
            }
        }
    }
}

function patternsOk(){
    //Invariables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let username;
    let birth;
    let country;
    let province;
    let phone;
    let zip
    //Dependientes del tamaño
    if(screen.width > 767) {
        username = document.getElementById("uname").value;
        birth = document.getElementById("birth").value;
        country = document.getElementById("country").value;
        province = document.getElementById("province").value;
        phone = document.getElementById("phone").value;
        zip = document.getElementById("zip").value;
    } else {
        username = document.getElementById("unamePhone").value;
        birth = document.getElementById("birthPhone").value;
        country = document.getElementById("countryPhone").value;
        province = document.getElementById("provincePhone").value;
        phone = document.getElementById("phonePhone").value;
        zip = document.getElementById("zipPhone").value;
    }

    if((new Date().getFullYear() - new Date(birth).getFullYear()) < 18){
        alert('You must had 18 years old at least');
        return false;
    }
    if(!/^[A-Za-z ]{4,30}$/.test(name)){
        alert("Invalid name");
        return false;
    }
    if(!/^[A-Za-z0-9]{4,20}$/.test(username)){
        alert("invalid username 4-20 alphanumeric characters");
        return false;
    }
    if(!/^[0-9]{5}$/.test(zip)){
        alert("invalid ZIP strict 5 numbers");
        return false;
    }
    if(!/^[a-zA-Z]{4,60}$/.test(country)){
        alert("Invalid country format");
        return false;
    }
    if(!/^[a-zA-Z]{1,100}$/.test(province)){
        alert("Invalid province format");
        return false;
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/.test(password)){
        alert("Invalid password format at least one uppercase, one lowercase, one number and one symbol");
        return false;
    }
    if(password!==cpassword){
        alert("confirm password must be equals to password")
        return false;
    }
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        alert("invalid email format");
        return false;
    }
    if(!/^[0-9]{9}$/.test(phone)){
        alert("invalid phone format strict 9 numbers");
        return false;
    }
    return true;
}


function goToLink(url) {
    window.location.assign(url);
}