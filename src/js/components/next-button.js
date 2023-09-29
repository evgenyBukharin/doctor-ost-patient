const nextButton = document.querySelector(".hero__button-next");
const cardSection = document.querySelector(".card");
nextButton.addEventListener("click", (e) => {
	e.preventDefault();
	cardSection.classList.add("card-visible");
});
