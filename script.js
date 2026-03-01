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

// وظيفة لإظهار العناصر عند التمرير (Scroll)
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

// تشغيلها مرة عند التحميل عشان لو السيكشن باين أصلاً
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

// 3. تحديث شكل الزر والنص فقط
function updateUI(isDark) {
  if (isDark) {
    // لما يكون المود غامق، حط أيقونة الهلال اللي إنت اخترتها
    circle.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal" style="color: rgb(255, 255, 255);"></i>';
  } else {
    // لما يكون المود فاتح، رجع الشمس (أو أي أيقونة تانية)
    circle.innerHTML = '☀️'; 
  }
  
  toggle.setAttribute('aria-pressed', isDark);
}

  // 4. الأحداث (الضغط بالكيبورد أو الماوس)
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





const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeLightbox');
const images = document.querySelectorAll('.achievement-item img');

// فتح الصورة
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden'; // منع السكرول والشهادة مفتوحة
    });
});

// قفل الصورة عند الضغط على الـ X
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // منع تداخل الأحداث
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// قفل الصورة عند الضغط في أي مكان فاضي
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// كود تحريك سلايدر الشهادات
const slider = document.querySelector('.achievements-slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// زرار التالي
nextBtn.addEventListener('click', () => {
    // بيحرك السلايدر مسافة 330 بكسل (عرض الشهادة + الـ gap)
    slider.scrollBy({ left: 330, behavior: 'smooth' });
});

// زرار السابق
prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -330, behavior: 'smooth' });
});