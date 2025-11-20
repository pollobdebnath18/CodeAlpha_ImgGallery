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
    let title = "";
    let des = "";
    if (card.classList.contains("nature")) {
      title = `This is nature’s beauty captured in a moment.Feel the beauty of nature.`;
      des = ` Nature’s beauty surrounds us, filling every corner with calm and peaceful energy.
      The trees, rivers, and skies whisper stories of life and endless wonder`;
    }
     else if (card.classList.contains("flower")) {
      title = `This is a beautiful flower.Feel the beauty of the flower.`;
      des = `A single flower blooms softly, bringing peace and color to the quiet garden.
      Its petals carry nature’s gentle beauty, filling the air with a sweet fragrance`;
    } 
    else if (card.classList.contains("animal")) {
      title = `The Wonders of Animals`;
      des = `Animals bring life and energy to our world, each one unique and fascinating.
      From the smallest insects to the largest mammals, every creature has its own beauty.`;
    } 
    else if (card.classList.contains("birds")) {
      title = `The Beauty of Birds`;
      des = `Birds fill the sky with color and song, bringing joy to every moment.
      From tiny hummingbirds to majestic eagles, each bird is a marvel of nature.`;
    } 
    else if (card.classList.contains("developer")) {
      title = `The World of Developers`;
      des = `Developers create solutions that shape the digital world with logic and creativity.
      From coding websites to building apps, every line of code makes an impact.`;
    }
     else if (card.classList.contains("me")) {
      title = `Hey I am Pollob .`;
      des = `I focused on improving  algorithms, data structures, and problem-solving skills through consistent coding challenges.`;
    } 
    else if (card.classList.contains("hacker")) {
      title = `The World of Hackers`;
      des = `Hackers explore digital systems, uncovering vulnerabilities and pushing the limits of technology.
      With skill and curiosity, they navigate networks, learning and experimenting in the cyber world.`;
    }

    //  add to modal
    modalImage.src = src;
    modalTitle.textContent = title;
    modalDes.textContent = des;

    // call detailsModal
    detailsModal.showModal();
  });
});
