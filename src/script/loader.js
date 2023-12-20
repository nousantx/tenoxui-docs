window.addEventListener("load", () => {
  const e = document.querySelector(".loader");
  e.classList.add("loader-hidden");
  e.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});
