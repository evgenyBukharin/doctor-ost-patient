const toggles = document.querySelectorAll(".hero__toggle");
let activeToggle = document.querySelector(".hero__toggle-active");
toggles.forEach((toggleEl) => {
	let control = toggleEl.querySelector(".hero__control");
	control.addEventListener("click", () => {
		if (activeToggle !== null && activeToggle !== toggleEl) {
			activeToggle.classList.remove("hero__toggle-active");
		}
		activeToggle = toggleEl;

		toggleEl.classList.toggle("hero__toggle-active");
	});

	const items = toggleEl.querySelectorAll(".hero__item");
	const valueSpan = toggleEl.querySelector(".hero__text-toggle");
	if (!valueSpan.classList.contains("hero__text-toggle-empty")) {
		valueSpan.style.width = valueSpan.clientWidth + 50 + "px";
	}

	items.forEach((item) => {
		item.addEventListener("click", () => {
			itemValue = item.getAttribute("data-value");
			toggleEl.setAttribute("data-value", itemValue);

			activeToggle.classList.toggle("hero__toggle-active");
			activeToggle = null;
			valueSpan.innerHTML = itemValue;
		});
	});

	const list = toggleEl.querySelector(".hero__list");
	if (list.scrollHeight > list.clientHeight) {
		list.style.paddingRight = "10px";
	}
});
