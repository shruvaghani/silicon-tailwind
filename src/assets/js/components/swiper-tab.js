import Swiper from 'swiper/bundle';


document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".content-swiper");
  const tabs = document.querySelectorAll(".swiper-tab");

  if (!swiperEl || !tabs.length) return;

  const swiper = new Swiper(swiperEl, {
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: "#prev-screen",
      nextEl: "#next-screen",
    },
    on: {
      slideChangeTransitionStart() {
        const realIndex = this.realIndex;
        tabs.forEach((tab, index) => {
          tab.classList.toggle("hidden", index !== realIndex);
          tab.classList.toggle("active", index === realIndex);
        });
      },
    },
  });

  // ✅ Initial tab sync
  tabs.forEach((tab, index) => {
    tab.classList.toggle("hidden", index !== swiper.realIndex);
    tab.classList.toggle("active", index === swiper.realIndex);
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize Swiper from the data-swiper-options attribute
//     const sliderEl = document.querySelector(".mobile-app-slider");
//     const options = JSON.parse(sliderEl.getAttribute("data-swiper-options"));

//     const swiper = new Swiper(sliderEl, {
//         ...options,
//         on: {
//             slideChange: function () {
//                 // Get the current active slide
//                 const activeSlide = this.slides[this.activeIndex];
//                 const targetTab = activeSlide.getAttribute("data-swiper-tab");

//                 // Hide all tabs
//                 document.querySelectorAll(".swiper-tab").forEach(tab => {
//                     tab.classList.add("hidden");
//                     tab.classList.remove("active");
//                 });

//                 // Show the matching tab
//                 const matchingTab = document.querySelector(targetTab);
//                 if (matchingTab) {
//                     matchingTab.classList.remove("hidden");
//                     matchingTab.classList.add("active");
//                 }
//             }
//         }
//     });

//     // Optional: Sync tabs when clicking a slide directly
//     document.querySelectorAll(".swiper-slide").forEach(slide => {
//         slide.addEventListener("click", () => {
//             const targetTab = slide.getAttribute("data-swiper-tab");

//             document.querySelectorAll(".swiper-tab").forEach(tab => {
//                 tab.classList.add("hidden");
//                 tab.classList.remove("active");
//             });

//             const matchingTab = document.querySelector(targetTab);
//             if (matchingTab) {
//                 matchingTab.classList.remove("hidden");
//                 matchingTab.classList.add("active");
//             }
//         });
//     });
// });


