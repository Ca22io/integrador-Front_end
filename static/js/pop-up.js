// Função para abrir o pop-up
function openPopup(title, image, price, ingredients) {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");

  overlay.style.display = "block";
  popup.style.display = "block";

  const popupTitle = document.getElementById("popupTitle");
  const popupImage = document.getElementById("popupImage");
  const popupPrice = document.getElementById("popupPrice");
  const popupIngredients = document.getElementById("popupIngredients");

  popupTitle.textContent = title;
  popupImage.src = image;
  popupPrice.textContent = `Valor: R$ ${price}`;
  popupIngredients.textContent = `Recheio: ${ingredients}`;
}

// Função para fechar o pop-up e overlay
function closePopup() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");

  overlay.style.display = "none";
  popup.style.display = "none";
}

// Função para adicionar os eventos de clique no elemento pai "painel"
const painel = document.getElementById("painel");

painel.addEventListener("click", function(event) {
  const target = event.target;
  
  // Verifica se o elemento clicado é um botão "openPopup"
  if (target.classList.contains("openPopup")) {
    const title = target.getAttribute("data-title");
    const image = target.getAttribute("data-image");
    const price = target.getAttribute("data-price");
    const ingredients = target.getAttribute("data-ingredients");
    openPopup(title, image, price, ingredients);
  }
  
  // Verifica se o elemento clicado é o botão "Fechar" (X)
  if (target.id === "closePopup") {
    closePopup();
  }
  
  // Lógica para adicionar aos favoritos
  if (target.id === "addToFavorites") {
    closePopup();
  }
  
  // Lógica para adicionar à cesta de compras
  if (target.id === "addToCart") {
    closePopup();
  }
});

// pop-up entrar em contato
const contatoButton = document.getElementById("contato");
const popup = document.getElementById("popup-c");
const closePopupButton = document.getElementById("close-popup-c");
const overlay = document.getElementById("overlay");
const enviar = document.getElementById("enviar");


contatoButton.addEventListener("click", function() {
  
  overlay.style.display = "block";
  popup.style.display = "block";

  
});

closePopupButton.addEventListener("click", function() {
  overlay.style.display = "none";
  popup.style.display = "none";
});

// Fecha o pop-up após clicar em enviar
enviar.addEventListener("click", function() {
  overlay.style.display = "none";
  popup.style.display = "none";
});