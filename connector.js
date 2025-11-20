const buttons = document.querySelectorAll(".btn-div .btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
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

// DETAILS MODAL
const detailsButton = document.querySelectorAll(".details-btn");
const detailsModal = document.getElementById("detailsModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDes = document.getElementById("modalDes");

detailsButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const src = card.querySelector("img").src;

    //  add to modal
    modalImage.src = src;
    modalTitle.textContent = "Image Details";
    modalDes.textContent = "This is a beautiful image from the gallery.";

    // call detailsModal 
    detailsModal.showModal();
  });
});
