document.addEventListener("DOMContentLoaded", function () {
    const flowerRainContainer = document.querySelector(".flower-rain");
    
    function createFlower() {
        const flower = document.createElement("img");
        flower.src = "./rose.jpeg"
        flower.classList.add("falling-flower");
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = Math.random() * 3 + 2 + "s";
        flower.style.width = Math.random() * 40 + 20 + "px"; // Varying flower sizes
        flowerRainContainer.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
    
    setInterval(createFlower, 300);
});
