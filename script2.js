document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector("img.center-images, img.center-image-pro");
  
    if (image) {
      image.addEventListener("click", (e) => {
        for (let i = 0; i < 4; i++) {
          createEmojiSprinkle(e.pageX, e.pageY);
        }
      });
    }
  
    function createEmojiSprinkle(x, y) {
      const sparkle = document.createElement("span");
      sparkle.textContent = "✨";
      sparkle.className = "emoji-sparkle";
      sparkle.style.left = `${x + (Math.random() * 30 - 15)}px`;
      sparkle.style.top = `${y + (Math.random() * 30 - 15)}px`;
      document.body.appendChild(sparkle);
  
      setTimeout(() => sparkle.remove(), 1000);
    }
  });
  