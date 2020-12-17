// JavaScript Document
//Validation function for contact form
function validate(){
	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail").value;
	var message = document.getElementById("message").value;
	var errorMsg = document.getElementById("errorMsg");
	var text;
	
	
	errorMsg.style.padding = "20px";
	
	
	if(name.length < 2){
		text = "Please enter your name";
		errorMsg.innerHTML = text;
		return false;
	}
	if(mail.indexOf("@") == -1 || mail.length < 6){
		text = "Please a valid email";
		errorMsg.innerHTML = text;
		return false;
	}
	if(message.length < 140){
		text = "Please enter your message (more than 140 chars)";
		errorMsg.innerHTML = text;
		return false;
	}
	
	alert("We will get in touch with you as soon as possible")
	return true;
}