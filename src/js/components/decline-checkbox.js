const hiddenContent = document.getElementById("illContainer");

const declineCheckbox = document.getElementById("otkazPervichnoyZapisi");

hiddenContent.style.display = "none";

declineCheckbox.addEventListener("change", () => {
	if (declineCheckbox.checked) {
		hiddenContent.style.display = "flex";
	} else {
		hiddenContent.style.display = "none";
	}
});
