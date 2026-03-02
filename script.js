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





// بتاع سيشكن الشهادات يبدأ

// --- 1. كود تكبير الصور (Lightbox) ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeLightbox');
const images = document.querySelectorAll('.achievement-item img');

// فتح الصورة عند الضغط عليها
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden'; // منع سكرول الصفحة واللايت بوكس مفتوح
    });
});

// قفل الصورة عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// قفل الصورة عند الضغط في أي مكان خارج الصورة
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


// --- 2. كود السلايدر (تحريك الشهادات والفيديوهات) ---
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// ربط الأزرار بـ الفانكشن اللي بتقلص الشهادات واحدة واحدة
if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        scrollCertificates(1); // تحريك للامام
    });

    prevBtn.addEventListener('click', () => {
        scrollCertificates(-1); // تحريك للخلف
    });
}

function scrollCertificates(direction) {
    // تأكد إن الكلاس ده هو اللي شايل الكروت (السلايدر نفسه)
    const container = document.querySelector('.achievements-slider') || document.querySelector('.certificates-container');
    const card = container.querySelector('.achievement-item');
    
    if (container && card) {
        // حساب عرض الكارت + المسافة (Gap) اللي بين الكروت عشان القفزة تيجي "مسطرة"
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap) || parseInt(style.columnGap) || 0;
        
        // القيمة اللي هيتحركها السكرول = عرض الكارت + الفراغ اللي جنبه
        const scrollAmount = card.offsetWidth + gap;
        
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// بتاع سيشكن الشهادات ينتهي


// بتاع سيشكن الفديوهات يبدأ


// بتاع سيشكن فديوهات ينتهي




window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // إضافة كلاس الـ fade-out لبدء حركة الإخفاء الناعمة
    loadingScreen.classList.add('fade-out');
    
    // إزالة العنصر تماماً من الـ DOM بعد انتهاء الحركة (0.5 ثانية)
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});