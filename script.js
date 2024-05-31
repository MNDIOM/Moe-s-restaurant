
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const modal = document.getElementById('menuModal');
  const btn = document.getElementById('fullMenuBtn');
  const span = document.getElementsByClassName('close')[0];
  
  btn.onclick = function() {
    modal.style.display = 'block';
  }
  
  span.onclick = function() {
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  