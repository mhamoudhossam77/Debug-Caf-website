document.addEventListener("DOMContentLoaded", () => {
     const navLinks = document.querySelectorAll(".nav-menu a");
  
     navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();  
  
         const targetId = link.getAttribute("href").substring(1);  
        const targetSection = document.getElementById(targetId);
   
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,  
            behavior: "smooth",  
          });
  
           targetSection.style.transition = "background-color 0.5s ease-in-out";
          targetSection.style.backgroundColor = "#f7e7d0";
  
           setTimeout(() => {
            targetSection.style.backgroundColor = "transparent";
          }, 1000);
        }
      });
    });
  });


  function openPage_Drinks() {
    window.location.href = "productcard.html"; 
  }

  
  function openPage_Breakfast() {
    window.location.href = "BreakfastCard.html"; 
  }

    
  function openPage_Dessert() {
    window.location.href = "DessertCard.html"; 
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".page").classList.add("show");
});

gsap.from(".page", { duration: 1, x: -100, opacity: 0 });

  