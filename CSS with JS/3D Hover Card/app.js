const card=document.querySelector('.card');
const container=document.querySelector('.container');



// const title = document.querySelector(".title");
// const sneaker = document.querySelector(".sneaker img");
// const purchase = document.querySelector(".purchase");
// const description = document.querySelector(".info h3");
// const size = document.querySelector(".size");


// Moving Animation

container.addEventListener('mousemove',(e)=>{  // e.pageX will tell the X coordinate of the cursor
    let xAxis=(window.innerWidth/2-e.pageX)/10;   // here dividing by 2,we are at the center of the window
    let yAxis=(window.innerHeight/2-e.pageY)/10;   // NOTE--> If we dont divide it by any value,the rotation will be very danger and at high level

    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});



container.addEventListener('mouseleave',(e)=>{
   card.style.transform=`rotateY(0deg) rotateX(0deg)`;
   // But i want this change to be smooth(if we use transition in css,then )
   card.style.transition="all 0.2s ease";  // when i move out it applies
  // Popout animation(but this shit aint working bro)
//    title.style.transform="translateZ(0px)";
});

container.addEventListener('mouseenter',(e)=>{
    card.style.transition="0.2 ease";  // when i enter i need no animation for movement,already rotation is happening

    //Popout animation
    // title.style.transform="translateZ(100px)";
});



