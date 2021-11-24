const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelectorAll(".stars");
stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
        star.classList.add("disabled");
        stars.forEach((otherStar,otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherStar.classList.add("active");
            }
        });
        console.log(clickedIdx+1);
    })
});