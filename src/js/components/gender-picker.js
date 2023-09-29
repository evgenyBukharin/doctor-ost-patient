const marks = document.querySelectorAll(".card__mark");
const genderInput = document.getElementById("gender");
let activeMark = document.querySelector(".card__mark-active");

marks.forEach((mark) => {
	mark.addEventListener("click", () => {
		genderInput.setAttribute("value", mark.getAttribute("data-value"));
		if (activeMark) {
			activeMark.classList.remove("card__mark-active");
		}
		mark.classList.add("card__mark-active");
		activeMark = mark;
	});
});
