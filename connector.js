const buttons = document.querySelectorAll(".btn-div .btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((btn) => {
  btn.addEventListener("click", ()=>{
    const filter = btn.textContent.toLowerCase();

    cards.forEach((card) => {
      if (filter === "all") {
        card.classList.remove("hidden");
      } else {
        if (card.classList.contains(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });
  });
});
