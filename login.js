
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("button");
var form = document.getElementById("inputform");
var logpage = document.getElementById("logpage");

function signup(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
    form.style.height="650px";
    logpage.style.paddingTop="2%";
    logpage.style. transition=".8s";
    form.style. transition=".8s";
}

function signin(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
    form.style.width="380px";
    form.style.height="450px";
    logpage.style.paddingTop="10%";
    logpage.style. transition=".8s";
    form.style. transition=".8s";
}

var divs = new Array();
divs[0] = "errFirst";
divs[1] = "errLast";
divs[2] = "errEmail";
divs[3] = "errUid";
divs[4] = "errPassword";
divs[5] = "errConfirm";
function validate()
{
var inputs = new Array();
inputs[0] = document.getElementById('first').value;
inputs[1] = document.getElementById('last').value;
inputs[2] = document.getElementById('email').value;
inputs[3] = document.getElementById('uid').value;
inputs[4] = document.getElementById('password').value;
inputs[5] = document.getElementById('confirm').value;
var errors = new Array();
errors[0] = "<span style='color:red'>Please enter your first name!</span>";
errors[1] = "<span style='color:red'>Please enter your last name!</span>";
errors[2] = "<span style='color:red'>Please enter your email!</span>";
errors[3] = "<span style='color:red'>Please enter your user id!</span>";
errors[4] = "<span style='color:red'>Please enter your password!</span>";
errors[5] = "<span style='color:red'>Please confirm your password!</span>";
for (i in inputs)
{
var errMessage = errors[i];
var div = divs[i];
if (inputs[i] == "")
document.getElementById(div).innerHTML = errMessage;
else if (i==2)
{
var atpos=inputs[i].indexOf("@");
var dotpos=inputs[i].lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
else
document.getElementById(div).innerHTML = "OK!";
}
else if (i==5)
{
var first = document.getElementById('password').value;
var second = document.getElementById('confirm').value;
if (second != first)
document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
else
   document.getElementById(div).innerHTML = "OK!";
}
else
document.getElementById(div).innerHTML = "OK!";
}
}
const namefield = document.querySelector('#uid');
const passwordfield = document.querySelector('#password');
var loginusername;
var passwordmemory;
function getNameInfosFromLS(){
    if(localStorage.getItem('loginusername')==null){
        loginusername = [];
    }
    else{
        loginusername = JSON.parse(localStorage.getItem('loginusername'));
    }
    return loginusername;
}
function getPasswordInfosFromLS(){
    if(localStorage.getItem('passwordmemory')==null){
        passwordmemory = [];
    }
    else{
        passwordmemory = JSON.parse(localStorage.getItem('passwordmemory'));
       
    }
    return passwordmemory;
}
function setInfosToLS(){
    loginusername = getNameInfosFromLS();
    passwordmemory = getPasswordInfosFromLS();
    passwordmemory.push(passwordfield.value);
    loginusername.push(namefield.value);
    localStorage.setItem('loginusername',JSON.stringify(loginusername));
    localStorage.setItem('passwordmemory',JSON.stringify(passwordmemory));
}
function finalValidate()
{
var count = 0;
for(i=0;i<6;i++)
{
var div = divs[i];
if(document.getElementById(div).innerHTML == "OK!")
count = count + 1;
}
if(count == 6)
window.alert("All informations are true. You sign-up Correctly");
setInfosToLS();
}

var errordivs = new Array();
errordivs[0] = "errusername";
errordivs[1] = "errvalidation";
function loginvalidate(){
var loginerrors = new Array();
loginerrors[0] = "<span style='color:red'>Please enter your  username!</span>";
loginerrors[1] = "<span style='color:red'>Please enter your password!</span>";
var logininputs = new Array();
logininputs[0] = document.getElementById('loginname').value;
logininputs[1] = document.getElementById('loginpassword').value;
for (i in logininputs)
{
var errorcode = loginerrors[i];
var errordiv = errordivs[i];
if (logininputs[i] == ""){
document.getElementById(errordiv).innerHTML = errorcode;
return false;
}}
return true;
}
loginusername = getNameInfosFromLS();
passwordmemory = getPasswordInfosFromLS();
var check;
function finalloginvalidate(){
    var logininputs = new Array();
    logininputs[0] = document.getElementById('loginname').value;
    logininputs[1] = document.getElementById('loginpassword').value;
    for(var p=0;p<loginusername.length;p++){
    if(logininputs[0]==loginusername[p] && logininputs[1]==passwordmemory[p]){
        check = true;
        return check;
    }
}
window.alert("Your Username Or Password is Wrong");
check = false;
return check; 
}
console.log(loginusername);
console.log(passwordmemory);
var logbtn = document.getElementById('golibrary');
logbtn.addEventListener('click',function(e){
    if(check && loginvalidate()){
        //go library
    }
    else{
        e.preventDefault();
    }},false);
