const outInput = document.getElementById("outgoing");
const inInput = document.getElementById("incoming");

const sourceList = document.getElementById("source");

outInput.addEventListener("change", () => {
	inInput.click();
	if (outInput.checked) {
		sourceList.style.display = "none";
	} else {
		sourceList.style.display = "flex";
	}
});
inInput.addEventListener("change", () => {
	outInput.click();
});
