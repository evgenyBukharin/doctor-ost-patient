const timetable = document.querySelector(".timetable");
const hero = document.querySelector(".hero");
const card = document.querySelector(".card");
const button = document.getElementById("buttonDone");
button.addEventListener("click", () => {
	timetable.classList.add("timetable-visible");
	card.style.opacity = "0 !important";
	hero.style.opacity = "0";
});
