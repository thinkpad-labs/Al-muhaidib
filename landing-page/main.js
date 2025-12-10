const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  // Toggle the hidden class to show/hide the menu
  mobileMenu.classList.toggle("hidden");
  // Toggle flex to ensure it displays correctly when visible
  mobileMenu.classList.toggle("flex");
});

const branches = document.getElementById("branches");
const why = document.getElementById("why");
const branchesItem1 = document.getElementById("branch-item-1");
const branchesItem2 = document.getElementById("branch-item-2");
const branchesItem3 = document.getElementById("branch-item-3");
const branchesItem4 = document.getElementById("branch-item-4");
const branchesItem5 = document.getElementById("branch-item-5");
const whyItem1 = document.getElementById("why-item-1");
const whyItem2 = document.getElementById("why-item-2");
const whyItem3 = document.getElementById("why-item-3");

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    const target = entry.target;

    if (entry.isIntersecting) {
      target.classList.add("fade-in-element-slow");
    }
  });
};

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(branches);
observer.observe(why);
observer.observe(branchesItem1);
observer.observe(branchesItem2);
observer.observe(branchesItem3);
observer.observe(branchesItem4);
observer.observe(branchesItem5);
observer.observe(whyItem1);
observer.observe(whyItem2);
observer.observe(whyItem3);
