const slides = document.querySelectorAll('.slide');
const progressFill = document.getElementById('progressFill');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function updateSlide() {
  slides.forEach((slide, index) => slide.classList.toggle('active', index === currentSlide));
  progressFill.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  pageIndicator.textContent = `第 ${currentSlide + 1} / ${slides.length} 頁（支援鍵盤 ← → 切換）`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

function changeSlide(direction) {
  const next = currentSlide + direction;
  if (next >= 0 && next < slides.length) {
    currentSlide = next;
    updateSlide();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') changeSlide(1);
  else if (e.key === 'ArrowLeft') changeSlide(-1);
});

updateSlide();
