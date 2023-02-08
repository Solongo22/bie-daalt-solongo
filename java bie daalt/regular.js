class user{
    constructor (firstname, email, subject, text){
        (this.firstname=firstname),
        (this.email=email),
        (this.subject=subject),
        (this.text=text);
    }
}

const firstname=document.querySelector('.firstname');
const email= document.querySelector('.email');
const subject= document.querySelector('.garchig');
const text =document.querySelector('.text');
 const btn= document.querySelector('.alert');

 const signup_error=document.querySelector('.signup_error');

 firstname.addEventListener('textInput', fstnameVerify);
 email.addEventListener('textInput', emailVerify);
 subject.addEventListener('textInput', subVerify);
 text.addEventListener('textInput', textVerify);

 function signupVerify(){
    if(!firstname.value.match(/^[A-Z]/)){
        signup_error.style.display ='block';
        firstname.style.border='1px solid red';
        signup_error.innerText= 'Neree tom usgeer ehluulen bichne uu';
        firstname.focus();
        return false;
    }
    if(!email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
        signup_error.style.display ='block';
        email.style.border='1px solid red';
        signup_error.innerText= 'Zub emailee bichne uu';
        email.focus();
        return false;
    }
    if(subject.value.length<=5){
        signup_error.style.display ='block';
        subject.style.border='1px solid red';
        signup_error.innerText= '5-aas olon temdegt bichne uu';
        subject.focus();
        return false;
    }
    if(text.value.length<=10){
        signup_error.style.display ='block';
        text.style.border='1px solid red';
        signup_error.innerText= '20-ios olon temdegt bichne uu';
        text.focus();
        return false;

    }else{
        Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your email sent successfully',
    showConfirmButton: false,
    timer: 1500,
    color: 'green', 
    
    
    });
    }
 };

 function fstnameVerify(){
    if (firstname.value.match(/^[A-Z]/)) {
		signup_error.style.display = "none";
		firstname.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
 };

 function emailVerify(){
    if (email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
		signup_error.style.display = "none";
		email.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
 };
 function subVerify(){
    if (subject.value.length>5) {
		signup_error.style.display = "none";
		subject.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
 };

 function textVerify(){
    if (text.value.length>10) {
		signup_error.style.display = "none";
		text.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
 };

 btn.addEventListener('click', signupVerify);



// submit.addEventListener('click', ()=>{
//     // location.href='/.stop.html'
//      Swal.fire({
//   position: 'center',
//   icon: 'success',
//   title: 'Your email sent successfully',
//   showConfirmButton: false,
//   timer: 1500,
//   color: 'green', 
 
  
// });
// });

