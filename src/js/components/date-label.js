import { Datepicker } from "vanillajs-datepicker";

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

const rangepicker = new Datepicker(document.querySelector(".card__input-date"), {
	autohide: true,
	format: "dd.mm.yyyy",
});
