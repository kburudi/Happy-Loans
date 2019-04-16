let loginBtn = document.querySelector(".login");
let loginLightBox = document.querySelector("section.light-box.login-ltb");
let hideLbt = document.querySelector(".hide-light-box");
loginBtn.addEventListener("click", e => {
  e.preventDefault();
  loginLightBox.classList.toggle("hidden");
  loginLightBox.classList.toggle("active");
});

hideLbt.addEventListener("click", e => {
  e.preventDefault();
  loginLightBox.classList.add("hidden");
  loginLightBox.classList.remove("active");
});

document.addEventListener("click", e => {
  e.preventDefault();
  if (
    e.target.tagName === "SECTION" &&
    e.target.classList.contains("light-box")
  ) {
    e.target.classList.remove("active");
    e.target.classList.add("hidden");
  }
});
