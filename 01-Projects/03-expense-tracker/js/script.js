const form = document.getElementById("form");
const main = document.getElementById("main");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const description = document.getElementById("description").value;
	const amount = document.getElementById("amount").value; 
	const container = document.createElement("div");
	const expense = document.createElement("p");
	const annulation = document.createElement("p");

	expense.innerHTML = description.concat(" - €", amount);
	annulation.innerHTML = "x";

	container.classList.add('container');
	expense.classList.add('depenses');
	annulation.classList.add('depenses');
	annulation.classList.add('cancel');

	container.appendChild(expense);
	container.appendChild(annulation);
	main.appendChild(container);

	annulation.addEventListener("click", () => {
		expense.remove();
		annulation.remove();
	});
	
	main.style.height = "auto";

	form.reset();
});