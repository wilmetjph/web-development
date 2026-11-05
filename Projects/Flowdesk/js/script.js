const start = document.querySelectorAll('.start');

start.forEach(start => start.addEventListener("click", () => {
	if (start.textContent == "Get started") {
		start.textContent = "Let's go!";
	} else {
		start.textContent = "Get started";
	}
}));

const discount = document.getElementById("discount");
const description = document.querySelectorAll(".description");

discount.addEventListener("click", function() {
	if (discount.textContent == "Click to get a discount !") {
		discount.textContent = "Thanks !";
	} else {
		discount.textContent = "Click to get a discount !";
	}
	description.forEach(description => description.classList.toggle('hidden'));
});

const nav = document.querySelector(".navigation");
const burger = document.getElementById("burger");
const link = document.querySelectorAll("a");
const questions = document.querySelectorAll(".faq_container")

burger.addEventListener("click", () => {
	nav.classList.toggle('open');
});

link.forEach(link => link.addEventListener("click", () => {
	if (nav.classList.contains('open')) {
		nav.classList.toggle('open');
	}
}))

questions.forEach(question => question.addEventListener("click", () => {
	if (question.classList.contains('cancel')) {
		document.getElementById('cancel').classList.toggle('hidden')
	}
	if (question.classList.contains('trial')) {
		document.getElementById('trial').classList.toggle('hidden')
	}
	if (question.classList.contains('change')) {
		document.getElementById('change').classList.toggle('hidden')
	}
	if (question.classList.contains('security')) {
		document.getElementById('security').classList.toggle('hidden')
	}
}))