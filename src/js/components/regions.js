const regions = [
	{
		id: 1,
		district_id: 2,
		name: "Республика Адыгея",
	},
	{
		id: 4,
		district_id: 5,
		name: "Республика Алтай",
	},
	{
		id: 22,
		district_id: 5,
		name: "Алтайский край",
	},
	{
		id: 28,
		district_id: 4,
		name: "Амурская область",
	},
	{
		id: 29,
		district_id: 3,
		name: "Архангельская область",
	},
	{
		id: 30,
		district_id: 2,
		name: "Астраханская область",
	},
	{
		id: 2,
		district_id: 7,
		name: "Республика Башкортостан",
	},
	{
		id: 31,
		district_id: 1,
		name: "Белгородская область",
	},
	{
		id: 32,
		district_id: 1,
		name: "Брянская область",
	},
	{
		id: 3,
		district_id: 5,
		name: "Республика Бурятия",
	},
	{
		id: 33,
		district_id: 1,
		name: "Владимирская область",
	},
	{
		id: 34,
		district_id: 2,
		name: "Волгоградская область",
	},
	{
		id: 35,
		district_id: 3,
		name: "Вологодская область",
	},
	{
		id: 36,
		district_id: 1,
		name: "Воронежская область",
	},
	{
		id: 5,
		district_id: 8,
		name: "Республика Дагестан",
	},
	{
		id: 79,
		district_id: 4,
		name: "Еврейская АО",
	},
	{
		id: 75,
		district_id: 5,
		name: "Забайкальский край",
	},
	{
		id: 37,
		district_id: 1,
		name: "Ивановская область",
	},
	{
		id: 6,
		district_id: 8,
		name: "Республика Ингушетия",
	},
	{
		id: 38,
		district_id: 5,
		name: "Иркутская область",
	},
	{
		id: 7,
		district_id: 8,
		name: "Кабардино-Балкарская Республика",
	},
	{
		id: 39,
		district_id: 3,
		name: "Калининградская область",
	},
	{
		id: 8,
		district_id: 2,
		name: "Республика Калмыкия",
	},
	{
		id: 40,
		district_id: 1,
		name: "Калужская область",
	},
	{
		id: 41,
		district_id: 4,
		name: "Камчатский край",
	},
	{
		id: 9,
		district_id: 8,
		name: "Карачаево-Черкесская Республика",
	},
	{
		id: 10,
		district_id: 3,
		name: "Республика Карелия",
	},
	{
		id: 42,
		district_id: 5,
		name: "Кемеровская область",
	},
	{
		id: 43,
		district_id: 7,
		name: "Кировская область",
	},
	{
		id: 11,
		district_id: 3,
		name: "Республика Коми",
	},
	{
		id: 44,
		district_id: 1,
		name: "Костромская область",
	},
	{
		id: 23,
		district_id: 2,
		name: "Краснодарский край",
	},
	{
		id: 24,
		district_id: 5,
		name: "Красноярский край",
	},
	{
		id: 45,
		district_id: 6,
		name: "Курганская область",
	},
	{
		id: 46,
		district_id: 1,
		name: "Курская область",
	},
	{
		id: 47,
		district_id: 3,
		name: "Ленинградская область",
	},
	{
		id: 78,
		district_id: 3,
		name: "Санкт-Петербург и пригород",
	},
	{
		id: 48,
		district_id: 1,
		name: "Липецкая область",
	},
	{
		id: 49,
		district_id: 4,
		name: "Магаданская область",
	},
	{
		id: 12,
		district_id: 7,
		name: "Республика Марий Эл",
	},
	{
		id: 13,
		district_id: 7,
		name: "Республика Мордовия",
	},
	{
		id: 50,
		district_id: 1,
		name: "Московская область",
	},
	{
		id: 77,
		district_id: 1,
		name: "Москва и пригород",
	},
	{
		id: 51,
		district_id: 3,
		name: "Мурманская область",
	},
	{
		id: 83,
		district_id: 3,
		name: "Ненецкий АО",
	},
	{
		id: 52,
		district_id: 7,
		name: "Нижегородская область",
	},
	{
		id: 53,
		district_id: 3,
		name: "Новгородская область",
	},
	{
		id: 54,
		district_id: 5,
		name: "Новосибирская область",
	},
	{
		id: 55,
		district_id: 5,
		name: "Омская область",
	},
	{
		id: 56,
		district_id: 7,
		name: "Оренбургская область",
	},
	{
		id: 57,
		district_id: 1,
		name: "Орловская область",
	},
	{
		id: 58,
		district_id: 7,
		name: "Пензенская область",
	},
	{
		id: 59,
		district_id: 7,
		name: "Пермский край",
	},
	{
		id: 25,
		district_id: 4,
		name: "Приморский край",
	},
	{
		id: 60,
		district_id: 3,
		name: "Псковская область",
	},
	{
		id: 61,
		district_id: 2,
		name: "Ростовская область",
	},
	{
		id: 62,
		district_id: 1,
		name: "Рязанская область",
	},
	{
		id: 63,
		district_id: 7,
		name: "Самарская область",
	},
	{
		id: 64,
		district_id: 7,
		name: "Саратовская область",
	},
	{
		id: 14,
		district_id: 4,
		name: "Республика Сахалин (Якутия)",
	},
	{
		id: 65,
		district_id: 4,
		name: "Сахалинская область",
	},
	{
		id: 66,
		district_id: 6,
		name: "Свердловская область",
	},
	{
		id: 15,
		district_id: 8,
		name: "Республика Северная Осетия - Алания",
	},
	{
		id: 67,
		district_id: 1,
		name: "Смоленская область",
	},
	{
		id: 26,
		district_id: 8,
		name: "Ставропольский край",
	},
	{
		id: 68,
		district_id: 1,
		name: "Тамбовская область",
	},
	{
		id: 16,
		district_id: 7,
		name: "Республика Татарстан",
	},
	{
		id: 69,
		district_id: 1,
		name: "Тверская область",
	},
	{
		id: 70,
		district_id: 5,
		name: "Томская область",
	},
	{
		id: 71,
		district_id: 1,
		name: "Тульская область",
	},
	{
		id: 17,
		district_id: 5,
		name: "Республика Тыва",
	},
	{
		id: 72,
		district_id: 6,
		name: "Тюменская область",
	},
	{
		id: 18,
		district_id: 7,
		name: "Удмуртская Республика",
	},
	{
		id: 73,
		district_id: 7,
		name: "Ульяновская область",
	},
	{
		id: 27,
		district_id: 4,
		name: "Хабаровский край",
	},
	{
		id: 19,
		district_id: 5,
		name: "Республика Хакасия",
	},
	{
		id: 86,
		district_id: 6,
		name: "Ханты-Мансийский Автономный округ",
	},
	{
		id: 74,
		district_id: 6,
		name: "Челябинская область",
	},
	{
		id: 20,
		district_id: 8,
		name: "Чеченская Республика",
	},
	{
		id: 21,
		district_id: 7,
		name: "Чувашская Республика",
	},
	{
		id: 87,
		district_id: 4,
		name: "Чукотский АО",
	},
	{
		id: 89,
		district_id: 6,
		name: "Ямало-Ненецкий АО",
	},
	{
		id: 76,
		district_id: 1,
		name: "Ярославская область",
	},
];

const regionInput = document.getElementById("region");
regionInput.addEventListener("input", () => {
	let matchedRegions = regions.filter(function (region) {
		const name = region.name;
		return name.includes(regionInput.value);
	});
	if (matchedRegions.length > 0) {
		redrawList(matchedRegions, "simplebar-content");
	} else {
		redrawList([{ name: "Совпадений нет" }], "simplebar-content");
	}
});

function redrawList(array, listClass) {
	const list = document.querySelector(`.${listClass}`);
	list.innerHTML = "";
	array.forEach((region) => {
		let div = document.createElement("div");
		div.classList = "card__item";
		div.innerHTML = region.name;
		div.addEventListener("click", () => {
			regionInput.value = div.innerHTML;
		});
		list.appendChild(div);
	});
}

redrawList(regions, "card__list");
