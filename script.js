
product.addEventListener("click", () => {
  const name = product.dataset.name;

  detailName.textContent = name;
  detailImg.src = product.querySelector("img").src;

  const waNumber = "6285290816600"; 
  const message = `Halo kak, aku mau order ${name}`;
  const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  document.getElementById("waLink").href = waURL;

  detailPopup.style.display = "flex";
});
