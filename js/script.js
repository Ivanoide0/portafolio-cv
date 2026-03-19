// BARRAS
const bars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;

  bars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;

    if (top < trigger && !bar.classList.contains('active')) {
      bar.style.width = bar.getAttribute('data-width');
      bar.classList.add('active');
    }
  });

  // CÍRCULOS
  const circles = document.querySelectorAll('.progress-circle');

  circles.forEach(circle => {
    const top = circle.getBoundingClientRect().top;

    if (top < trigger && !circle.classList.contains('active')) {

      const percent = circle.getAttribute('data-percent');
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      const offset = circumference - (percent / 100) * circumference;

      circle.style.strokeDashoffset = offset;
      circle.classList.add('active');
    }
  });
});

// REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('active');
    }
  });
});


// WHY CARDS ANIMATION
const whyCards = document.querySelectorAll('.why-card');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  whyCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      setTimeout(() => {
        card.classList.add('active');
      }, index * 200); // 🔥 animación en cascada
    }
  });
});

const cards = document.querySelectorAll('.why-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  });
});


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});