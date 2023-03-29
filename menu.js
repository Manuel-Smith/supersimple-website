(() => {
  let menuIcon = document.getElementById("menu-item");
  let dropDownMenu = document.querySelector(".menu");
  let menuBars = [...document.querySelector(".menu-item").children];
  let tabButtons = [...document.querySelectorAll(".tab-buttons")];
  console.log(tabButtons);

  let menuClicked = false;
  let timeDisplay = 200;

  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      location.href = "#";
    });
  });
  menuIcon.addEventListener("click", (e) => {
    if (menuClicked) {
      menuClicked = false;

      setTimeout(() => {
        dropDownMenu.style.display = "none";
        menuIcon.style.gap = "0.3rem";
        menuBars[0].style.transform = "rotate(0deg)";
        menuBars[2].style.transform = "rotate(0deg)";
        menuBars[2].style.position = "static";
        menuBars[1].style.display = "block";
        menuBars[1].style.bottom = "0px";
        menuIcon.style.transition = "ease-out 300ms";
      }, timeDisplay);
    } else {
      menuClicked = true;
      setTimeout(() => {
        dropDownMenu.style.display = "block";
        menuIcon.style.gap = "0rem";
        menuBars[0].style.transform = "rotate(45deg)";
        menuBars[2].style.transform = "rotate(-45deg)";
        menuBars[2].style.position = "relative";
        menuBars[2].style.bottom = "3px";
        menuBars[1].style.display = "none";
        menuIcon.style.transition = "ease-out 0ms";
      }, timeDisplay);
    }
  });
})();
