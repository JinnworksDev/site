function showTime() {
  const el = document.getElementById('currentTime');
  if (!el) return;
  el.textContent = new Date().toUTCString().split(' ')[4] || '--:--:--';
}

function initShared() {
  showTime();
  setInterval(showTime, 1000);

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const clock = document.getElementById('currentTime');
  if (!clock) return;

  let t = 0;
  setInterval(() => {
    t++;
    const on = t % 9 !== 0;
    clock.style.opacity = on ? '1' : '.75';
  }, 650);
}

initShared();