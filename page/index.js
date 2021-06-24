const card = document.querySelector(".card__inner");

card.addEventListener("click", function(e) {
    card.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card_inner");

card2.addEventListener("click", function(e) {
    card2.classList.toggle('flip');
});