// Cyberpunk Theme Scripts

// Neon Cursor Effect
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.neon-cursor');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  // Glow effect on hover
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.borderColor = '#ff00ff';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.borderColor = '#00ffff';
    });
  });
});

// Typing Effect for Title
function typeWriter() {
  const title = document.querySelector('.glitch-text');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  
  let i = 0;
  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  
  setTimeout(type, 500);
}

// Run on page load
document.addEventListener('DOMContentLoaded', typeWriter);

// Scanline Animation
function animateScanlines() {
  const scanlines = document.querySelector('.cyber-scanlines');
  if (!scanlines) return;
  
  let position = 0;
  function scan() {
    position += 0.5;
    if (position > 100) position = 0;
    scanlines.style.backgroundPosition = `0 ${position}%`;
    requestAnimationFrame(scan);
  }
  scan();
}

// Run scanline animation
document.addEventListener('DOMContentLoaded', animateScanlines);
