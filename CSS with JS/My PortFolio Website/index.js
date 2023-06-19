        
// now we will use something like intersection observer

const observer=new IntersectionObserver((entries)=>{  // This class is new to Js,it handles multiple entries,we iterate to every entry so we use for Each loop
    entries.forEach((entry)=>{   // This function runs anytime the visibilty of any of the elements changes
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');   // If any intersection is happening,add thiws class called show
        }
        else{
            entry.target.classList.remove('show');  // if any intersection is not happening,then fucking remve it
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');

// Now we have the observer,we tell them what to observe

// we will loop over the hiddden elements and tell the observer to observe all the hidden elements

hiddenElements.forEach((e1)=> observer.observe(e1));   // here observe is the  keyword