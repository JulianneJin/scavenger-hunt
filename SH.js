setTimeout(function(){alert("are your still watching or you are playing video games :D");  }, 300000);
let score=0;

function pavillion(){
  remind.innerHTML="my 7th grade's favorite place :D";
  score=score+1;
}
function photo (){
  if (score==1){
    remind.innerHTML="this is my memory for 8th grade";
    score=score+1;
  }else{
    remind.innerHTML="not so fast~";
  }
  
}
function books (){
  remind.innerHTML="I don't like to read";
}

function drawer (){
  remind.innerHTML="it is empty";
}

function laptop(){
  if (score==2){
  remind.innerHTML="U win! I used it for everything during online learning during 9th grade";
  }else{
  remind.innerHTML="not so fast~";
  }
 
}


function plant (){
  remind.innerHTML="just a normal plant";
}

function phone(){
  remind.innerHTML="i like my phone but it is not the answer";
}