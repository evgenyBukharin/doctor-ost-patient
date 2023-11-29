const doctorOstCities = [
	"Алматы",
	"Челябинск",
	"Екатеринбург",
	"Нижний Новгород",
	"Казань",
	"Краснодар",
	"Красноярск",
	"Новосибирск",
	"Пермь",
	"Самара",
	"Тюмень",
	"Уфа",
];
const detiIndigoCities = ["Алматы", "Челябинск", "Краснодар"];

const fillialContainer = document.querySelector(".hero__filials");

// обсервер изменений на городе
const cityToggleMain = document.getElementById("city");
const cityToggleSub = document.getElementById("medCenter");
const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.type === "attributes") {
			// Example of accessing the element for which
			// event was triggered
			// mutation.target.textContent = "Attribute of the element changed";
			let currentValue = mutation.target.getAttribute("data-value");

			localStorage.setItem("currentCity", currentValue);
			window.dispatchEvent(new CustomEvent("newCurrentCity"));

			if (doctorOstCities.includes(currentValue) && detiIndigoCities.includes(currentValue)) {
				mutation.target.classList.add("hero__toggle-show-filialls");
			} else {
				mutation.target.classList.remove("hero__toggle-show-filialls");
				fillialContainer.setAttribute("data-value", "");
			}
		}
	});
});

const observerSub = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.type === "attributes") {
			// Example of accessing the element for which
			// event was triggered
			// mutation.target.textContent = "Attribute of the element changed";
			let currentValue = mutation.target.getAttribute("data-value");

			if (doctorOstCities.includes(currentValue) && detiIndigoCities.includes(currentValue)) {
				mutation.target.classList.add("hero__toggle-show-filialls");
			} else {
				mutation.target.classList.remove("hero__toggle-show-filialls");
				fillialContainer.setAttribute("data-value", "");
			}
		}
	});
});

observer.observe(cityToggleMain, {
	attributeFilter: ["data-value"], //configure it to listen to attribute changes
});
observerSub.observe(cityToggleSub, {
	attributeFilter: ["data-value"], //configure it to listen to attribute changes
});

// переключение филиалов
const filliallBlocks = document.querySelectorAll(".hero__filials");
filliallBlocks.forEach((block) => {
	const filialls = block.querySelectorAll(".hero__filial");
	let activeFillial = block.querySelector(".hero__filial-active");
	filialls.forEach((el) => {
		el.addEventListener("click", () => {
			if (activeFillial !== el && activeFillial) {
				activeFillial.classList.remove("hero__filial-active");
			}
			fillialContainer.setAttribute("data-value", el.getAttribute("data-value"));
			el.classList.add("hero__filial-active");
			activeFillial = el;
		});
	});
});
