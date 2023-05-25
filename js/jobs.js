let accButtons = document.querySelectorAll(".accordion-button");

for (let i = 0; i < accButtons.length; i++) {
    const accButton = accButtons[i];
    const accContent = document.querySelector(`#accordion-${i+1}-content`);

    accButton.addEventListener("click", function() {
        const isActive = this.classList.contains("active");

        for (let j = 0; j < accButtons.length; j++) {
            accButtons[j].classList.remove("active");
            document.querySelector(`#accordion-${j+1}-content`).style.display = "none";
            accButtons[j].querySelector(".accordion-icon").innerText = '+';
        }

        if (!isActive) {
            this.classList.add("active");
            accContent.style.display = "block";
            this.querySelector(".accordion-icon").innerText = '-';
        } else {
            accContent.style.display = "none";
            this.querySelector(".accordion-icon").innerText = '+';
        }
    });
}
