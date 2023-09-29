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
const cityToggle = document.getElementById("city");
const observer = new MutationObserver(function (mutations) {
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

observer.observe(cityToggle, {
	attributeFilter: ["data-value"], //configure it to listen to attribute changes
});

// переключение филиалов
const filialls = document.querySelectorAll(".hero__filial");
let activeFillial = document.querySelector(".hero__filial-active");
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
