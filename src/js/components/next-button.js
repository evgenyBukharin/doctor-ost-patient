const nextButton = document.querySelector(".hero__button-next");
const cardSection = document.querySelector(".card");

// required fields
const nextContactDateInput = document.getElementById("nextContactDate");
const commentInput = document.getElementById("comment");

nextButton.addEventListener("click", (e) => {
	e.preventDefault();
	if (nextContactDateInput.value.length == 0) {
		nextContactDateInput.style.border = "1px solid black";
		return;
	} else {
		nextContactDateInput.style.border = "1px solid var(--orange-color)";
	}
	if (commentInput.value.length == 0) {
		commentInput.style.border = "1px solid black";
		return;
	} else {
		commentInput.style.border = "1px solid var(--orange-color)";
	}
	cardSection.classList.add("card-visible");
});

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", (e) => {
	e.preventDefault();
	cardSection.classList.remove("card-visible");
});
