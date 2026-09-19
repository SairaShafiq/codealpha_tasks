
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightboxCounter=document.getElementById('lightboxCounter');


let currentIndex = 0;
let currentImages = []; 


galleryImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImages = getVisibleImages();
    currentIndex = currentImages.indexOf(img);
    showImage(currentIndex);
    lightbox.classList.add('active');
    
  });
});


function getVisibleImages() {
  return Array.from(galleryImgs).filter(img => img.style.display !== 'none');
}


function showImage(index) {
  lightboxImg.src = currentImages[index].src;
  lightboxCounter.textContent=`${index + 1} / ${currentImages.length}`;
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
  
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
  
});


document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'Escape') lightbox.classList.remove('active');
});


filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
  
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryImgs.forEach(img => {
      if (filter === 'all' || img.dataset.category === filter) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});