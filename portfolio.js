
const switchPage = (newPage) => {
    // hide all pages 
   const pages = document.querySelectorAll(".page");
   pages.forEach((page) => {
    page.style.display = "none";
   });
   const currentPage = document.querySelector(`.${newPage}`);

   !currentPage.classList.contains("home")
   ? ((document.querySelector("nav").style.backgroundColor = "#fff"),document.querySelectorAll("nav li").forEach((li) => {
    li.style.color = "#555";
    }))
  : ((document.querySelector("nav").style.backgroundColor = "transparent"),
  document.querySelectorAll("nav li").forEach((li) =>  {
    li.style.color = "#fff";
  }),
  (document.querySelector("video").src = "./assets/pentagons.mov"));

  
//   show the page that is active 
currentPage.style.display = "flex";

// remove the active class from all nav links 
document.querySelectorAll("nav li").forEach((li) => {
    li.classList.remove("active");
});

// add the active class to the nav link that corresponds to the page
document.querySelector(`nav li[data-page="${newPage}"]`)
.classList.add("active");
// change the html document title 
const pageTitle = `${newPage.charAt(0).toUpperCase()}${newPage.slice(1)}`;
document.title = `My Portfolio | ${pageTitle}`;
};

document.addEventListener("DOMContentLoaded", () => {
    // set the home page as the default page 
    switchPage("home");


    // add logic for toggling the menu 
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".menu-btn");
    menuToggle.onclick = () => {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    };

    // hide the menu on bigger screen
    window.onresize = () => {
        if (window.innerHeight > 768) {
            menu.style.display = "none"
        }
    }

    const hireMe = document.querySelector(".hire-me");
    hireMe.onclick = () => switchPage("contact");

    document.querySelectorAll("nav li").forEach((li) => {
        li.onclick = (e) => {
            const page = e.target.dataset.page; 
            switchPage(page);
        };
        });
});