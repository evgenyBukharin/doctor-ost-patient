import { Datepicker } from "vanillajs-datepicker";
import axios from "axios";

// datepicker global settings
(function () {
	Datepicker.locales.en = {
		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		daysShort: ["Вск", "Пон", "Втр", "Ср", "Чт", "Птн", "Сбт"],
		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		months: [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь",
		],
		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		today: "Сегодня",
		clear: "Очистить",
		titleFormat: "MM yy",
		format: "dd.mm.yyyy",
		weekStart: 0,
	};
})();

const datePicker = new Datepicker(document.querySelector(".card__input-date"), {
	autohide: true,
	format: "dd.mm.yyyy",
});

const checkButton = document.querySelector(".card__button-check");
const idInput = document.getElementById("patientId");
if (checkButton) {
	checkButton.addEventListener("click", () => {
		checkButton.classList.add("card__button-check-waiting");
		checkButton.innerHTML = "Поиск пациента...";
		if (document.getElementById("otherPersonOrdering").checked) {
			axios
				.post("https://b24-ost.ru/telephoneWidget/webhooks/searchPacient.php", {
					surname: document.getElementById("surname-pacient").value,
					name: document.getElementById("name-pacient").value,
					fatherName: document.getElementById("fatherName-pacient").value,
					birthDay: datePicker.getDate("dd.mm.yyyy"),
					city: document.getElementById("city").getAttribute("data-value"),
				})
				.then((r) => r.data)
				.then((responseData) => {
					checkButton.classList.remove("card__button-check-waiting");
					if (responseData == 0) {
						checkButton.innerHTML = "Новый пациент";
					} else {
						checkButton.innerHTML = "Пациент найден";
						idInput.setAttribute("value", responseData);
					}
				})
				.catch((error) => {
					checkButton.innerHTML = "Ошибка";
				});
		} else {
			axios
				.post("https://b24-ost.ru/telephoneWidget/webhooks/searchPacient.php", {
					surname: document.getElementById("surname").value,
					name: document.getElementById("name").value,
					fatherName: document.getElementById("fatherName").value,
					birthDay: datePicker.getDate("dd.mm.yyyy"),
					city: document.getElementById("city").getAttribute("data-value"),
				})
				.then((r) => r.data)
				.then((responseData) => {
					checkButton.classList.remove("card__button-check-waiting");
					if (responseData == 0) {
						checkButton.innerHTML = "Новый пациент";
					} else {
						checkButton.innerHTML = "Пациент найден";
						idInput.setAttribute("value", responseData);
					}
				})
				.catch((error) => {
					checkButton.innerHTML = "Ошибка";
				});
		}
	});
}
