  
      const titles= document.getElementsByClassName('hamburger')[0]
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      
   titles.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
      });