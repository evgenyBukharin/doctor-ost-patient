const outInput = document.getElementById("outgoing");
const inInput = document.getElementById("incoming");

outInput.addEventListener("change", () => {
	inInput.click();
});
inInput.addEventListener("change", () => {
	outInput.click();
});
