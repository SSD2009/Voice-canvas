x=0;
y=0;
cir="";
rectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}

recognition.onresult=function(event){;
console.log(event);

content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="speech has been recognised as: "+content;

if(content=="circle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="circle is being drawn";
    cir="set";
}
if(content=="rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="rectangle is being drawn";
    rectangle="set";
  }
}

function setup(){
    createCanvas(900,600);
}

function draw(){
    if(cir=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        cir="";
    }
    if(rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        rectangle="";
    }
}