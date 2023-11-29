const nextButton = document.querySelector(".hero__button-next");
const cardSection = document.querySelector(".card");
nextButton.addEventListener("click", (e) => {
	e.preventDefault();
	cardSection.classList.add("card-visible");
});

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", (e) => {
	e.preventDefault();
	cardSection.classList.remove("card-visible");
});
