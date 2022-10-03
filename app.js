let squares = document.querySelectorAll(".square");
let time_left=document.querySelector("#time-left");
let score=document.querySelector("#score");
let mole=document.querySelector(".mole");
let start_btn=document.querySelector('button');
let randomsq=null;
let result=0;
let time_id=null;
let cur=0;
let x=60;

start_btn.addEventListener('click',e=>{
    x=document.getElementById("set_time").value;

    movemole();
});
function randomsquare(){
    cur++;
     let y=x-cur;
    time_left.innerHTML=y;
    if(y==0){
        clearInterval(time_id);
        score.innerHTML="Game over";
    }
    squares.forEach(square => {
        square.classList.remove('mole');
    });
     randomsq=squares[parseInt(Math.random()*1000)%9];
    randomsq.classList.add("mole");
     
}

 function movemole(){
     
    time_id=setInterval(randomsquare,1000);
    
 }

 squares.forEach(s=>s.addEventListener('click',(e)=>{
if(randomsq.id==e.target.id){
    result++;
    score.innerHTML=result;
}


 }));
