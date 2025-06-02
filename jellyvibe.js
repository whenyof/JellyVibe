// jellyvibe.js
function copyToClipboard() {
    const address = document.getElementById("tokenAddress").innerText;
    navigator.clipboard.writeText(address).then(() => {
      const confirm = document.getElementById("copy-confirmation");
      confirm.style.opacity = 1;
      setTimeout(() => {
        confirm.style.opacity = 0;
      }, 2000);
    });
  }
  
    // Define la fecha límite (en este caso, 1 de julio de 2025)
  const targetDate = new Date("2025-07-01T00:00:00").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Launched!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }, 1000);
