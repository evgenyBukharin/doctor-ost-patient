const phoneButtons = document.querySelectorAll(".card__button-phone");
const hiddenPhoneInputs = document.querySelectorAll(".card__input-phone-hidden");
if (phoneButtons) {
	phoneButtons.forEach((btn, idx) => {
		btn.addEventListener("click", () => {
			hiddenPhoneInputs[idx].classList.toggle("card__input-phone-hidden");
		});
	});
}

document.querySelector(".card__form").addEventListener("submit", (e) => {
	e.preventDefault();
});
