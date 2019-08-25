
function test(){
var x = document.getElementById("dd").value;
if(x>=8){
    // event.defaultPrevented();
document.getElementById("footer1").style.backgroundColor="green";}
else{
    document.getElementById("footer1").style.backgroundColor="red";}
}


var star=" star"

function test1(){
    var x = document.getElementById("ee").value;
    
    if(x==star){
        // event.defaultPrevented();
    document.getElementById("footer2").style.backgroundColor="green";}
    else{
        document.getElementById("footer2").style.backgroundColor="red";}
    }
function test3(){
        var x = document.getElementById("gg").value;
        
        if(x==5){
            // event.defaultPrevented();
        document.getElementById("footer4").style.backgroundColor="green";}
        else{
            document.getElementById("footer4").style.backgroundColor="red";}
        }
        function test2(){
            var x = document.getElementById("ff").value;
            
            if(x==8){
                // event.defaultPrevented();
            document.getElementById("footer3").style.backgroundColor="green";}
            else{
                document.getElementById("footer3").style.backgroundColor="red";}
            }
            
            var firebaseConfig = {
                apiKey: "AIzaSyDB2U7fpnb_1MbD9a9T1d-ImtBAE4hB0dk",
                authDomain: "hello-d8e58.firebaseapp.com",
                databaseURL: "https://hello-d8e58.firebaseio.com",
                projectId: "hello-d8e58",
                storageBucket: "",
                messagingSenderId: "174245474318",
                appId: "1:174245474318:web:f2a659c23a2ffa21"
            }
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('myDatabse');
function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    // var Level = document.getElementById('exampleFormControlSelect3').value;
    var message = document.getElementById('message').value;
    saveMessage(name,Email,message);
}
     document.getElementById('contact').addEventListener('submit',submitForm);
     function saveMessage(name, Email,message){
         var newMessageRef = messagesRef.push();
         newMessageRef.set({
             name: name,
             Email: Email,
             
             message: message
         })
     }

    // $("#map").hover(function(){$(".dot").show()},function(){$(".dot").hide()})
