function greetUser(name,callback){
   console.log("Hello" + name);
   callback(); 
}
function endmsg(){
    console.log("Welcome to the Course!");
}
greetUser("vanshika",endmsg);