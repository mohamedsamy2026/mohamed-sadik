// بتاع الناف بار يبدأ

const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});

// دي عشان تقفل  المنيو
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    bars.classList.add("active");
    xmark.classList.remove("active");
  });
});

// بتاع الناف بار ينتهي





/* About Start */

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


reveal();

/* About End */





// ==========================================
// الوضع الليلي/النهاري مع تغيير اللوجو يبدأ
// ==========================================


(function() {
  const KEY = 'mode';
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const circle = document.getElementById('circle');

  // 1. استرجاع الوضع المحفوظ أو استخدام الفاتح كافتراضي
  const savedMode = localStorage.getItem(KEY) || 'light-mode';
  body.classList.add(savedMode);
  updateUI(savedMode === 'dark-mode');

  // 2. وظيفة التبديل
  function toggleMode() {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);
    
    localStorage.setItem(KEY, isDark ? 'dark-mode' : 'light-mode');
    updateUI(isDark);
  }

function updateUI(isDark) {
  if (isDark) {
    circle.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal" style="color: rgb(255, 255, 255);"></i>';
  } else {
    circle.innerHTML = '☀️'; 
  }
  
  toggle.setAttribute('aria-pressed', isDark);
}

  toggle.addEventListener('click', toggleMode);
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMode();
    }
  });
})();


// ==========================================
//  الوضع الليلي/النهاري مع تغيير اللوجو انتهي
// ==========================================






// بتاع سيشكن الشهادات يبدأ

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeLightbox');
const images = document.querySelectorAll('.achievement-item img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden'; 
    });
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        scrollCertificates(1); 
    });

    prevBtn.addEventListener('click', () => {
        scrollCertificates(-1); 
    });
}

function scrollCertificates(direction) {
    const container = document.querySelector('.achievements-slider') || document.querySelector('.certificates-container');
    const card = container.querySelector('.achievement-item');
    
    if (container && card) {
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap) || parseInt(style.columnGap) || 0;
        
        const scrollAmount = card.offsetWidth + gap;
        
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// بتاع سيشكن الشهادات ينتهي




// loding body start

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    loadingScreen.classList.add('fade-out');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// loding body End
