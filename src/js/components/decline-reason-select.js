const citySelector = document.getElementById("secondHiddenContent");
const reasonSelect = document.getElementById("reason");

const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.type === "attributes") {
			// Example of accessing the element for which
			// event was triggered
			// mutation.target.textContent = "Attribute of the element changed";
			let currentValue = mutation.target.getAttribute("data-value");
			if (currentValue == "Перенаправлен в наш центр в другом городе") {
				citySelector.style.display = "flex";
			} else {
				citySelector.style.display = "none";
			}
		}
	});
});
observer.observe(reasonSelect, {
	attributeFilter: ["data-value"], //configure it to listen to attribute changes
});
