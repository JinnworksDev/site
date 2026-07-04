function showTime() {
  const el = document.getElementById('currentTime');
  if (!el) return;

  el.textContent = new Date().toUTCString().split(' ')[4] || '--:--:--';
}

showTime();
setInterval(showTime, 1000);

document.getElementById('year').textContent = new Date().getFullYear();

// Small flicker effect for retro feel (safe/cheap)
(function () {
  const clock = document.getElementById('currentTime');
  if (!clock) return;

  let t = 0;
  setInterval(() => {
    t++;
    const on = t % 9 !== 0;
    clock.style.opacity = on ? '1' : '.75';
  }, 650);
})();