document.querySelector('.image-gallery').addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      // Scroll down
      this.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll up
      this.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    }
  });

let currentIndex = 0; // Start with the first image
const images = document.querySelectorAll('.image-container img');

function fadeImages() {
    images[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].style.opacity = 1;

    setTimeout(fadeImages, 3000); // Change every 3 seconds
}

fadeImages();

document.getElementById('enter-button').addEventListener('click', loadContent);

function loadContent() {
    document.getElementById('initial-screen').style.display = 'none';
    
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    
    const overlays = [
        'vhs-overlay-background',
        'logo-overlay',
        'vhs-overlay',
        'vhs-overlay-2'
    ];

    overlays.forEach(overlay => {
        const overlayElement = document.querySelector(`.${overlay}`);
        if (overlayElement) {
            overlayElement.style.display = 'block';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");
    const mainContent = document.getElementById("main-content");
    const audioPlayer = document.getElementById("player");

    enterButton.addEventListener("click", function() {
        audioPlayer.play();
        audioPlayer.volume = 0.5;
        document.getElementById("initial-screen").style.display = "none";
        
        mainContent.style.display = "block";
    });
});
