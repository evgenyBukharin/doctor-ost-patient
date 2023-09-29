const hiddenContainer = document.querySelector(".card__container");
const checkbox = document.getElementById("otherPersonOrdering");

checkbox.addEventListener("change", () => {
	checkbox.classList.toggle("accordion-open");
	if (checkbox.classList.contains("accordion-open")) {
		hiddenContainer.style.maxHeight = hiddenContainer.scrollHeight + "px";
	} else {
		hiddenContainer.style.maxHeight = null;
	}
});
