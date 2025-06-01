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
  
  function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const targetDate = new Date();
    targetDate.setMonth(now.getMonth() + 1); // Suma 1 mes

    function updateCountdown() {
      const now = new Date();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        countdownElement.textContent = "¡El tiempo ha terminado!";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      countdownElement.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  window.onload = startCountdown;
