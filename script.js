document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement; // change from body to html

//   // Load theme from localStorage
//   if (localStorage.getItem("theme") === "dark") {
//     html.classList.add("dark");
//     toggleBtn.innerText = "☀️ Light Mode";
//   }

  toggleBtn.addEventListener("click", function () {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      toggleBtn.innerText = "☀️ Light Mode";
    //   localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.innerText = "🌙 Dark Mode";
    //   localStorage.setItem("theme", "light");
    }
  });
});
