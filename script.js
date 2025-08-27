
  body.addEventListener('scroll', function(){
    const navbar = document.getElementById('scrollNav');
    const navTexts = document.querySelectorAll('.nav-text');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    if (window.scrollY>10) {
      // Scrolled state - white background with black text
      navbar.style.backgroundColor = '#fff';
      navbar.style.borderBottom = '1px solid #e0e0e0';
      
      // Change all text elements to black
      navTexts.forEach(element => {
        element.style.color='red';
      });
      
      // Change social icons to black
      socialIcons.forEach(icon => {
        icon.style.color='#000';
      });
      
      // Change toggler icon color
      document.querySelector('.navbar-toggler').style.borderColor = '#000';
      document.querySelector('.navbar-toggler-icon').style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
    } else {
      // Top of page - transparent with white text
      navbar.style.backgroundColor = '#fff';
      navbar.style.borderBottom = '1px solid rgb(167, 165, 165)';
      
      // Change all text elements back to white
      navTexts.forEach(element => {
        element.style.color = '#fff';
      });
      
      // Change social icons back to white
      socialIcons.forEach(icon => {
        icon.style.color = '#000';
      });
      
      // Change toggler icon back to white
      document.querySelector('.navbar-toggler').style.borderColor = 'rgba(255,255,255,0.5)';
      document.querySelector('.navbar-toggler-icon').style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
    }
  });

  // navcode
 


// 