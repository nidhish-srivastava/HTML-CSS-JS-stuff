const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// document.querySelector("h1").onmouseover = event =>{
document.getElementById("hacker").onmouseover = event =>{

    // We dont want it run forever

    let iterations = 0

const interval =  setInterval(()=>{

    
    

    // event.target.innerText = letters[Math.floor(Math.random()*26)]
    // giving random letters to all,first split it,change it dynamically using the map method, then join them
    // Putting all this inside setInterval
    event.target.innerText = event.target.innerText.split("")

    
    .map((letter,index)=>{ 
        //if(index<1){  // In this case,it will retain the first letter,we need this till the end
           if(index<iterations){
            return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random()*26)]}).join("")
    
    // if(iterations >=9) clearInterval(interval)
    if(iterations>=event.target.dataset.value.length){   // setting  it to the max word count of the input letter
        clearInterval(interval)
    }
    iterations += 1/3  // 1 iteration per letter is nice,but perhaps two or three will look more cool


},30)
}