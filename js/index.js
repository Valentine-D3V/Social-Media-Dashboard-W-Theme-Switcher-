const themeSwitch = document.getElementById("toggle");
const userSelection = document.querySelector("#theme-selection");

if (themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener("change", function (event) {
    resetTheme(); // update color theme
  });

  function initTheme() {
    const darkThemeSelected =
      localStorage.getItem("themeSwitch") !== null &&
      localStorage.getItem("themeSwitch") === "dark";
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("themeSwitch", "dark"); // save theme selection
      userSelection.textContent = `Light Mode`;
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("themeSwitch"); // reset theme selection
      userSelection.textContent = `Dark Mode`;
    }
  }
}
