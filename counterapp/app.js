let count=0;
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const counter=document.getElementById("counter");
function display(){
    counter.textContent=count;
}
if(count>0){
    counter.style.color="#00ff99";
}
else if(count=0){
    counter.style.color="#ff4d4d"   
}
else{
    counter.style.color="yellow"
}
decrease.addEventListener("click" , ()=>{
    count--;
    display();
});
increase.addEventListener("click" , ()=>{
    count++;
    display();
});
reset.addEventListener("click" , ()=>{
    count=0;
    display();
});





