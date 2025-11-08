// main.js - small interactivity for both pages
document.addEventListener('DOMContentLoaded', function(){
  // left bar highlight
  document.querySelectorAll('.lb-item').forEach(item=>{
    item.addEventListener('click', ()=> {
      document.querySelectorAll('.lb-item').forEach(i=>i.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)');
      item.style.boxShadow = '0 8px 18px rgba(0,0,0,0.28)';
    });
  });

  // smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // hero subtle effect
  const hero = document.querySelector('.hero');
  if(hero){
    window.addEventListener('scroll', ()=> {
      const s = Math.min(1, Math.max(0, 1 - (window.scrollY / 600)));
      hero.style.opacity = 0.95 + (s*0.05);
    });
  }
});
