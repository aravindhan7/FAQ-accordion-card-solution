const questions = document.querySelectorAll(".question-arrow-container");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

let activeIndex = -1;

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (activeIndex !== -1) {
            answers[activeIndex].classList.add("hidden");
            questions[activeIndex].classList.remove("dark");
            arrows[activeIndex].classList.remove("rotate");
        }
        
        if (activeIndex !== index) {
            answers[index].classList.remove("hidden");
            question.classList.add("dark");
            arrows[index].classList.add("rotate");
            activeIndex = index;
        } else {
            activeIndex = -1;
        }
    });
});




