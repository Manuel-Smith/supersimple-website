(() => {
  let tabButtons = [...document.querySelectorAll(".tab-buttons")];
  let resources = [...document.querySelectorAll("main .tab-div > div")];
  let trackerItem = document.querySelector("main .resource-tracker");

  tabButtons[0].addEventListener("click", () => {
    trackerItem.style.left = `${0*33}`;
    // Conditions for toggling button one
    tabButtons[0].classList.add("active");
    tabButtons[1].classList.remove("active");
    tabButtons[2].classList.remove("active");

    //Conditions for toggling hero section objects one
    resources[0].classList.add("active");
    resources[1].classList.remove("active");
    resources[2].classList.remove("active");
  });

  tabButtons[1].addEventListener("click", () => {
    trackerItem.style.left = "33%";
    // Conditions for toggling button two
    tabButtons[1].classList.add("active");
    tabButtons[0].classList.remove("active");
    tabButtons[2].classList.remove("active");

    //Conditions for toggling hero section objects one
    resources[1].classList.add("active");
    resources[0].classList.remove("active");
    resources[2].classList.remove("active");
  });
  tabButtons[2].addEventListener("click", () => {
    trackerItem.style.left = "66%";
    // Conditions for toggling button one
    tabButtons[2].classList.add("active");
    tabButtons[0].classList.remove("active");
    tabButtons[1].classList.remove("active");

    //Conditions for toggling hero section objects one
    resources[2].classList.add("active");
    resources[0].classList.remove("active");
    resources[1].classList.remove("active");
  });
})();
