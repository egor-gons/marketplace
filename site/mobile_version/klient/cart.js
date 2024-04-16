function changeColorAndText(button) {
    if (button.classList.contains("red-button")) {
      button.classList.remove("red-button");
      button.classList.add("blue-button");
      button.textContent = "В корзине";
    } else {
      button.classList.remove("blue-button");
      button.classList.add("red-button");
      button.textContent = "В корзину";
    }
  }