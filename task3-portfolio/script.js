// Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '20px';
    navLinks.style.background = '#12142c';
    navLinks.style.border = '1px solid rgba(242,166,198,0.18)';
    navLinks.style.borderRadius = '14px';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '16px';
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollY >= top) current = sec.getAttribute('id');
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  // Typing effect for role text
  const roles = ["Computer Science Student", "Web Developer", "Frontend developer"];
  const roleEl = document.getElementById('roleText');
  let r = 0, c = 0, deleting = false;
  function typeLoop(){
    const word = roles[r];
    if(!deleting){
      roleEl.textContent = word.slice(0, c+1);
      c++;
      if(c === word.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      roleEl.textContent = word.slice(0, c-1);
      c--;
      if(c === 0){ deleting = false; r = (r+1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 45 : 90);
  }
  typeLoop();

  // Scroll reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('show'); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));