setTimeout(function(){alert("are your still watching or you are playing video games :D");  }, 300000);
let score=0;

function pavillion(){
  remind.innerHTML="my 7th grade's favorite place :D";
  score=score+1;
  prompt("my 7th grade's favorite place :D");
}
function photo (){
  if (score==1){
    remind.text="this is my memory for 8th grade";
    score=score+1;
  prompt("this is my memory for 8th grade");
  }else{
    remind.text="not so fast~";
  }
  
}
function books (){
  remind.text="I don't like to read";
  prompt("I don't like to read");
}

function drawer (){
  remind.text="it is empty";
  prompt("it is empty");
}

function laptop(){
  if (score==2){
  remind.text="I used it for everything during online learning during 9th grade";
  prompt("I used it for everything during online learning during 9th grade");
  }else{
  remind.text="not so fast~";
  prompt("not so fast~");
  }
 
}


function plant (){
  remind.text="just a normal plant";
  prompt("just a normal plant");
}

function phone(){
  remind.innerHTML="i like my phone but it is not the answer";
  prompt("i like my phone but it is not the answer");
}